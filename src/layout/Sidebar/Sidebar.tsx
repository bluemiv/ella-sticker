import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import SidebarSection from './SidebarSection';
import { useParams } from 'react-router-dom';
import stickerApi from '../../api/stickerApi';
import { DASHBOARD_ID } from '../../constants';

const Sidebar = () => {
  const params = useParams();
  const user = params.user;

  const [curMonthData, setCurMonthData] = useState<{
    sticker: { [key: string]: any };
    discard: number[];
  } | null>(null);

  const fetchData = async () => {
    const { url } = stickerApi.getSticker({
      user: params?.user?.toLocaleUpperCase() || DASHBOARD_ID.ELLA,
      year: dayjs().year(),
    });
    const res = await fetch(url);
    return res.json();
  };

  useEffect(() => {
    fetchData().then((sticker) => setCurMonthData(sticker[`${dayjs().month() + 1}`]));
  }, []);

  const totalSticker = Object.values(curMonthData?.sticker || {}).reduce(
    (acc, cnt) => acc + cnt,
    0,
  );

  return (
    <div className="bg-sidebar-background w-[330px] p-md flex flex-col justify-between h-full">
      <aside className="flex flex-col gap-md">
        <SidebarSection>
          <div className="text-center text-3xl">{user?.toLocaleUpperCase()} 스티커</div>
        </SidebarSection>
        <SidebarSection title="이번달 현황">
          <div>총 받은 스티커 {totalSticker}개</div>
        </SidebarSection>
        <SidebarSection title="연도별 현황">
          <div>🚧 공사중</div>
        </SidebarSection>
        <SidebarSection title="차트 분석">
          <div>🚧 공사중</div>
        </SidebarSection>
      </aside>
      <footer className="text-sm text-center">
        © {dayjs().year()} bluemiv. Some rights reserved.
      </footer>
    </div>
  );
};

export default Sidebar;
