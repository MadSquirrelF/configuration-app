import { memo } from "react";
import { Radio, RadioGroup } from "@heroui/radio";
import { Switch } from "@heroui/switch";
import { Chip } from "@heroui/chip";

interface SummaryConfigurationsProps {
  className?: string;
  oc: string;
  isAnnuallyDuration: boolean;
  onChangeAnnuallyDuration: (value: boolean) => void;
  onChangeOC: (value: string) => void;
}

export const SummaryConfigurations = memo(
  (props: SummaryConfigurationsProps) => {
    const {
      className,
      oc,
      onChangeOC,
      isAnnuallyDuration,
      onChangeAnnuallyDuration,
    } = props;

    return (
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 items-start">
          <span className="text-white text-base font-medium">Duration</span>
          <div className="flex flex-row gap-2 items-center">
            <span>Monthly</span>
            <Switch
              isSelected={isAnnuallyDuration}
              onValueChange={onChangeAnnuallyDuration}
            >
              <div className="flex flex-row gap-2 items-center">
                <span>Annually</span>
                <Chip color="primary" size="sm">
                  -33%
                </Chip>
              </div>
            </Switch>
          </div>
        </div>

        <RadioGroup
          classNames={{
            label: "text-white font-medium",
            wrapper: "flex gap-7",
          }}
          color="primary"
          label="Operating system"
          orientation="horizontal"
          size="md"
          value={oc}
          onValueChange={onChangeOC}
        >
          <Radio value="windows">Windows</Radio>
          <Radio value="linux">Linux</Radio>
          <Radio value="other">Other</Radio>
        </RadioGroup>
      </div>
    );
  },
);
