import { NumberInput } from "@heroui/number-input";
import { Slider } from "@heroui/slider";
import { memo } from "react";

interface ConfigurationBackupProps {
  className?: string;
  value: number;
  onChange: (value: number | number[]) => void;
}

export const ConfigurationBackup = memo((props: ConfigurationBackupProps) => {
  const { className, value, onChange } = props;

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex md:flex-row flex-col gap-9 items-center justify-between">
        <span>Backup storage (HDD)</span>

        <div className="flex md:flex-row flex-col gap-5 items-center justify-center">
          <NumberInput
            className="md:max-w-40 w-full items-center justify-center"
            classNames={{
              label: "text-white font-medium",
            }}
            color="primary"
            defaultValue={128}
            label={"GB"}
            labelPlacement="outside-left"
            maxValue={1024}
            minValue={64}
            radius="full"
            step={8}
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
        defaultValue={128}
        marks={[
          { value: 64, label: "64" },
          { value: 128, label: "128" },
          { value: 256, label: "256" },
          { value: 512, label: "512" },
          { value: 1024, label: "1024" },
        ]}
        maxValue={1024}
        minValue={64}
        size="sm"
        step={8}
        value={value}
        onChange={onChange}
      />
    </div>
  );
});
