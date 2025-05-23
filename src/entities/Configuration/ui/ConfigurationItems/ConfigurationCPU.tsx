import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { NumberInput } from "@heroui/number-input";
import { Slider } from "@heroui/slider";
import { memo } from "react";

interface ConfigurationCPUProps {
  className?: string;
  value: number;
  onChange: (value: number | number[]) => void;
}

export const ConfigurationCPU = memo((props: ConfigurationCPUProps) => {
  const { className, value, onChange } = props;

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex md:flex-row flex-col gap-9 items-center justify-between">
        <span>CPU</span>

        <div className="flex md:flex-row flex-col gap-5 items-center justify-center">
          <Autocomplete
            className="md:max-w-400 w-full"
            classNames={{
              listbox: "bg-[#141E28]",
              listboxWrapper: "bg-[#141E28]",
              popoverContent: "bg-[#141E28]",
            }}
            color="primary"
            defaultItems={[
              {
                id: 0,
                name: "Intel Core i5-12400",
                price: 200,
              },
              {
                id: 1,
                name: "AMD Ryzen 5 5600X",
                price: 250,
              },
              {
                id: 2,
                name: "Intel Core i7-12700K",
                price: 350,
              },
              {
                id: 3,
                name: "AMD Ryzen 9 5900X",
                price: 450,
              },
              {
                id: 4,
                name: "Apple M1",
                price: 300,
              },
            ]}
            defaultSelectedKey={"Intel Core i5-12400"}
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
          <NumberInput
            className="md:max-w-40 w-full items-center justify-center"
            classNames={{
              label: "text-white font-medium",
            }}
            color="primary"
            defaultValue={6}
            label={"GHz"}
            labelPlacement="outside-left"
            maxValue={16}
            minValue={2}
            radius="full"
            step={2}
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
        defaultValue={6}
        marks={[
          { value: 2, label: "2" },
          { value: 4, label: "4" },
          { value: 6, label: "6" },
          { value: 8, label: "8" },
          { value: 10, label: "10" },
          { value: 12, label: "12" },
          { value: 14, label: "14" },
          { value: 16, label: "16" },
        ]}
        maxValue={16}
        minValue={2}
        size="sm"
        step={2}
        value={value}
        onChange={onChange}
      />
    </div>
  );
});
