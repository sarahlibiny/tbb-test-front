import styles from "./Header.module.scss";
import IconLego from "../../assets/Icon-Lego.svg";
import IconCategories from "../../assets/icon.svg";
import IconMessage from "../../assets/icon-message.svg";
import IconShoppingBag from "../../assets/icon-shoppingbag.svg";
import IconSearch from "../../assets/icon-search.svg";
import { useState } from "react";
import { MenuCategories } from "../MenuCategories";
import { Link } from "react-scroll";

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
            <Link
              activeClass="active"
              to="giftin"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              Giftin
            </Link>
            <Link
              activeClass="active"
              to="travel"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              Travel
            </Link>
            <Link
              activeClass="active"
              to="adults"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              Adults Welcome
            </Link>
            <Link
              activeClass="active"
              to="art"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              Art & Home Décor
            </Link>
            <Link
              activeClass="active"
              to="space"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              Space
            </Link>
            <Link
              activeClass="active"
              to="pop"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              Pop Culture
            </Link>
            <Link
              activeClass="active"
              to="toddlers"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              Toddlers
            </Link>
            <Link
              activeClass="active"
              to="real"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              Real World Role Playing
            </Link>
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
      {isCategoriesOpen && (
        <MenuCategories
          onClose={toggleCategories}
          isCategoriesOpen={isCategoriesOpen}
        />
      )}
    </>
  );
}
