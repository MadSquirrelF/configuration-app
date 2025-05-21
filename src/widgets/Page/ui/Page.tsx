import clsx from "clsx";
import { memo, ReactNode } from "react";

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { className, children } = props;

  return (
    <main
      className={clsx(`flex flex-grow flex-col h-screen py-8 px-28`, className)}
    >
      {children}
    </main>
  );
});
