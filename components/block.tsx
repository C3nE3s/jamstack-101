import { PropsWithChildren } from "react";

interface BlockProps {
  bg: "light" | "dark";
}

const Block: React.FC<PropsWithChildren<BlockProps>> = ({ bg, children }) => {
  const baseStyles = "h-screen w-screen relative z-10 overflow-x-clip";
  const lightStyle = "bg-white text-gray-light";
  const darkStyle = "bg-gray-darkest text-white";
  return (
    <section
      className={baseStyles + " " + (bg === "light" ? lightStyle : darkStyle)}
    >
      {children}
    </section>
  );
};

export default Block;
