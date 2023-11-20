import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dropdownMenu.module.scss";

const DropdownMenu = ({ setMenuVisible }) => {
  const navigate = useNavigate();

  const navigateAndCloseMenu = (route) => {
    setMenuVisible(false);
    navigate(route);
  };

  return (
    <ul className={styles.dropdownMenu}>
      <li
        className={styles.listItem}
        onClick={() => navigateAndCloseMenu("/courses/studio")}
      >
        <span className={styles.linkContent}>studio</span>
      </li>

      <li
        className={styles.listItem}
        onClick={() => navigateAndCloseMenu("/courses/online")}
      >
        <span className={styles.linkContent}>online</span>
      </li>
    </ul>
  );
};

export default DropdownMenu;
