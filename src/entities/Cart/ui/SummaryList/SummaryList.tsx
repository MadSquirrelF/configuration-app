"use client";
import { memo } from "react";

import { subtitle } from "@/src/shared/constants/primitives";

interface SummaryListProps {
  className?: string;
  basePrice: number;
  cpuPrice: number;
  cpuTypePrice: number;
  memoryPrice: number;
  storagePrice: number;
  backupPrice: number;
  transferPrice: number;
  ocPrice: number;
}

export const SummaryList = memo((props: SummaryListProps) => {
  const {
    className,
    basePrice,
    cpuPrice,
    cpuTypePrice,
    memoryPrice,
    storagePrice,
    backupPrice,
    ocPrice,
    transferPrice,
  } = props;

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
      <div className="flex flex-col gap-5">
        <div className="flex flex-row w-full gap-4 items-center justify-between">
          <span>Base price</span>
          <span>${basePrice.toFixed(2)}</span>
        </div>
        <div className="flex flex-row w-full gap-4 items-center justify-between">
          <span>CPU type</span>
          <span>${cpuTypePrice.toFixed(2)}</span>
        </div>
        <div className="flex flex-row w-full gap-4 items-center justify-between">
          <span>CPU (GHz)</span>
          <span>${cpuPrice.toFixed(2)}</span>
        </div>
        <div className="flex flex-row w-full gap-4 items-center justify-between">
          <span>Memory (RAM DDR4)</span>
          <span>${memoryPrice.toFixed(2)}</span>
        </div>
        <div className="flex flex-row w-full gap-4 items-center justify-between">
          <span>Storage (SSD RAID)</span>
          <span>${storagePrice.toFixed(2)}</span>
        </div>
        <div className="flex flex-row w-full gap-4 items-center justify-between">
          <span>Backup storage (HDD)</span>
          <span>${backupPrice.toFixed(2)}</span>
        </div>
        <div className="flex flex-row w-full gap-4 items-center justify-between">
          <span>Transfer (Gbps)</span>
          <span>${transferPrice.toFixed(2)}</span>
        </div>
        <div className="flex flex-row w-full gap-4 items-center justify-between">
          <span>Operating system</span>
          <span>${ocPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
});
