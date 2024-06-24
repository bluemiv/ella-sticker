import React, { ReactNode } from 'react';
import { TPropsWithChildren, TPropsWithComponent } from '../../types';
import classNames from 'classnames';

interface TProps {
  title?: ReactNode;
}

const SidebarSection = ({ title, className, children }: TPropsWithComponent<TProps>) => {
  return (
    <section className={classNames('rounded-md p-md w-full bg-white/10', className)}>
      {!!title && <h6 className="text-sm font-semibold mb-md">{title}</h6>}
      {!!children && <div>{children}</div>}
    </section>
  );
};

export default SidebarSection;
