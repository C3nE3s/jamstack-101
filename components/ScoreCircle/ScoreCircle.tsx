import Image from "next/image";
import styles from "./ScoreCircle.module.scss";

interface ScoreCircleProps {
  dim: boolean;
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({ dim }) => {
  return (
    <div className="relative">
      <Image
        src="/images/score_circle.svg"
        layout="intrinsic"
        width={339}
        height={338}
        alt=""
        role="presentation"
        className=""
      />
      <span
        className={
          `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-sans font-bold text-[63px] leading-[76px] text-ooze tracking-[-0.039em] ` +
          styles.oozeshadow
        }
      >
        100
      </span>
    </div>
  );
};

export default ScoreCircle;
