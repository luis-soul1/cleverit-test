import styles from "./button.module.scss";

const Button = ({ action, icon, type, text }) => (
  <button type={type || 'button'} className={styles.mainBtn} onClick={action}>
    {icon} {text}
  </button>
);

export default Button;
