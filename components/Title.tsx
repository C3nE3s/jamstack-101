import React, { PropsWithChildren } from "react";
import { dedupeStringArray } from "../utils/dedupeStrings";

interface TitleProps {
  as: "h1" | "h2" | "h3";
  className?: string;
}

const HeadingStyles: Record<TitleProps["as"], string> = {
  h1: "font-extrabold lg:text-9xl md:text-8xl sm:text-7xl text-6xl text-center md:text-left whitespace-nowrap",
  h2: "font-extrabold lg:text-9xl md:text-8xl whitespace-nowrap",
  h3: "",
};

const Title: React.FC<PropsWithChildren<TitleProps>> = (props) => {
  const { as: Component, children, className } = props;

  // Allow for classes to be passed down, but remove dupes and preserve order
  let userDefinedStyles = className ? className : "";
  let dedupedStyles = dedupeStringArray([
    HeadingStyles[props.as],
    userDefinedStyles,
  ]);

  return <Component className={dedupedStyles}>{children}</Component>;
};

export default Title;
