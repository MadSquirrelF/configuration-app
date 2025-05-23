import { SliderStepMark } from "@heroui/slider";

export interface ICPUTypes {
  id: number;
  name: string;
  price: number;
}
export interface IConfifurationArray {
  label: string;
  key: string;
  defaultValue: number | number[];
  minValue?: number;
  isCPU: boolean;
  measurement: string;
  cpuTypes?: ICPUTypes[];
  maxValue?: number;
  marks?: SliderStepMark[];
  step?: number;
}

export const configurationArray: IConfifurationArray[] = [
  {
    label: "CPU",
    key: "cpu",
    measurement: "GHz",
    isCPU: true,
    defaultValue: 6,
    minValue: 2,
    cpuTypes: [
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
    ],
    maxValue: 16,
    step: 2,
    marks: [
      { value: 2, label: "2" },
      { value: 4, label: "4" },
      { value: 6, label: "6" },
      { value: 8, label: "8" },
      { value: 10, label: "10" },
      { value: 12, label: "12" },
      { value: 14, label: "14" },
      { value: 16, label: "16" },
    ],
  },
  {
    label: "Memory (RAM DDR4)",
    key: "memory",
    isCPU: false,
    measurement: "GB",
    defaultValue: 128,
    minValue: 64,
    maxValue: 1024,
    step: 8,
    marks: [
      { value: 64, label: "64" },
      { value: 128, label: "128" },
      { value: 256, label: "256" },
      { value: 512, label: "512" },
      { value: 1024, label: "1024" },
    ],
  },
  {
    label: "Storage (SSD RAID)",
    key: "storage",
    defaultValue: 1400,
    isCPU: false,
    measurement: "GB",
    minValue: 200,
    maxValue: 1600,
    step: 200,
    marks: [
      { value: 200, label: "200" },
      { value: 400, label: "400" },
      { value: 600, label: "600" },
      { value: 800, label: "800" },
      { value: 1000, label: "1000" },
      { value: 1200, label: "1200" },
      { value: 1400, label: "1400" },
      { value: 1600, label: "1600" },
    ],
  },
  {
    label: "Backup storage (HDD)",
    key: "backup",
    isCPU: false,
    measurement: "GB",
    defaultValue: 64,
    step: 1,
    minValue: 64,
    maxValue: 1024,
    marks: [
      { value: 64, label: "64" },
      { value: 128, label: "128" },
      { value: 256, label: "256" },
      { value: 512, label: "512" },
      { value: 1024, label: "1024" },
    ],
  },
  {
    label: "Transfer (Gbps)",
    key: "transfer",
    measurement: "GB",
    isCPU: false,
    defaultValue: [2, 10],
    step: 1,
    minValue: 1,
    maxValue: 10,
    marks: [
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
    ],
  },
];
