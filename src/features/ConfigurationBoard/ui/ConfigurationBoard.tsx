import { memo } from "react";

import { ConfigurationCard } from "@/src/entities/Configuration/ui/ConfigurationCard/ConfigurationCard";
import { SummaryCard } from "@/src/entities/Cart/ui/SummaryCard/SummaryCard";
import { TotalCard } from "@/src/entities/Cart/ui/TotalCard/TotalCard";

interface ConfigurationBoardProps {
  className?: string;
}

export const ConfigurationBoard = memo((props: ConfigurationBoardProps) => {
  const { className } = props;

  return (
    <div className="w-full flex flex-row gap-6">
      <ConfigurationCard />
      <div className="flex flex-col gap-6 w-2/4">
        <SummaryCard />
        <TotalCard />
      </div>
    </div>
  );
});
