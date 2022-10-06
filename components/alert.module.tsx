import cn from "classnames";
import styles from "../styles/alert.module.css";
import { PropsWithChildren, ReactPropTypes } from "react";

export default function ({ children, type }: any) {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    ></div>
  );
}
