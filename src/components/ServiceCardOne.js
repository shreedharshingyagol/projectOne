import { memo, useMemo } from "react";
import styles from "./ServiceCardOne.module.css";
const ServiceCardOne = memo(
  ({
    item03Top,
    item03Left,
    item03Padding,
    speedometer,
    artificialIntelligence,
    button,
  }) => {
    const item031Style = useMemo(() => {
      return {
        top: item03Top,
        left: item03Left,
        padding: item03Padding,
      };
    }, [item03Top, item03Left, item03Padding]);

    return (
      <div className={styles.item03} style={item031Style}>
        <img className={styles.speedometerIcon} alt="" src={speedometer} />
        <div className={styles.text}>
          <b className={styles.artificialIntelligence}>
            {artificialIntelligence}
          </b>
          <div className={styles.loremIpsumIsContainer}>
            <p className={styles.loremIpsumIs}>
              Lorem Ipsum is simply dummy text
            </p>
            <p className={styles.loremIpsumIs}>of the printing</p>
          </div>
        </div>
        <img className={styles.buttonIcon} alt="" src={button} />
      </div>
    );
  }
);

export default ServiceCardOne;
