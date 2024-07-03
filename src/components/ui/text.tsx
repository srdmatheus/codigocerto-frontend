import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TextProps = {
  children: ReactNode;
  className?: string;
};

export const Text = ({ children, className = "" }: TextProps) => {
  return (
    <p
      className={cn(
        "text-base font-medium leading-relaxed text-foreground/90 only-of-type:mb-4 md:text-lg lg:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};
