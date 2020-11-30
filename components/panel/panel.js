import styles from "./panel.module.scss";

const Panel = ({ title, children }) => (
  <div className={styles.container}>
    <div className={styles.heading}>
      <h2>{title}</h2>
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Panel;
