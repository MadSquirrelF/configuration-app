import { memo } from "react";

import { ConfigurationBoard } from "@/src/features/ConfigurationBoard/ui/ConfigurationBoard";
import { ConfigurationHeader } from "@/src/features/ConfigurationBoard/ui/ConfigurationHeader/ConfigurationHeader";

interface HomeScreenProps {
  className?: string;
}

export const HomeScreen = memo((props: HomeScreenProps) => {
  const { className } = props;

  return (
    <div className="flex flex-col gap-8">
      <ConfigurationHeader />
      <ConfigurationBoard />
    </div>
  );
});
