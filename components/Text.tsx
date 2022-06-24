import { PropsWithChildren } from "react";
import { dedupeStringArray } from "../utils/dedupeStrings";

interface TextProps {
  className?: string;
  color: "gray" | "white";
  as: "p" | "span";
}

const Text: React.FC<PropsWithChildren<TextProps>> = (props) => {
  const { as: Component, children, className, color } = props;

  const baseTextStyle = "lg:text-lg font-light";
  const textColor = color === "gray" ? "text-gray-lightest" : "text-white";

  // Allow for classes to be passed down, but remove dupes and preserve order
  let userDefinedStyles = className ? className : "";
  let dedupedStyles = dedupeStringArray([
    baseTextStyle,
    textColor,
    userDefinedStyles,
  ]);

  return <Component className={dedupedStyles}>{children}</Component>;
};

export default Text;
