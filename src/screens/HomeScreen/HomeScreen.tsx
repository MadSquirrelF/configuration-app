import { Link } from "@heroui/link";
import { memo } from "react";

import { subtitle } from "@/src/shared/constants/primitives";
import { ConfigurationBoard } from "@/src/features/ConfigurationBoard/ui/ConfigurationBoard";

interface HomeScreenProps {
  className?: string;
}

export const HomeScreen = memo((props: HomeScreenProps) => {
  const { className } = props;

  return (
    <div className="flex flex-col gap-8 ">
      <div className="w-full flex flex-row gap-8 items-end justify-between">
        <p
          className={subtitle({
            color: "default",
            size: "tiny",
            fullWidth: false,
          })}
        >
          We ofer a range if dedicated servers to meet various needs and
          budgets. Our offshare servers are ideal for professionals seeking
          high-quality hardware and expoert support. Host your projects with
          confidence.
        </p>

        <Link isExternal showAnchorIcon color="primary" href="#">
          See prepared configurations
        </Link>
      </div>

      <ConfigurationBoard />
    </div>
  );
});
