//Core
import React from "react";
import styles from "./HamburgerMenu.module.scss";
import { Link } from "react-router-dom";
const Menu = ({ className }) => (
  <div className={className}>
    <ul className={styles.navigation__list}>
      <li className={styles.navigation__item}>
        <Link to="/post">Posts</Link>{" "}
      </li>
      <li className={styles.navigation__item}>
        <a href="">ABC</a>{" "}
      </li>
      <li className={styles.navigation__item}>
        <a href="">DEF</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="">GHI</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="">JKL</a>
      </li>
    </ul>
  </div>
);

export default Menu;
