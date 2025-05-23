import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { memo } from "react";
import { Chip } from "@heroui/chip";

import { MoneyReciveIcon } from "@/src/shared/assets/icons/icons";
import { subtitle, title } from "@/src/shared/constants/primitives";

interface TotalCardProps {
  className?: string;
  totalPrice: number;
  isAnnuallyDuration: boolean;
}

export const TotalCard = memo((props: TotalCardProps) => {
  const { className, totalPrice, isAnnuallyDuration } = props;

  return (
    <Card className="bg-[#1E3346] p-2 rounded-[40px] shadow-none min-h-36">
      <CardBody className="flex flex-col gap-5">
        <div className="w-full flex flex-row gap-6 items-center justify-between">
          <span
            className={subtitle({
              size: "sm",
            })}
          >
            Total
          </span>
          <div className="flex flex-row gap-2 items-center">
            {isAnnuallyDuration && (
              <Chip className="animate-appearance-in" color="primary" size="sm">
                -33%
              </Chip>
            )}

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
                ${totalPrice}
              </span>
              / {isAnnuallyDuration ? "annually" : "month"}
            </p>
          </div>
        </div>
        <Button
          fullWidth
          className="flex-none justify-between h-16 text-lg"
          color="primary"
          endContent={<MoneyReciveIcon size={30} />}
          radius="full"
          size="lg"
          variant="solid"
        >
          Let&apos;s get started
        </Button>
      </CardBody>
    </Card>
  );
});
