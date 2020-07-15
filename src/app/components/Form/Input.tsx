import React from "react";
import styles from "./Input.module.css";

const Input = ({ register, required, ...rest }: any) => {
  return <input className={styles.input} ref={register} {...rest} />;
};

export default Input;
