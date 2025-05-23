"use client";
import { memo } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";

import { ConfigurationList } from "../ConfigurationList/ConfigurationList";

import { title } from "@/src/shared/constants/primitives";
import { InfoIcon } from "@/src/shared/assets/icons/icons";

interface ConfigurationCardProps {
  className?: string;
}

export const ConfigurationCard = memo((props: ConfigurationCardProps) => {
  const { className } = props;

  return (
    <Card className="bg-card w-full p-3 rounded-[40px] shadow-none">
      <CardHeader className="w-full flex flex-row items-center justify-between">
        <h4
          className={title({
            size: "sm",
          })}
        >
          Configuration
        </h4>

        <Button isIconOnly color="primary" variant="light">
          <InfoIcon />
        </Button>
      </CardHeader>
      <CardBody>
        <ConfigurationList />
      </CardBody>
    </Card>
  );
});
