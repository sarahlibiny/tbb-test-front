import styles from "./MenuCategories.module.scss";
import IconMessage from "../../assets/icon-message.svg";
import IconShoppingBag from "../../assets/icon-shoppingbag.svg";
import IconSearch from "../../assets/icon-search.svg";
import City from "../../assets/city.svg";
import Architecture from "../../assets/architecture.svg";
import Creator from "../../assets/creator.svg";
import Dots from "../../assets/dots.svg";
import Duplo from "../../assets/duplo.svg";
import Friends from "../../assets/friends.svg";
import Ideas from "../../assets/ideas.svg";
import Minifigures from "../../assets/minifigures.svg";
import Technic from "../../assets/technic.svg";
import IconClose from "../../assets/icon-close.svg";
import Lego from "../../assets/Icon-Lego.svg";

export function MenuCategories({ onClose, isCategoriesOpen }) {
  const images = [
    { src: Architecture, alt: "Logo Architecture" },
    { src: City, alt: "Logo City" },
    { src: Creator, alt: "Logo Creator" },
    { src: Dots, alt: "Logo Dots" },
    { src: Duplo, alt: "Logo Duplo" },
    { src: Friends, alt: "Logo Friends" },
    { src: Ideas, alt: "Logo Ideas" },
    { src: Minifigures, alt: "Logo Minifigures" },
    { src: Technic, alt: "Logo Technic" },
  ];

  return (
    <div className={styles.ContainerMenu}>
      {/*a classe era ContainerMenu apenas*/}
      <div className={styles.ContainerLeft}>
        <div className={styles.ContainerCloseMenu} onClick={onClose}>
          <img className={styles.IconLego} src={Lego} alt="Logo Lego" />
          <img src={IconClose} alt="Icon Close" />
        </div>
        <div className={styles.ContainerIconsSpans}>
          <div>
            <img
              className={styles.IconMessage}
              src={IconMessage}
              alt="Message Icon"
            />
            <span>Contact us</span>
          </div>

          <div>
            <img
              className={styles.IconShoppingBag}
              src={IconShoppingBag}
              alt="Shopping bag Icon"
            />
            <span>Request</span>
          </div>
          <div>
            <img
              className={styles.IconSearch}
              src={IconSearch}
              alt="Search Icon"
            />
            <span>Search</span>
          </div>
        </div>
        <div className={styles.ContainerThemes}>
          <span>Themes</span>
        </div>
        <ul>
          <li>Giftin</li>
          <li>Travel</li>
          <li>Adults Welcome</li>
          <li>Art & Home Décor</li>
          <li>Space</li>
          <li>Pop Culture</li>
          <li>Toddlers</li>
          <li>Real World Role Playing</li>
        </ul>
      </div>
      <div className={styles.ContainerRight}>
        {images.map((image, index) => (
          <div className={styles.gridItem} key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
