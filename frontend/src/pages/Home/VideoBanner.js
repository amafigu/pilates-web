import React from "react";
import styles from "./videoBanner.module.scss";
const VideoBanner = () => {
  return (
    <div className={styles.videoBannerWrapper}>
      <div className={styles.videoBanner}>
        <img
          className={styles.logo}
          src={`${process.env.PUBLIC_URL}/assets/home_banner.jpg`}
          alt='logo'
        />
      </div>
    </div>
  );
};

export default VideoBanner;
