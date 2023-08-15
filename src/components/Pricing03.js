import styles from "./Pricing03.module.css";
const Pricing03 = () => {
  return (
    <div className={styles.pricing03}>
      <div className={styles.line} />
      <div className={styles.chackMark}>
        <img className={styles.icon} alt="" src="/042.svg" />
        <img className={styles.icon1} alt="" src="/042.svg" />
        <img className={styles.icon2} alt="" src="/042.svg" />
        <img className={styles.icon3} alt="" src="/042.svg" />
        <div className={styles.easyToTrackContainer}>
          <p className={styles.easyToTrack}>Easy To Track AI Data</p>
          <p className={styles.easyToTrack}>100+ Ready Boots</p>
          <p className={styles.easyToTrack}>{`Best Data Plan & Package
`}</p>
          <p className={styles.easyToTrack}>24/7 Online Support</p>
        </div>
      </div>
      <div className={styles.button}>
        <b className={styles.analyzeNow}>Price: 289.00</b>
      </div>
      <img className={styles.icon4} alt="" src="/icon12.svg" />
      <b className={styles.forTeam}>For Team</b>
      <div className={styles.customizedAnythingIn}>
        Customized anything in anytime
      </div>
    </div>
  );
};

export default Pricing03;
