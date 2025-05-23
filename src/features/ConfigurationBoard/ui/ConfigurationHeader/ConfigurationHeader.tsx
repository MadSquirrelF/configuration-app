"use client";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { memo } from "react";

import { LinkIcon } from "@/src/shared/assets/icons/icons";

interface ConfigurationHeaderProps {
  className?: string;
}

export const ConfigurationHeader = memo((props: ConfigurationHeaderProps) => {
  const { className } = props;

  return (
    <div className="w-full flex lg:flex-row flex-col gap-8 items-center lg:justify-between">
      <motion.div
        animate={{
          y: 0,
          x: 0,
          opacity: 1,
        }}
        initial={{
          opacity: 0,
          y: -600,
        }}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 1,
        }}
      >
        <p className="text-base lg:text-lg lg:max-w-[700px] lg:text-left text-center w-full text-default-600">
          We ofer a range if dedicated servers to meet various needs and
          budgets. Our offshare servers are ideal for professionals seeking
          high-quality hardware and expoert support. Host your projects with
          confidence.
        </p>
      </motion.div>
      <motion.div
        animate={{
          y: 0,
          x: 0,
          opacity: 1,
        }}
        initial={{
          opacity: 0,
          y: -600,
        }}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 1,
        }}
      >
        <Link
          isExternal
          showAnchorIcon
          anchorIcon={<LinkIcon className="flex-none" />}
          className="gap-2 flex-none min-w-28"
          color="primary"
          href="#"
        >
          See prepared configurations
        </Link>
      </motion.div>
    </div>
  );
});
