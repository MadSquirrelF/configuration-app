import { NumberInput } from "@heroui/number-input";
import { Slider } from "@heroui/slider";
import { memo } from "react";

interface ConfigurationTransferProps {
  className?: string;
  value: number[];
  onChange: (value: number | number[]) => void;
  onChangeFrom: (value: number) => void;
  onChangeTo: (value: number) => void;
}

export const ConfigurationTransfer = memo(
  (props: ConfigurationTransferProps) => {
    const { className, value, onChange, onChangeFrom, onChangeTo } = props;

    return (
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex md:flex-row flex-col gap-9 items-center justify-between">
          <span>Transfer (Gbps)</span>

          <div className="flex md:flex-row flex-col gap-5 items-center justify-center">
            <div className="flex flex-row  gap-5 items-center">
              <NumberInput
                className="max-w-40"
                classNames={{
                  label: "text-white font-medium",
                }}
                color="primary"
                defaultValue={2}
                label="From:"
                labelPlacement="outside-left"
                maxValue={10}
                minValue={1}
                radius="full"
                step={1}
                value={value[0]}
                variant="bordered"
                onValueChange={onChangeFrom}
              />
              <NumberInput
                className="max-w-40"
                classNames={{
                  label: "text-white font-medium",
                }}
                color="primary"
                defaultValue={10}
                label="To:"
                labelPlacement="outside-left"
                maxValue={10}
                minValue={1}
                radius="full"
                step={1}
                value={value[1]}
                variant="bordered"
                onValueChange={onChangeTo}
              />
            </div>
          </div>
        </div>
        <Slider
          classNames={{
            label: "text-medium",
            value: "text-lg",
          }}
          color="primary"
          defaultValue={[2, 10]}
          marks={[
            { value: 1, label: "1" },
            { value: 2, label: "2" },
            { value: 3, label: "3" },
            { value: 4, label: "4" },
            { value: 5, label: "5" },
            { value: 6, label: "6" },
            { value: 7, label: "7" },
            { value: 8, label: "8" },
            { value: 9, label: "9" },
            { value: 10, label: "10" },
          ]}
          maxValue={10}
          minValue={1}
          size="sm"
          step={1}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  },
);
