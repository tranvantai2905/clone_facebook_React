import React, { lazy, Suspense, forwardRef } from "react";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { cn } from "@/lib/utils";

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { name, className, ...otherProps } = props;
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon
        strokeWidth={"1.5px"}
        className={cn("h-5 w-5", className)}
        ref={ref}
        {...otherProps}
      />
    </Suspense>
  );
});

export default Icon;
