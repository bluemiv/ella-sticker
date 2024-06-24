import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import SidebarSection from './SidebarSection';

const Sidebar = () => {
  const [curMonthData, setCurMonthData] = useState<{
    sticker: { [key: string]: any };
    discard: number[];
  } | null>(null);

  const fetchData = async () => {
    const res = await fetch(`/data/${dayjs().year()}/sticker.json`);
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
          <div className="text-center text-3xl">Ella Sticker</div>
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
