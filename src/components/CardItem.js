import styles from "./CardItem.module.css";
const CardItem = () => {
  return (
    <div className={styles.item02}>
      <img className={styles.icon} alt="" src="/icon2.svg" />
      <h1 className={styles.industryLeadingProceduresContainer}>
        <p className={styles.industryLeading}>Industry Leading</p>
        <p className={styles.industryLeading}>Procedures</p>
      </h1>
      <img className={styles.buttonIcon} alt="" src="/button2.svg" />
    </div>
  );
};

export default CardItem;
