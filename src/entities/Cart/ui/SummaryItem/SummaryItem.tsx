import { memo } from "react";

interface SummaryItemProps {
  className?: string;
  name: string;
  price: number;
}

export const SummaryItem = memo((props: SummaryItemProps) => {
  const { className, name, price } = props;

  return (
    <div className="flex flex-row w-full gap-4 items-center justify-between">
      <span>{name}</span>
      <span>${price}</span>
    </div>
  );
});
