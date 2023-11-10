import { TESTIMONIALS } from "#utils/constants";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Slider from "react-slick";
import styles from "./testimonialCarousel.module.scss";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.testimonialCarouselWrapper}>
      <div className={styles.title}>
        <span>Testimonials</span>
      </div>
      <Slider {...settings}>
        {TESTIMONIALS.map((testimonial, index) => (
          <div className={styles.textContainerWrapper} key={index}>
            <div className={styles.textContainer}>
              <div className={styles.context}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className={styles.customIcon}
                  />
                </div>
                <div className={styles.text}>
                  <p>{testimonial.text}</p>
                </div>
                <div className={styles.testimonialPerson}>
                  <p>{testimonial.person}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
