import { PropsWithChildren } from "react";
import { dedupeStringArray } from "../utils/dedupeStrings";

interface TextProps {
  className?: string;
  color: "gray" | "white";
  as: "p" | "span";
  emphasized?: boolean;
}

const Text: React.FC<PropsWithChildren<TextProps>> = (props) => {
  const { as: Component, children, className, color, emphasized } = props;

  const baseTextStyle = "lg:text-lg sm:text-md font-light";
  const emphasizedStyle = "font-normal lg:text-2xl sm:text-lg";
  const textColor = color === "gray" ? "text-gray-lightest" : "text-white";

  // Allow for classes to be passed down, but remove dupes and preserve order
  let emphasis = emphasized ? emphasizedStyle : baseTextStyle;
  let userDefinedStyles = className ? className : "";
  let dedupedStyles = dedupeStringArray([
    emphasis,
    textColor,
    userDefinedStyles,
  ]);

  return <Component className={dedupedStyles}>{children}</Component>;
};

export default Text;
