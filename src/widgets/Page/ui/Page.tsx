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
      className={clsx(
        `flex flex-grow flex-col h-screen overflow-x-hidden py-3 px-3 md:py-5 md:px-5 lg:py-8 lg:px-28`,
        className,
      )}
    >
      {children}
    </main>
  );
});
