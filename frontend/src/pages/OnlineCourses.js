import UpperBanner from "#components/UpperBanner";
import {
  coursesPagesNavigationItems,
  onlineCourseCardImageGroup,
  onlineCourseCardImageSolo,
  onlineCourseCardSubtitleGroup,
  onlineCourseCardSubtitleSolo,
  onlineCourseCardTextGroup,
  onlineCourseCardTextSolo,
  onlineCourseCardTitleGroup,
  onlineCourseCardTitleSolo,
  onlineCoursesPageUpperSectionBackground,
  onlineCoursesPageUpperSectionText,
  onlineCoursesPageUpperSectionTitle,
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
          imageUrl={onlineCourseCardImageSolo}
          name={onlineCourseCardTitleSolo}
          subtitle={onlineCourseCardSubtitleSolo}
          text={onlineCourseCardTextSolo}
        />
        <CourseBanner
          imageUrl={onlineCourseCardImageGroup}
          name={onlineCourseCardTitleGroup}
          subtitle={onlineCourseCardSubtitleGroup}
          text={onlineCourseCardTextGroup}
          invert={true}
        />
      </div>
    </div>
  );
};

export default OnlineCourses;
