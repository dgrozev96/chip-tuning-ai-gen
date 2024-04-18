import React from "react";

const sizes = {
  "2xl": "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  xl: "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  s: "text-lg font-semibold",
  md: "text-xl font-bold",
  xs: "text-base font-semibold",
  lg: "text-2xl font-bold md:text-[22px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
