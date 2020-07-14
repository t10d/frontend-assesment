import React, { HTMLProps } from "react";

const Input = (props: HTMLProps<HTMLInputElement>) => {
  return <input {...props} />;
};

export default Input;
