import { memo, useCallback } from "react";

import { useConfigurationStore } from "../../model/store/useConfigurationStore";
import { ConfigurationCPU } from "../ConfigurationItems/ConfigurationCPU";
import { ConfigurationMemory } from "../ConfigurationItems/ConfigurationMemory";
import { ConfigurationStorage } from "../ConfigurationItems/ConfigurationStorage";
import { ConfigurationBackup } from "../ConfigurationItems/ConfigurationBackup";
import { ConfigurationTransfer } from "../ConfigurationItems/ConfigurationTransfer";

interface ConfigurationListProps {
  className?: string;
}

export const ConfigurationList = memo((props: ConfigurationListProps) => {
  const { className } = props;

  const cpuType = useConfigurationStore((state) => state.cpuType);
  const cpu = useConfigurationStore((state) => state.cpu);
  const setCpu = useConfigurationStore((state) => state.setCpu);
  const memory = useConfigurationStore((state) => state.memory);
  const setMemory = useConfigurationStore((state) => state.setMemory);
  const storage = useConfigurationStore((state) => state.storage);
  const setStorage = useConfigurationStore((state) => state.setStorage);
  const backup = useConfigurationStore((state) => state.backup);
  const setBackup = useConfigurationStore((state) => state.setBackup);
  const transfer = useConfigurationStore((state) => state.transfer);
  const setTransfer = useConfigurationStore((state) => state.setTransfer);
  const setTransferFrom = useConfigurationStore(
    (state) => state.setTransferFrom,
  );
  const setTransferTo = useConfigurationStore((state) => state.setTransferTo);
  const onChangeCPU = useCallback((value: number | number[]) => {
    if (!Array.isArray(value)) {
      setCpu(value);
    }
  }, []);

  const onChangeMemory = useCallback((value: number | number[]) => {
    if (!Array.isArray(value)) {
      setMemory(value);
    }
  }, []);

  const onChangeStorage = useCallback((value: number | number[]) => {
    if (!Array.isArray(value)) {
      setStorage(value);
    }
  }, []);

  const onChangeBackup = useCallback((value: number | number[]) => {
    if (!Array.isArray(value)) {
      setBackup(value);
    }
  }, []);

  const onChangeTransfer = useCallback((value: number | number[]) => {
    if (Array.isArray(value)) {
      setTransfer(value);
    }
  }, []);

  const onChangeFrom = useCallback((value: number) => {
    setTransferFrom(value);
  }, []);

  const onChangeTo = useCallback((value: number) => {
    setTransferTo(value);
  }, []);

  return (
    <div className="w-full h-full gap-14 flex flex-col">
      <ConfigurationCPU value={cpu} onChange={onChangeCPU} />
      <ConfigurationMemory value={memory} onChange={onChangeMemory} />
      <ConfigurationStorage value={storage} onChange={onChangeStorage} />
      <ConfigurationBackup value={backup} onChange={onChangeBackup} />
      <ConfigurationTransfer
        value={transfer}
        onChange={onChangeTransfer}
        onChangeFrom={onChangeFrom}
        onChangeTo={onChangeTo}
      />
    </div>
  );
});
