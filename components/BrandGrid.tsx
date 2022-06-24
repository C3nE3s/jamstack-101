import BrandIcon, { BrandIconProps } from "./BrandIcon";

interface BrandGridProps {}

//TODO: Brittle implementation, look to clean up
// Move to mapping over a matrix for better DX & maintainability
/**
 * 
 *  type GridSlot = BrandIconProps | false;
  const GRID_MATRIX: Array<Record<1 | 2 | 3 | 4, GridSlot>> = [
    {
      1: false,
      2: false,
      3: false,
      4: { brand: "NEXTJS", brightness: "light" },
    },
    { 1: {brand: "REACT", brightness: "light"}, 2: false, 3: false, 4: false },
    { 1: false, 2: false, 3: false, 4: false },
    { 1: false, 2: false, 3: false, 4: false },
    { 1: false, 2: false, 3: false, 4: false },
    { 1: false, 2: false, 3: false, 4: false },
    { 1: false, 2: false, 3: false, 4: false },
    { 1: false, 2: false, 3: false, 4: false },
  ];
 */

const BrandGrid: React.FC = () => {
  return (
    <div className="w-full pb-16 grid grid-rows-9 lg:grid-cols-4 gap-0 place-items-center z-30">
      <BrandIcon
        brand="NEXTJS"
        brightness="light"
        className="row-start-1 row-end-1 col-start-4 col-end-4"
      />
      <BrandIcon
        brand="REACT"
        brightness="light"
        className="row-start-2 row-end-2 col-start-1 col-end-1"
      />
      <BrandIcon
        brand="NEXTJS"
        brightness="light"
        className="row-start-4 row-end-4 col-start-2 col-end-2"
      />
      <BrandIcon
        brand="REACT"
        brightness="light"
        className="row-start-5 row-end-5 col-start-4 col-end-4"
      />
      <BrandIcon
        brand="SVELTE"
        brightness="dim"
        className="row-start-6 row-end-6 col-start-1 col-end-1"
      />
      <BrandIcon
        brand="VUE"
        brightness="dim"
        className="row-start-6 row-end-6 col-start-3 col-end-3 pt-32"
      />
      <BrandIcon
        brand="REACT"
        brightness="dark"
        className="row-start-[8] row-end-[9] col-start-2 col-end-2"
      />
      <BrandIcon
        brand="SVELTE"
        brightness="dark"
        className="row-start-[9] row-end-[9] col-start-4 col-end-4"
      />
    </div>
  );
};

export default BrandGrid;
