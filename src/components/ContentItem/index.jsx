import { Element } from "react-scroll";
import styles from "./ContentItem.module.scss";

export function ContentItem({
  direction,
  title,
  text,
  buttonText,
  arrowImg,
  imgSrc,
  imgAlt,
  textAlign,
  elementName,
}) {
  const containerStyle =
    direction === "rtl" ? styles.ContainerFlexReversed : styles.ContainerFlex;

  return (
    <Element name={elementName}>
      <div className={containerStyle}>
        <div className={styles.ContainerText}>
          <h2>{title}</h2>
          <p>{text}</p>
          <button>
            {buttonText}
            <img src={arrowImg} alt="arrow right" />
          </button>
        </div>
        <div>
          <img className={styles.ImageContent} src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </Element>
  );
}
