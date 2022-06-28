import { PropsWithChildren } from "react";
import { dedupeStringArray } from "../utils/dedupeStrings";

type TextColorPallet = "gray" | "white" | "dark";

interface TextProps {
  className?: string;
  color: TextColorPallet;
  as: "p" | "span";
  emphasized?: boolean;
}

const Text: React.FC<PropsWithChildren<TextProps>> = (props) => {
  const { as: Component, children, className, color, emphasized } = props;

  const baseTextStyle =
    "lg:text-lg sm:text-md font-light leading-7 md:leading-[1.62]";
  const emphasizedStyle =
    "font-normal lg:text-2xl sm:text-lg leading-7 md:leading-[1.62]";

  const textColor: Record<TextColorPallet, string> = {
    white: "text-white",
    gray: "text-gray-lightest",
    dark: "text-gray-light",
  };

  // Allow for classes to be passed down, but remove dupes and preserve order
  let emphasis = emphasized ? emphasizedStyle : baseTextStyle;
  let userDefinedStyles = className ? className : "";
  let dedupedStyles = dedupeStringArray([
    emphasis,
    textColor[color],
    userDefinedStyles,
  ]);

  return <Component className={dedupedStyles}>{children}</Component>;
};

export default Text;
