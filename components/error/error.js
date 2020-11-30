import styles from "./error.module.scss";

const Error = ({ errorMsg }) => (
  <span className={styles.inputError}>{errorMsg}</span>
);

export default Error;
