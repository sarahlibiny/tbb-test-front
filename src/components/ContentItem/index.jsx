import styles from "./ContentItem.module.scss";

//to do: direcao botao
//to do: espacamento imagens

export function ContentItem({
  direction,
  title,
  text,
  buttonText,
  arrowImg,
  imgSrc,
  imgAlt,
  textAlign,
}) {
  const containerStyle =
    direction === "rtl" ? styles.ContainerFlexReversed : styles.ContainerFlex;

  return (
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
  );
}
