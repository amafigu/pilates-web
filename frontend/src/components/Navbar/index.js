import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import IconBranding from "../IconBranding";
import DropdownMenu from "./DropdownMenu";
import Menu from "./Menu";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuDropdownRef = useRef(null);

  return (
    <div className={styles.navbarWrapper}>
      <nav
        className={styles.navbar}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <div className={`${styles.column} ${styles.left}`}>
          <IconBranding />
          <div
            className={styles.menuIconWrapper}
            onClick={() => setMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} size='2xl' />
          </div>
        </div>
        <div className={`${styles.column} ${styles.right}`}>
          <Link className={styles.link} to='/about'>
            <span className={styles.linkContent}>about</span>
          </Link>

          <div
            className={styles.link}
            onMouseEnter={() => setDropdownOpen(true)}
            onClick={() => setDropdownOpen(true)}
          >
            <span className={styles.linkContent}>
              programmes <FontAwesomeIcon icon={faChevronDown} />
            </span>
            {isDropdownOpen && (
              <div
                ref={menuDropdownRef}
                className={styles.menuDropdown}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <DropdownMenu setMenuVisible={setMenuOpen} />
              </div>
            )}
          </div>

          <a
            href='mailto:some@gmail.com'
            className={`${styles.mailButton} ${styles.hideForMobile}`}
          >
            <span>Contact Us</span>
          </a>
        </div>
      </nav>
      <div className={styles.menuWrapper}>
        {isMenuOpen && <Menu setMenu={setMenuOpen} />}
      </div>
    </div>
  );
};

export default Navbar;
