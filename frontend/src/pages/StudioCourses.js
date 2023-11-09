import UpperBanner from "#components/UpperBanner";
import {
  coursesPagesNavigationItems,
  regularCoursePageAdvancedBannerImage,
  regularCoursePageAdvancedBannerName,
  regularCoursePageAdvancedBannerSubtitle,
  regularCoursePageAdvancedBannerText,
  regularCoursePageBeginnerBannerImage,
  regularCoursePageBeginnerBannerName,
  regularCoursePageBeginnerBannerSubtitle,
  regularCoursePageBeginnerBannerText,
  regularCoursePageIntermediateBannerImage,
  regularCoursePageIntermediateBannerName,
  regularCoursePageIntermediateBannerSubtitle,
  regularCoursePageIntermediateBannerText,
  StudioCoursesPageUpperSectionBackground,
  StudioCoursesPageUpperSectionText,
  StudioCoursesPageUpperSectionTitle,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import CourseBanner from "../components/CourseBanner";
import OptionsToNavigate from "../components/OptionsToNavigate";
import styles from "./studioCourses.module.scss";

const StudioCourses = () => {
  const navigate = useNavigate();

  const navitageToPage = (route) => {
    navigate(route);
  };

  useEffectScrollTop();
  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={StudioCoursesPageUpperSectionBackground}
          title={StudioCoursesPageUpperSectionTitle}
          text={StudioCoursesPageUpperSectionText}
        />

        <OptionsToNavigate
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
        <CourseBanner
          imageUrl={regularCoursePageBeginnerBannerImage}
          name={regularCoursePageBeginnerBannerName}
          subtitle={regularCoursePageBeginnerBannerSubtitle}
          text={regularCoursePageBeginnerBannerText}
        />

        <CourseBanner
          imageUrl={regularCoursePageIntermediateBannerImage}
          name={regularCoursePageIntermediateBannerName}
          subtitle={regularCoursePageIntermediateBannerSubtitle}
          text={regularCoursePageIntermediateBannerText}
          invert={true}
        />

        <CourseBanner
          imageUrl={regularCoursePageAdvancedBannerImage}
          name={regularCoursePageAdvancedBannerName}
          subtitle={regularCoursePageAdvancedBannerSubtitle}
          text={regularCoursePageAdvancedBannerText}
        />
      </div>
    </div>
  );
};

export default StudioCourses;
