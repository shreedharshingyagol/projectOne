import styles from "./EmailBox.module.css";
const EmailBox = () => {
  return (
    <input
      className={styles.emailBox}
      type="text"
      placeholder="Business email adress"
    />
  );
};

export default EmailBox;
