"use client";
import { memo } from "react";
import { motion } from "framer-motion";

import { ConfigurationCard } from "@/src/entities/Configuration/ui/ConfigurationCard/ConfigurationCard";
import { SummaryCard } from "@/src/entities/Cart/ui/SummaryCard/SummaryCard";
import { TotalCard } from "@/src/entities/Cart/ui/TotalCard/TotalCard";
import { useConfigurationStore } from "@/src/entities/Configuration/model/store/useConfigurationStore";

interface ConfigurationBoardProps {
  className?: string;
}

export const ConfigurationBoard = memo((props: ConfigurationBoardProps) => {
  const { className } = props;

  const totalPrice = useConfigurationStore((state) => state.totalPrice);

  const isAnnuallyDuration = useConfigurationStore(
    (state) => state.isAnnuallyDuration,
  );

  return (
    <div className="w-full flex xl:flex-row flex-col gap-6 mb-6">
      <motion.div
        animate={{
          y: 0,
          x: 0,
          opacity: 1,
        }}
        className="w-full"
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 1,
        }}
      >
        <ConfigurationCard />
      </motion.div>

      <div className="flex flex-col gap-6 md:min-w-[350px] xl:w-2/4 w-full">
        <motion.div
          animate={{
            y: 0,
            x: 0,
            opacity: 1,
          }}
          className="h-full"
          initial={{
            opacity: 0,
            x: 200,
          }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 1.5,
          }}
        >
          <SummaryCard />
        </motion.div>
        <motion.div
          animate={{
            y: 0,
            x: 0,
            opacity: 1,
          }}
          initial={{
            opacity: 0,
            x: 200,
          }}
          transition={{
            type: "spring",
            duration: 3,
          }}
        >
          <TotalCard
            isAnnuallyDuration={isAnnuallyDuration}
            totalPrice={totalPrice}
          />
        </motion.div>
      </div>
    </div>
  );
});
