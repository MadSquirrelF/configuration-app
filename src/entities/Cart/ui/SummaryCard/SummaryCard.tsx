import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { memo, useCallback } from "react";
import { Divider } from "@heroui/divider";

import { SummaryConfigurations } from "../SummaryConfigurations/SummaryConfigurations";
import { SummaryList } from "../SummaryList/SummaryList";

import { title } from "@/src/shared/constants/primitives";
import { InfoIcon } from "@/src/shared/assets/icons/icons";
import { useConfigurationStore } from "@/src/entities/Configuration/model/store/useConfigurationStore";

interface SummaryCardProps {
  className?: string;
}

export const SummaryCard = memo((props: SummaryCardProps) => {
  const { className } = props;

  const oc = useConfigurationStore((state) => state.oc);

  const basePrice = useConfigurationStore((state) => state.basePrice);
  const cpuPrice = useConfigurationStore((state) => state.cpuPrice);
  const cpuTypePrice = useConfigurationStore((state) => state.cpuTypePrice);
  const memoryPrice = useConfigurationStore((state) => state.memoryPrice);
  const storagePrice = useConfigurationStore((state) => state.storagePrice);
  const backupPrice = useConfigurationStore((state) => state.backupPrice);
  const transferPrice = useConfigurationStore((state) => state.transferPrice);
  const ocPrice = useConfigurationStore((state) => state.ocPrice);
  const isAnnuallyDuration = useConfigurationStore(
    (state) => state.isAnnuallyDuration,
  );
  const setOc = useConfigurationStore((state) => state.setOc);
  const toggleDuration = useConfigurationStore((state) => state.toggleDuration);
  const handleChangeOC = useCallback((value: string) => {
    setOc(value);
  }, []);

  const handleChangeDuration = useCallback((value: boolean) => {
    toggleDuration(value);
  }, []);

  return (
    <Card className="bg-card p-2 rounded-[40px] shadow-none h-full">
      <CardHeader className="w-full flex flex-row items-center justify-between">
        <h4
          className={title({
            size: "sm",
          })}
        >
          Summary
        </h4>

        <Button isIconOnly color="primary" variant="light">
          <InfoIcon />
        </Button>
      </CardHeader>
      <CardBody>
        <SummaryConfigurations
          isAnnuallyDuration={isAnnuallyDuration}
          oc={oc}
          onChangeAnnuallyDuration={handleChangeDuration}
          onChangeOC={handleChangeOC}
        />

        <Divider className="my-4" />
        <SummaryList
          backupPrice={backupPrice}
          basePrice={basePrice}
          cpuPrice={cpuPrice}
          cpuTypePrice={cpuTypePrice}
          memoryPrice={memoryPrice}
          ocPrice={ocPrice}
          storagePrice={storagePrice}
          transferPrice={transferPrice}
        />
      </CardBody>
    </Card>
  );
});
