"use client";
import { memo } from "react";
import { Slider, SliderStepMark } from "@heroui/slider";

interface ConfigurationItemProps {
  className?: string;
  label: string;
  value?: number | number[];
  step?: number;
  minValue?: number;
  maxValue?: number;
  marks?: SliderStepMark[];
  defaultValue: number | number[];
}

export const ConfigurationItem = memo((props: ConfigurationItemProps) => {
  const {
    className,
    label,
    value,
    step,
    marks,
    minValue,
    maxValue,
    defaultValue,
  } = props;

  return (
    <div className="w-full">
      <Slider
        classNames={{
          label: "text-medium",
          value: "text-lg",
        }}
        color="primary"
        defaultValue={defaultValue}
        label={label}
        marks={marks}
        maxValue={maxValue}
        minValue={minValue}
        showSteps={true}
        size="md"
        step={step}
        value={value}
      />
    </div>
  );
});
