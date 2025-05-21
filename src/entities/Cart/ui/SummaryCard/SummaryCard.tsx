import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { memo } from "react";
import { Divider } from "@heroui/divider";

import { SummaryConfigurations } from "../SummaryConfigurations/SummaryConfigurations";
import { SummaryList } from "../SummaryList/SummaryList";

import { title } from "@/src/shared/constants/primitives";
import { InfoIcon } from "@/src/shared/assets/icons/icons";

interface SummaryCardProps {
  className?: string;
}

export const SummaryCard = memo((props: SummaryCardProps) => {
  const { className } = props;

  return (
    <Card className="bg-card p-2 rounded-3xl shadow-none h-full">
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
        <SummaryConfigurations />

        <Divider className="my-4" />
        <SummaryList />
      </CardBody>
    </Card>
  );
});
