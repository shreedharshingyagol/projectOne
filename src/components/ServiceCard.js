import { memo, useMemo } from "react";
import styles from "./ServiceCard.module.css";
const ServiceCard = memo(
  ({
    item01Left,
    item01BackgroundColor,
    item01BoxShadow,
    button,
    icon,
    iconHeight,
    iconBottom,
    aIDataAnalysis,
    aIDataAnalysisColor,
    item01Top,
    iconWidth,
    iconTop,
    iconRight,
  }) => {
    const item01Style = useMemo(() => {
      return {
        left: item01Left,
        backgroundColor: item01BackgroundColor,
        boxShadow: item01BoxShadow,
        top: item01Top,
      };
    }, [item01Left, item01BackgroundColor, item01BoxShadow, item01Top]);

    const icon1Style = useMemo(() => {
      return {
        height: iconHeight,
        bottom: iconBottom,
        width: iconWidth,
        top: iconTop,
        right: iconRight,
      };
    }, [iconHeight, iconBottom, iconWidth, iconTop, iconRight]);

    const aIDataAnalysisStyle = useMemo(() => {
      return {
        color: aIDataAnalysisColor,
      };
    }, [aIDataAnalysisColor]);

    return (
      <div className={styles.item01} style={item01Style}>
        <img className={styles.buttonIcon} alt="" src={button} />
        <img className={styles.icon} alt="" src={icon} style={icon1Style} />
        <div className={styles.text}>
          <b className={styles.aiDataAnalysis} style={aIDataAnalysisStyle}>
            {aIDataAnalysis}
          </b>
          <div className={styles.loremIpsumIsContainer}>
            <p className={styles.loremIpsumIs}>
              Lorem Ipsum is simply dummy text
            </p>
            <p className={styles.loremIpsumIs}>of the printing</p>
          </div>
        </div>
      </div>
    );
  }
);

export default ServiceCard;
