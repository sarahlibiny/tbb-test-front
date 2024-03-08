import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        LEGO, the LEGO logo and the Brick and Knob configurations are trademarks
        of the LEGO Group. ©2022 The LEGO Group.
      </span>
    </footer>
  );
}
