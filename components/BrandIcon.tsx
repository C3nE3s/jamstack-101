import Image from "next/image";
import { dedupeStringArray } from "../utils/dedupeStrings";

type Dimensions = { x: number; y: number };

export const BRAND_SVG: Record<
  string,
  { path: string; dimensions: Dimensions }
> = {
  NEXTJS: { path: "/images/nextjs.svg", dimensions: { x: 307, y: 360 } },
  REACT: { path: "/images/react.svg", dimensions: { x: 383, y: 341 } },
  SVELTE: { path: "/images/svelte.svg", dimensions: { x: 402, y: 339 } },
  VUE: { path: "/images/vue.svg", dimensions: { x: 362, y: 351 } },
} as const;

const OPACITY = {
  dark: "opacity-10",
  dim: "opacity-40",
  light: "opacity-100",
} as const;

type Brand = keyof typeof BRAND_SVG;
type Brightness = keyof typeof OPACITY;

// TODO: Map BRAND_SVG keys to string literal union and use as type for brand
export interface BrandIconProps {
  className?: string;
  brightness: Brightness;
  brand: "NEXTJS" | "REACT" | "SVELTE" | "VUE";
}

const BrandIcon: React.FC<BrandIconProps> = ({
  className,
  brightness,
  brand,
}) => {
  let userDefinedStyles = className ? className : "";
  let dedupedStyles = dedupeStringArray([
    OPACITY[brightness],
    userDefinedStyles,
  ]);

  let { path, dimensions: d } = BRAND_SVG[brand];
  return (
    <div className={dedupedStyles}>
      <Image
        src={path}
        alt=""
        role="presentation"
        layout="intrinsic"
        width={d.x}
        height={d.y}
      />
    </div>
  );
};

export default BrandIcon;
