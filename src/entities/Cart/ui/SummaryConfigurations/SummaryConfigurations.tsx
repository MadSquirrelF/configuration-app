import { memo } from "react";
import { Radio, RadioGroup } from "@heroui/radio";
interface SummaryConfigurationsProps {
  className?: string;
}

export const SummaryConfigurations = memo(
  (props: SummaryConfigurationsProps) => {
    const { className } = props;

    return (
      <div>
        <RadioGroup
          color="primary"
          label="Operating system"
          orientation="horizontal"
          size="lg"
        >
          <Radio value="windows">Windows</Radio>
          <Radio value="linux">Linux</Radio>
          <Radio value="other">Other</Radio>
        </RadioGroup>
      </div>
    );
  },
);
