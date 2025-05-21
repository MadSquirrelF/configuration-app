"use client";
import { memo } from "react";

import { SummaryItem } from "../SummaryItem/SummaryItem";

import { subtitle } from "@/src/shared/constants/primitives";

interface SummaryListProps {
  className?: string;
}

export const SummaryList = memo((props: SummaryListProps) => {
  const { className } = props;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-4 items-center justify-between">
        <span
          className={subtitle({
            size: "sm",
            bold: "bold",
            color: "white",
          })}
        >
          Components
        </span>
        <span
          className={subtitle({
            size: "sm",
            bold: "bold",
            color: "white",
          })}
        >
          Price
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <SummaryItem name={"Base price"} price={0} />
        <SummaryItem name={"CPU type"} price={0} />
        <SummaryItem name={"Memory (RAM DDR4)"} price={0} />
        <SummaryItem name={"Storage (SSD RAID)"} price={0} />
        <SummaryItem name={"Backup storage (HDD)"} price={0} />
        <SummaryItem name={"Transfer (Gbps)"} price={0} />
      </div>
    </div>
  );
});
