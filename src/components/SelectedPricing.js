import { memo } from "react";
import styles from "./SelectedPricing.module.css";
const SelectedPricing = memo(() => {
  return (
    <div className={styles.pricing02}>
      <div className={styles.line} />
      <div className={styles.chackMark}>
        <img className={styles.icon} alt="" src="/041.svg" />
        <img className={styles.icon1} alt="" src="/041.svg" />
        <img className={styles.icon2} alt="" src="/041.svg" />
        <img className={styles.icon3} alt="" src="/041.svg" />
        <b className={styles.easyToTrackContainer}>
          <p className={styles.easyToTrack}>Easy To Track AI Data</p>
          <p className={styles.easyToTrack}>100+ Ready Boots</p>
          <p className={styles.easyToTrack}>{`Best Data Plan & Package
`}</p>
          <p className={styles.easyToTrack}>24/7 Online Support</p>
        </b>
      </div>
      <button className={styles.button} autoFocus disabled>
        <div className={styles.analyzeNow}>Purchase Now</div>
        <img className={styles.icon4} alt="" src="/icon10.svg" />
      </button>
      <img className={styles.icon5} alt="" src="/icon11.svg" />
      <b className={styles.advanced}>Advanced</b>
      <div className={styles.customizedAnythingIn}>
        Customized anything in anytime
      </div>
    </div>
  );
});

export default SelectedPricing;
