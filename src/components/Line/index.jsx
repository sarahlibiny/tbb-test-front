import styles from "./Line.module.scss";

export function Line({ color }) {
  return <hr className={`${styles.line} ${styles[color]}`} />;
}
