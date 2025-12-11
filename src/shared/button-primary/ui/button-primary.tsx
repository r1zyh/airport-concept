import React from "react";
import clsx from "clsx";
import type { ClassValue } from "clsx";
import styles from "./button-primary.module.scss";

type TButtonPrimary = {
  children?: React.ReactNode;
  text: string;
  additionalStyles?: ClassValue;
  type?: "button" | "submit" | "reset"
};

export function ButtonPrimary({
  children = null,
  text,
  additionalStyles,
  type = "button",
}: TButtonPrimary): React.ReactNode {
  if (children !== null) {
    return children;
  }

  return (
    <button type={type} className={clsx(styles["button-primary"], additionalStyles)}>
      {text}
    </button>
  );
}
