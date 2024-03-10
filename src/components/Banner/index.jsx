import styles from "./Banner.module.scss";
import SoundButton from "../../assets/sound-button.svg";
import Download from "../../assets/Download.svg";
import IconScroll from "../../assets/chevrons-down.svg";
import SoundButtonHover from "../../assets/icon-sound-hover.svg";
import DownloadHover from "../../assets/download-hover.svg";
import { useState } from "react";

//to do: efeitos botoes
//background video

export function Banner() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const iconSrc = isHover ? SoundButtonHover : SoundButton;
  const iconSrcDownload = isHover ? DownloadHover : Download;

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
            <img
              src={iconSrc}
              className={styles.SoundButton}
              alt="Sound button"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src={iconSrcDownload}
              className={styles.DownloadButton}
              alt="Sound button"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
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
