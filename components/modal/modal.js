import styles from "./modal.module.scss";

const Modal = ({ isOpen, handleClose, title, content }) => (
  <div className={`${styles.modal} ${isOpen ? styles.show : ""}`}>
    <div className={styles.content}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <span className={styles.close} onClick={() => handleClose(!isOpen)}>
          &times;
        </span>
      </div>
      <div className={styles.body}>{content}</div>
    </div>
  </div>
);

export default Modal;
