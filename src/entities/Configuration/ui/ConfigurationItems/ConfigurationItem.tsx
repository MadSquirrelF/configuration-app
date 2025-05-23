"use client";
import { memo } from "react";
import { Slider, SliderStepMark } from "@heroui/slider";
import { NumberInput } from "@heroui/number-input";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";

import { ICPUTypes } from "../../model/data/data";
interface ConfigurationItemProps {
  className?: string;
  label: string;
  value?: number | number[];
  step?: number;
  measurement: string;
  isCPU: boolean;
  cpuTypes?: ICPUTypes[];
  minValue?: number;
  maxValue?: number;
  marks?: SliderStepMark[];
  defaultValue: number | number[];
}

export const ConfigurationItem = memo((props: ConfigurationItemProps) => {
  const {
    className,
    isCPU,
    cpuTypes,
    measurement,
    label,
    value,
    step,
    marks,
    minValue,
    maxValue,
    defaultValue,
  } = props;

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex md:flex-row flex-col gap-9 items-center justify-between">
        <span>{label}</span>

        <div className="flex md:flex-row flex-col gap-5 items-center justify-center">
          {isCPU && (
            <Autocomplete
              className="md:max-w-400 w-full"
              classNames={{
                listbox: "bg-[#141E28]",
                listboxWrapper: "bg-[#141E28]",
                popoverContent: "bg-[#141E28]",
              }}
              color="primary"
              defaultItems={cpuTypes}
              defaultSelectedKey={cpuTypes ? cpuTypes[0].name : undefined}
              inputProps={{
                classNames: {
                  input: "p-3",
                },
              }}
              label={
                <span className="text-white font-medium text-sm">Type: </span>
              }
              labelPlacement="outside-left"
              placeholder="Choose CPU type..."
              radius="full"
              variant="bordered"
            >
              {(item) => (
                <AutocompleteItem key={item.name}>{item.name}</AutocompleteItem>
              )}
            </Autocomplete>
          )}
          {Array.isArray(defaultValue) ? (
            <div className="flex flex-row  gap-5 items-center">
              <NumberInput
                className="max-w-40"
                classNames={{
                  label: "text-white font-medium",
                }}
                color="primary"
                defaultValue={defaultValue[0]}
                label="From:"
                labelPlacement="outside-left"
                radius="full"
                variant="bordered"
              />
              <NumberInput
                className="max-w-40"
                classNames={{
                  label: "text-white font-medium",
                }}
                color="primary"
                defaultValue={defaultValue[1]}
                label="To:"
                labelPlacement="outside-left"
                radius="full"
                variant="bordered"
              />
            </div>
          ) : (
            <NumberInput
              className="md:max-w-40 w-full items-center justify-center"
              classNames={{
                label: "text-white font-medium",
              }}
              color="primary"
              defaultValue={defaultValue}
              label={measurement}
              labelPlacement="outside-left"
              radius="full"
              variant="bordered"
            />
          )}
        </div>
      </div>
      <Slider
        classNames={{
          label: "text-medium",
          value: "text-lg",
        }}
        color="primary"
        defaultValue={defaultValue}
        marks={marks}
        maxValue={maxValue}
        minValue={minValue}
        size="sm"
        step={step}
        value={value}
      />
    </div>
  );
});
