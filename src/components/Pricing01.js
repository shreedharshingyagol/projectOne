import { memo } from "react";
import styles from "./Pricing01.module.css";
const Pricing01 = memo(() => {
  return (
    <div className={styles.pricing01}>
      <img className={styles.icon} alt="" src="/icon9.svg" />
      <b className={styles.personalPlan}>Personal Plan</b>
      <div className={styles.customizedAnythingIn}>
        Customized anything in anytime
      </div>
      <div className={styles.line} />
      <div className={styles.chackMark}>
        <img className={styles.icon1} alt="" src="/04.svg" />
        <img className={styles.icon2} alt="" src="/04.svg" />
        <img className={styles.icon3} alt="" src="/02.svg" />
        <img className={styles.icon4} alt="" src="/02.svg" />
        <div className={styles.easyToTrackContainer}>
          <p className={styles.easyToTrack}>Easy To Track AI Data</p>
          <p className={styles.easyToTrack}>100+ Ready Boots</p>
          <p className={styles.bestDataPlanPackage}>
            <span>{`Best Data Plan & Package`}</span>
            <span className={styles.span}></span>
          </p>
          <p className={styles.bestDataPlanPackage}>24/7 Online Support</p>
        </div>
      </div>
      <div className={styles.button}>
        <b className={styles.analyzeNow}>Price: 146.00</b>
      </div>
    </div>
  );
});

export default Pricing01;
