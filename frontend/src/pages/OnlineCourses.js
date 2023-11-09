import UpperBanner from "#components/UpperBanner";
import {
  coursesPagesNavigationItems,
  onlineCoursesPageUpperSectionBackground,
  onlineCoursesPageUpperSectionText,
  onlineCoursesPageUpperSectionTitle,
  shortCoursePageHolidayImage,
  shortCoursePageHolidayName,
  shortCoursePageHolidaySubtitle,
  shortCoursePageHolidayText,
  shortCoursePageIntroDrummingImage,
  shortCoursePageIntroDrummingName,
  shortCoursePageIntroDrummingSubtitle,
  shortCoursePageIntroDrummingText,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import CourseBanner from "../components/CourseBanner";
import OptionsToNavigate from "../components/OptionsToNavigate";
import styles from "./onlineCourses.module.scss";

const OnlineCourses = () => {
  useEffectScrollTop();
  const navigate = useNavigate();

  const navitageToPage = (route) => {
    navigate(route);
  };
  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={onlineCoursesPageUpperSectionBackground}
          title={onlineCoursesPageUpperSectionTitle}
          text={onlineCoursesPageUpperSectionText}
        />

        <OptionsToNavigate
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
        <CourseBanner
          imageUrl={shortCoursePageHolidayImage}
          name={shortCoursePageHolidayName}
          subtitle={shortCoursePageHolidaySubtitle}
          text={shortCoursePageHolidayText}
        />
        <CourseBanner
          imageUrl={shortCoursePageIntroDrummingImage}
          name={shortCoursePageIntroDrummingName}
          subtitle={shortCoursePageIntroDrummingSubtitle}
          text={shortCoursePageIntroDrummingText}
          invert={true}
        />
      </div>
    </div>
  );
};

export default OnlineCourses;
