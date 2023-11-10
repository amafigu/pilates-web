import { useEffectScrollTop } from "#utils/utils";
import CoursesCardTeaser from "./CoursesCardTeaser";
import TestimonialCarousel from "./TestimonialCarousel";
import VideoBanner from "./VideoBanner";
import styles from "./home.module.scss";

const Home = () => {
  useEffectScrollTop();
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePage}>
        <VideoBanner />
        <section className={styles.cardsSection}>
          <div className={styles.presentation}>
            <p className={styles.title}>Gabriele Wieand </p>
            <p className={styles.subtitle}>Classical Pilates Instructor</p>
            <p className={styles.missionText}>
              I am a classical pilates instructor, certified by{" "}
              <a
                className={styles.link}
                href='https://peakpilates.eu/de'
                target='_blank'
                rel='noreferrer'
              >
                Peak Pilates &#174;
              </a>
              . I have been teaching pilates for over 10 years and I am
              thankfull about helping people to improve their health and
              well-being or athletes to reach their goals through pilates. I am
              currently teaching online and in{" "}
              <a
                className={styles.link}
                href='https://makeda-pilates.de/'
                target='_blank'
                rel='noreferrer'
              >
                Makeda Pilates &#174;
              </a>{" "}
              - Berlin.
            </p>
          </div>
          <div className={styles.cardTeaserContainer}>
            <CoursesCardTeaser />
          </div>
        </section>
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Home;
