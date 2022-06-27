import { PropsWithChildren } from "react";
import { dedupeStringArray } from "../utils/dedupeStrings";

interface BlockProps {
  bg?: "light" | "dark";
  className?: string;
}

const Block: React.FC<PropsWithChildren<BlockProps>> = ({
  bg,
  className,
  children,
}) => {
  const baseStyle = "h-fit w-screen relative overflow-x-clip lg:px-[7.25rem]";
  const lightStyle = "bg-white text-gray-light";
  const darkStyle = "bg-transparent";

  let blockTheme = bg === "light" ? lightStyle : darkStyle;

  // allow user to pass through styles
  let userDefinedStyles = className ? className : "";
  let dedupedStyles = dedupeStringArray([
    baseStyle,
    blockTheme,
    userDefinedStyles,
  ]);

  return (
    <section className={dedupedStyles}>
      <div className="flex flex-col max-w-7xl items-center mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Block;
