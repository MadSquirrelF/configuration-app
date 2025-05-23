import { create } from "zustand";

export interface IConfigurationStore {
  totalPrice: number;
  basePrice: number;
  cpuType: string;
  cpuTypePrice: number;
  cpu: number;
  cpuPrice: number;
  memory: number;
  memoryPrice: number;
  storage: number;
  storagePrice: number;
  backup: number;
  backupPrice: number;
  transfer: number[];
  transferPrice: number;
  isAnnuallyDuration: boolean;
  oc: string;
  ocPrice: number;

  setTotalPrice: (price: number) => void;
  setCpuType: (type: string) => void;
  setCpu: (cpu: number) => void;
  setMemory: (memory: number) => void;
  setStorage: (storage: number) => void;
  setBackup: (backup: number) => void;
  setTransfer: (transfer: number[]) => void;
  setTransferFrom: (value: number) => void;
  setTransferTo: (value: number) => void;
  toggleDuration: (value: boolean) => void;
  setOc: (os: string) => void;
}

export const useConfigurationStore = create<IConfigurationStore>((set) => ({
  totalPrice: 179.99,
  cpuType: "Intel Core i5-12400",
  cpu: 6,
  ocPrice: 10.0,
  basePrice: 9.99,
  cpuPrice: 9,
  cpuTypePrice: 23.99,
  memoryPrice: 12.0,
  storagePrice: 3.0,
  backupPrice: 3,
  transferPrice: 3,
  memory: 128,
  storage: 1400,
  backup: 64,
  transfer: [2, 10],
  isAnnuallyDuration: false,
  oc: "windows",

  setTotalPrice: (price) => set({ totalPrice: price }),
  setCpuType: (type) => set({ cpuType: type }),
  setCpu: (cpu) => set({ cpu }),
  setMemory: (memory) => set({ memory }),
  setStorage: (storage) => set({ storage }),
  setBackup: (backup) => set({ backup }),
  setTransfer: (transfer) => set({ transfer }),
  setTransferTo: (value) =>
    set((state) => ({
      transfer: [state.transfer[0], value],
    })),

  setTransferFrom: (value) =>
    set((state) => ({
      transfer: [value, state.transfer[1]],
    })),
  toggleDuration: (value) => set({ isAnnuallyDuration: value }),
  setOc: (os) => set({ oc: os }),
}));
