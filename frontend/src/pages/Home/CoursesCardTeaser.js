import React from "react";
import CourseCard from "./CourseCard";
import styles from "./coursesCardTeaser.module.scss";

const CoursesCardTeaser = () => {
  return (
    <div className={styles.coursesCardTeaserWrapper}>
      <div className={styles.coursesCardTeaser}>
        <CourseCard
          image='card1.png'
          name='Studio Courses'
          path='/courses/studio'
          description='Lessons are given in Makeda Pilates, Berlin, Prenzlauer Berg. The classes are solo or in groups from 2 until 5 persons.'
        />
        <CourseCard
          image='card2.png'
          name='Online Courses '
          path='/courses/online'
          description='The solo lessons is adapted for you, with specific goals that we will define together. The classes are solo or in groups'
        />
      </div>
    </div>
  );
};

export default CoursesCardTeaser;
