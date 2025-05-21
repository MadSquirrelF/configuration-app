import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { memo } from "react";

import { MoneyReciveIcon } from "@/src/shared/assets/icons/icons";
import { subtitle, title } from "@/src/shared/constants/primitives";

interface TotalCardProps {
  className?: string;
}

export const TotalCard = memo((props: TotalCardProps) => {
  const { className } = props;

  return (
    <Card className="bg-card p-2 rounded-3xl shadow-none min-h-36">
      <CardBody className="flex flex-col gap-5">
        <div className="w-full flex flex-row gap-6 items-center justify-between">
          <span
            className={subtitle({
              size: "sm",
            })}
          >
            Total
          </span>
          <p
            className={subtitle({
              size: "sm",
            })}
          >
            <span
              className={title({
                size: "tiny",
              })}
            >
              $179.99
            </span>
            / month
          </p>
        </div>
        <Button
          fullWidth
          className="flex-none"
          color="primary"
          endContent={<MoneyReciveIcon />}
          size="lg"
          variant="solid"
        >
          Let&apos;s get started
        </Button>
      </CardBody>
    </Card>
  );
});
