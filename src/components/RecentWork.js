import { memo } from "react";
import styles from "./RecentWork.module.css";
const RecentWork = memo(() => {
  return (
    <div className={styles.maskGroup}>
      <div className={styles.maskGroupChild} />
    </div>
  );
});

export default RecentWork;
