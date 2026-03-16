"use client";

import clsx from 'clsx';
import { useTitle } from '../hooks/useTitle';



interface Props {
  className?: string;
}

export const DashboardTitle = (props: Props) => {
  const title = useTitle();

  return (
    <div className={clsx(props.className, "flex items-center gap-2")}>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};
