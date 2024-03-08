import styles from "./TitleBeforeLine.module.scss";

export function TitleBeforeLine({ title }) {
  return (
    <div className={styles.Container}>
      <span className={styles.title}>{title}</span>
    </div>
  );
}
