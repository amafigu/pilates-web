import {
  aboutPageNavigationItems,
  aboutPagePhilosophySectionBackground,
  aboutPageUpperSectionBackground,
  aboutPageUpperSectionText,
  aboutPageUpperSectionTitle,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import OptionsToNavigate from "../components/OptionsToNavigate";
import UpperBanner from "../components/UpperBanner";
import styles from "./about.module.scss";

const About = () => {
  useEffectScrollTop();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.aboutPageWrapper}>
      <div className={styles.aboutPage}>
        <UpperBanner
          backgroundUrl={aboutPageUpperSectionBackground}
          title={aboutPageUpperSectionTitle}
          text={aboutPageUpperSectionText}
        />
        <OptionsToNavigate
          navigate={scrollToSection}
          items={aboutPageNavigationItems}
        />
        <section className={styles.educationSection} id='school'>
          <div className={styles.imageAndTextLayerContainer}>
            <img
              alt='inspiration'
              className={styles.imageEducation}
              src={`${process.env.PUBLIC_URL}/assets/about_page_school.jpg`}
            ></img>

            <div className={styles.textLayer}>
              <span className={styles.text}>
                We seek to inspire and educate people by using their own
                movement and from there to offer resources of pilates body sence
                education.
              </span>
            </div>
          </div>
          <div className={styles.logoAndTextContainer}>
            <div className={styles.logoAboveText}>
              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  alt='logo'
                  src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                ></img>
              </div>
              <div className={styles.text}>Inspiration & Education</div>
            </div>
            <div className={styles.paragraphsContainer}>
              <div className={styles.paragraphs}>
                <p>
                  At SOME, we believe that the heartbeat of health begins with
                  inspiration. Our programmes are created with creativity,
                  innovation, originality and classical pilates. We ensure the
                  right balance for your specific needs at every fitness level.
                </p>
                <br />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.philosophySection} id='philosophy'>
          <div
            className={styles.imageForBigScreen}
            style={aboutPagePhilosophySectionBackground}
          ></div>

          <div className={styles.text}>
            <div className={styles.title}>
              <span>Our Philosophy</span>
            </div>
            <div className={styles.subtitle}>
              <span>Skill should not be harnessed by hard work alone.</span>
            </div>
            <div className={styles.content}>
              At SOME, we believe that patience and contansce is the fundamental
              building block to every body success. Through patience comes
              curiosity, and it is this very curiosity that would spur the
              student to continuously work, and learn, more on his or her craft.
              It is our responsibility, as educators, to fuel that curiosity in
              every student; constantly nurturing, guiding and motivating every
              student to eventually reach their individual and collective
              objectives.
            </div>
          </div>
        </section>

        <section className={styles.founderSection} id='founder'>
          <div className={styles.presentation}>
            <div className={styles.imageContaier}>
              <img
                alt='founder'
                className={styles.founderImage}
                src={`${process.env.PUBLIC_URL}/assets/card3.jpg`}
              />
            </div>
            <div className={styles.textAndIconsContainer}>
              <div className={styles.textAndIcons}>
                <div className={styles.name}>Instructor name</div>
                <div className={styles.position}>
                  Classical Pilates Instructor
                </div>
                <p>
                  The depth of Instructor's sport life begins from his early
                  age. Instructor discovered her love for horses at a tender age
                  by experimenting with western competitions such as Passauer
                  and and and and
                </p>
                <br />
                <p>
                  At 2010, Instructor was introduced to Peak Pilates
                  Instruction, a and course with Katryn Rosh-Nash in Miami.
                </p>
                <div className={styles.socialIcons}>
                  <div className={styles.text}>
                    Follow Instructor Instructoe @
                  </div>
                  <div className={styles.row}>
                    <div className={styles.icons}>
                      <a href='https://www.instagram.com/' target='_blanck'>
                        <i
                          className={`fab fa-instagram fa-2x ${styles.customIcon}`}
                        ></i>
                      </a>
                      <a
                        href='https://www.facebook.com/profile.php?'
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
