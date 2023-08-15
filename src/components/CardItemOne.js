import { memo, useMemo } from "react";
import styles from "./CardItemOne.module.css";
const CardItemOne = memo(
  ({
    item03Left,
    button,
    icon,
    iconHeight,
    iconBottom,
    collaborationAcross,
    allAreas,
    showButtonIcon,
  }) => {
    const item03Style = useMemo(() => {
      return {
        left: item03Left,
      };
    }, [item03Left]);

    const iconStyle = useMemo(() => {
      return {
        height: iconHeight,
        bottom: iconBottom,
      };
    }, [iconHeight, iconBottom]);

    return (
      <div className={styles.item03} style={item03Style}>
        {showButtonIcon && (
          <img className={styles.buttonIcon} alt="" src={button} />
        )}
        <img className={styles.icon} alt="" src={icon} style={iconStyle} />
        <h1 className={styles.collaborationAcrossAllContainer}>
          <p className={styles.collaborationAcross}>{collaborationAcross}</p>
          <p className={styles.collaborationAcross}>{allAreas}</p>
        </h1>
      </div>
    );
  }
);

export default CardItemOne;
