import React from "react";
import CourseCard from "./CourseCard";
import styles from "./coursesCardTeaser.module.scss";

const CoursesCardTeaser = () => {
  return (
    <div className={styles.coursesCardTeaserWrapper}>
      <div className={styles.coursesCardTeaser}>
        <CourseCard
          image='card1.jpg'
          name='Studio Courses'
          path='/courses/studio'
          description='Lessons are given in '
          externalLink='https://makeda-pilates.de/'
          linkText='Makeda Pilates &#174;'
          descriptionAfterLink=' , Berlin, Prenzlauer Berg. The classes are solo or in groups from 2 until 5 persons.'
        />
        <CourseCard
          image='card2.jpg'
          name='Online Courses '
          path='/courses/online'
          description='The solo lessons is adapted for you, with specific goals that we will define together. The classes are solo or in groups'
        />
      </div>
    </div>
  );
};

export default CoursesCardTeaser;
