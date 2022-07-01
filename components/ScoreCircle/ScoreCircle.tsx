import Image from "next/image";
import styles from "./ScoreCircle.module.scss";

interface ScoreCircleProps {
  dim: boolean;
  className?: string;
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({ dim, className }) => {
  const combinedStyles = `${className ?? ""} relative w-full`;
  const dimStyle = dim ? "opacity-30" : "";
  return (
    <div className={combinedStyles}>
      <Image
        src="/images/score_circle.svg"
        layout="responsive"
        width={339}
        height={338}
        alt=""
        role="presentation"
        className={dimStyle + " animate-in spin-in-180 paused hover:running"}
      />
      <span
        className={
          `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-sans font-bold text-6xl sm:text-8xl md:text-9xl lg:text-5xl xl:text-6xl leading-[76px] text-ooze tracking-[-0.039em]` +
          styles.oozeshadow
        }
      >
        100
      </span>
    </div>
  );
};

export default ScoreCircle;
