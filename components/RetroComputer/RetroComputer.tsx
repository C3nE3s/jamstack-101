import { PropsWithChildren } from "react";
import Image from "next/image";
import styles from "./RetroComputer.module.scss";

interface RetroComputerProps {
  className?: string;
}

// TODO: Clean up this class naming mess

const RetroComputer: React.FC<PropsWithChildren<RetroComputerProps>> = ({
  className,
  children,
}) => {
  return (
    <div className="z-20 isolate">
      <div className={styles["body-container"]}>
        <div className={styles["body"]}></div>
        <div className={styles["faceplate"]}>
          <div className={styles["screen_inset"]}>
            <div className={styles["screen"]}>{children}</div>
          </div>
          <div className={styles["floppy-disk__container"]}>
            <div className={styles["floppy-disk__inset"]}>
              <div className={styles["floppy-disk__inset--outer"]}>
                <div className={styles["floppy-disk__inset--inner"]}>
                  <div className={styles["floppy-disk__slot"]}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["base-container"]}>
        <Image
          src="/images/retro_computer_base.svg"
          layout="intrinsic"
          width={776}
          height={231}
          alt=""
          role="presentation"
        />
      </div>
    </div>
  );
};

export default RetroComputer;
