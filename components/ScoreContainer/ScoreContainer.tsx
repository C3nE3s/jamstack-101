import { PropsWithChildren } from "react";
import styles from "./ScoreContainer.module.scss";

interface ScoreContainerProps {
  className?: string;
}

const ScoreContainer: React.FC<PropsWithChildren<ScoreContainerProps>> = ({
  className,
  children,
}) => {
  return <div className={styles.container}>{children}</div>;
};

export default ScoreContainer;
