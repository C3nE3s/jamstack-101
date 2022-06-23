export enum RECTANGLE_BG_IMAGE {
  PEACH_GRADIENT = "peach_gradient",
  LEGO = "lego",
}

interface RectangleGraphic {
  className: string;
  bgImage: RECTANGLE_BG_IMAGE;
}

interface bgImageConfiguration {
  imagePath: string;
  transform?: { left: string; right: string };
}

type ImageConfigObjKey = `${RECTANGLE_BG_IMAGE}`;

const RectangleGraphic: React.FC<RectangleGraphic> = ({
  className,
  bgImage,
}) => {
  const imageConfig: Record<ImageConfigObjKey, bgImageConfiguration> = {
    [RECTANGLE_BG_IMAGE.PEACH_GRADIENT]: {
      imagePath: "/images/peach_gradient.jpeg",
      transform: {
        left: "translate(-1.54656 -0.234297) scale(0.00188512 0.000838114)",
        right: "translate(-2.6483) scale(0.00189868 0.000786827)",
      },
    },
    [RECTANGLE_BG_IMAGE.LEGO]: {
      imagePath: "/images/lego.jpeg",
      transform: {
        left: "translate(-1.54656 -0.234297) scale(0.00368762 0.000921363)",
        right: "translate(-2.6483) scale(0.00371415 0.000864981)",
      },
    },
  };

  return (
    <>
      <svg
        width="736"
        height="964"
        viewBox="0 0 736 964"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <rect
          y="171"
          width="280"
          height="629"
          rx="68"
          fill="url(#pattern_left)"
        />
        <rect
          x="326"
          width="278"
          height="670"
          rx="68"
          fill="url(#pattern_right)"
        />
        <defs>
          <pattern
            id="pattern_left"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#bg_pattern"
              transform={imageConfig[bgImage].transform?.left}
            />
          </pattern>
          <pattern
            id="pattern_right"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#bg_pattern"
              transform={imageConfig[bgImage].transform?.right}
            />
          </pattern>
          <image
            id="bg_pattern"
            role="presentation"
            href={imageConfig[bgImage].imagePath}
          />
        </defs>
      </svg>
      {/* Frosted Rectangles */}
      <div className="relative h-full w-full">
        <div className="w-[280px] h-[479px] rounded-[68px] backdrop-blur-[120px] mix-blend-normal absolute top-[350px] left-[165px] bg-white/50"></div>
        <div className="w-[280px] h-[662px] rounded-[68px] backdrop-blur-[120px] mix-blend-normal absolute top-[143px] left-[485px] bg-white/50"></div>
      </div>
    </>
  );
};

export default RectangleGraphic;
