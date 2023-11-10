import React from "react";
import { Link } from "react-router-dom";
import styles from "./iconBranding.module.scss";

const IconBranding = () => {
  return (
    <div className={styles.logoContainer}>
      <Link className={styles.reactLink} to='/'>
        <img
          className={styles.logo}
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          alt='logo'
        />
      </Link>
      <div className={styles.text}>
        <div className={styles.word}>AMA</div>
        <div className={styles.word}>PILATES</div>
      </div>
    </div>
  );
};
export default IconBranding;
