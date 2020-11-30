import styles from "./input.module.scss";

const Input = ({
  inputLabel,
  name,
  onHandleInput,
  placeholder,
  required,
  type,
  value,
  withIcon,
}) => (
  <>
    {inputLabel && <label className={styles.label}>{inputLabel}</label>}

    <div className={styles.inputContainer}>
      {withIcon}

      <input
        className={styles.input}
        name={name}
        onChange={onHandleInput}
        placeholder={placeholder}
        type={type}
        value={value}
        required={required || false}
      />
    </div>
  </>
);

export default Input;
