import React from "react";
import { Link } from "react-router-dom";
import IconBranding from "./IconBranding";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.columnsContainer}>
          <div className={`${styles.column} ${styles.logoColumn}`}>
            <IconBranding />

            <div className={styles.teaserText}>
              Pilates Teacher since 2012, Gabriele Wieand is certicated{" "}
              <a
                className={styles.link}
                href='https://peakpilates.eu/de'
                target='_blank'
              >
                Peak Pilates &#174;
              </a>{" "}
              trainer in Berlin.
            </div>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Links</h3>
            <Link className={styles.link} to='/about'>
              <span className={styles.content}>About</span>
            </Link>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Programmes</h3>
            <Link className={styles.link} to='/courses/studio'>
              <span className={styles.content}>Studio Courses</span>
            </Link>

            <Link className={styles.link} to='/courses/online'>
              <span className={styles.content}>Online Courses</span>
            </Link>
          </div>
          <div className={`${styles.column} ${styles.socialColumn}`}>
            <h3 className={styles.title}>Social Links</h3>
            <div className={styles.icons}>
              <a
                href='https://www.instagram.com/gabriele_pilates_berlin/'
                target='_blanck'
              >
                <i
                  className={`fab fa-instagram fa-2x ${styles.customIcon}`}
                ></i>
              </a>
              <a
                href='https://www.facebook.com/profile.php?id=100049980236028'
                target='_blanck'
              >
                <i
                  className={`fab fa-facebook-f fa-2x ${styles.customIcon}`}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
