import { PropsWithChildren } from "react";

interface BlockProps {
  bg: "light" | "dark";
}

const Block: React.FC<PropsWithChildren<BlockProps>> = ({ bg, children }) => {
  const baseStyles =
    "h-screen w-screen z-10 relative overflow-x-clip lg:px-[7.25rem]";
  const lightStyle = "bg-white text-gray-light";
  const darkStyle = "bg-transparent";

  let isLight = bg === "light";

  return isLight ? (
    <section className={baseStyles + " " + lightStyle}>{children}</section>
  ) : (
    <section className={baseStyles + " " + darkStyle}>
      <div
        className="h-full w-full hidden sm:inline-block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1282' height='8057' viewBox='0 0 1282 8057' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.2'%3E%3Cline x1='0.5' y1='-2.18557e-08' x2='0.500352' y2='8057' stroke='%23E8E8E8' stroke-dasharray='4 4'/%3E%3Cline x1='320.5' y1='-2.18557e-08' x2='320.501' y2='8057' stroke='%23E8E8E8' stroke-dasharray='4 4'/%3E%3Cline x1='640.501' y1='-2.18557e-08' x2='640.501' y2='8057' stroke='%23E8E8E8' stroke-dasharray='4 4'/%3E%3Cline x1='960.501' y1='-2.18557e-08' x2='960.501' y2='8057' stroke='%23E8E8E8' stroke-dasharray='4 4'/%3E%3Cline x1='1280.5' y1='-2.18557e-08' x2='1280.5' y2='8057' stroke='%23E8E8E8' stroke-dasharray='4 4'/%3E%3C/g%3E%3C/svg%3E%0A");`,
          backgroundSize: "cover",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default Block;
