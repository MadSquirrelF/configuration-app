import { NumberInput } from "@heroui/number-input";
import { Slider } from "@heroui/slider";
import { memo } from "react";

interface ConfigurationStorageProps {
  className?: string;
  value: number;
  onChange: (value: number | number[]) => void;
}

export const ConfigurationStorage = memo((props: ConfigurationStorageProps) => {
  const { className, value, onChange } = props;

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex md:flex-row flex-col gap-9 items-center justify-between">
        <span>Storage (SSD RAID)</span>

        <div className="flex md:flex-row flex-col gap-5 items-center justify-center">
          <NumberInput
            className="md:max-w-40 w-full items-center justify-center"
            classNames={{
              label: "text-white font-medium",
            }}
            color="primary"
            defaultValue={1400}
            label={"GB"}
            labelPlacement="outside-left"
            maxValue={1600}
            minValue={200}
            radius="full"
            step={200}
            value={value}
            variant="bordered"
            onValueChange={onChange}
          />
        </div>
      </div>
      <Slider
        classNames={{
          label: "text-medium",
          value: "text-lg",
        }}
        color="primary"
        defaultValue={1400}
        marks={[
          { value: 200, label: "200" },
          { value: 400, label: "400" },
          { value: 600, label: "600" },
          { value: 800, label: "800" },
          { value: 1000, label: "1000" },
          { value: 1200, label: "1200" },
          { value: 1400, label: "1400" },
          { value: 1600, label: "1600" },
        ]}
        maxValue={1600}
        minValue={200}
        size="sm"
        step={200}
        value={value}
        onChange={onChange}
      />
    </div>
  );
});
