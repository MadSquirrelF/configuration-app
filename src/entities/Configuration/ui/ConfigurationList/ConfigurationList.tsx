import { memo } from "react";

import { ConfigurationItem } from "../ConfigurationItem/ConfigurationItem";
import { configurationArray } from "../../model/data/data";

interface ConfigurationListProps {
  className?: string;
}

export const ConfigurationList = memo((props: ConfigurationListProps) => {
  const { className } = props;

  return (
    <div className="w-full h-full gap-14 flex flex-col">
      {configurationArray.map((item) => (
        <ConfigurationItem
          key={item.key}
          defaultValue={item.defaultValue}
          label={item.label}
          marks={item.marks}
          maxValue={item.maxValue}
          minValue={item.minValue}
          step={item.step}
        />
      ))}
    </div>
  );
});
