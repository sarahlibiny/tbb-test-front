import styles from "./Header.module.scss";
import IconLego from "../../assets/Icon-Lego.svg";
import IconCategories from "../../assets/icon.svg";
import IconMessage from "../../assets/icon-message.svg";
import IconShoppingBag from "../../assets/icon-shoppingbag.svg";
import IconSearch from "../../assets/icon-search.svg";
import { useState } from "react";
import { MenuCategories } from "../MenuCategories";

//to do: implementacao do react scroll

export function Header() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <nav>
          <div>
            <img className={styles.IconLego} src={IconLego} alt="Lego logo" />
            <div
              onClick={toggleCategories}
              className={styles.ContainerCategories}
            >
              <img
                className={styles.IconCategories}
                src={IconCategories}
                alt="Lego piece"
              />
              <span>Categories</span>
            </div>
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
          <div className={styles.ContainerIconsSpans}>
            <div className={styles.ContainerMessage}>
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
        </nav>
      </header>
      {isCategoriesOpen && <MenuCategories onClose={toggleCategories} />}
    </>
  );
}
