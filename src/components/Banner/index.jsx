import styles from "./Banner.module.scss";
import SoundButton from "../../assets/sound-button.svg";
import Download from "../../assets/Download.svg";
import IconScroll from "../../assets/chevrons-down.svg";

//to do: efeitos botoes
//background video

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.Container}>
        <p>
          {"<"}video autoplay with no sound{">"}
        </p>
        <div className={styles.ContainerTitleIcons}>
          <h1>
            Welcome to the <br></br>Play Matters Interactive Lookbook
          </h1>
          <div>
            <img src={SoundButton} alt="Sound button" />
            <img src={Download} alt="Sound button" />
          </div>
        </div>
        <div className={styles.ContainerScroll}>
          <span>Scroll down</span>
          <img src={IconScroll} alt="Icon down arrows" />
        </div>
      </div>
    </div>
  );
}
