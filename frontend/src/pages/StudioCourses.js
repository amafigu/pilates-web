import UpperBanner from "#components/UpperBanner";
import {
  coursesPagesNavigationItems,
  studioCourseCardImageGroup,
  studioCourseCardImageSolo,
  studioCourseCardSubtitleGroup,
  studioCourseCardSubtitleSolo,
  studioCourseCardTextGroup,
  studioCourseCardTextSolo,
  studioCourseCardTitleGroup,
  studioCourseCardTitleSolo,
  studioCoursesPageUpperSectionBackground,
  studioCoursesPageUpperSectionText,
  studioCoursesPageUpperSectionTitle,
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
          backgroundUrl={studioCoursesPageUpperSectionBackground}
          title={studioCoursesPageUpperSectionTitle}
          text={studioCoursesPageUpperSectionText}
        />

        <OptionsToNavigate
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
        <CourseBanner
          imageUrl={studioCourseCardImageSolo}
          name={studioCourseCardTitleSolo}
          subtitle={studioCourseCardSubtitleSolo}
          text={studioCourseCardTextSolo}
        />

        <CourseBanner
          imageUrl={studioCourseCardImageGroup}
          name={studioCourseCardTitleGroup}
          subtitle={studioCourseCardSubtitleGroup}
          text={studioCourseCardTextGroup}
          invert={true}
        />
      </div>
    </div>
  );
};

export default StudioCourses;
