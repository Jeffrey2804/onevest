import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const reviewData = [
  {
    index: 0,
    name: "Linton Johnson",
    designation: "CEO, Ovis",
    image: "review-user.png",
    rating: 5,
    description:
      "We joined AdvisoryCloud to get insight from people with different experiences from all different backgrounds. AdvisoryCloud was the only solution that gave us access to high quality, talented professionals from around the globe.",
  },
  {
    index: 1,
    name: "Linton Johnson",
    designation: "CEO, Ovis",
    image: "review-user.png",
    rating: 5,
    description:
      "We joined AdvisoryCloud to get insight from people with different experiences from all different backgrounds. AdvisoryCloud was the only solution that gave us access to high quality, talented professionals from around the globe.",
  },
  {
    index: 2,
    name: "Linton Johnson",
    designation: "CEO, Ovis",
    image: "review-user.png",
    rating: 5,
    description:
      "We joined AdvisoryCloud to get insight from people with different experiences from all different backgrounds. AdvisoryCloud was the only solution that gave us access to high quality, talented professionals from around the globe.",
  },
  {
    index: 3,
    name: "Linton Johnson",
    designation: "CEO, Ovis",
    image: "review-user.png",
    rating: 5,
    description:
      "We joined AdvisoryCloud to get insight from people with different experiences from all different backgrounds. AdvisoryCloud was the only solution that gave us access to high quality, talented professionals from around the globe.",
  },
  {
    index: 4,
    name: "Linton Johnson",
    designation: "CEO, Ovis",
    image: "review-user.png",
    rating: 5,
    description:
      "We joined AdvisoryCloud to get insight from people with different experiences from all different backgrounds. AdvisoryCloud was the only solution that gave us access to high quality, talented professionals from around the globe.",
  },
];

const ReviewSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToSlide: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplayDuration: 3000,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesToSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesToSlide: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesToSlide: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      {
        reviewData.length === 1 ? <div style={{ maxWidth: '576px' }}><ReviewCard allData={reviewData[0]} /></div> : (
          <div className="w-full lg:max-w-[180vw] max-w-[200vw] md:max-w-[90vw] mx-auto flex flex-col gap-12 p-5 overflow-x-hidden">
            {
              <Slider {...settings} ref={sliderRef}>
                {reviewData.map((item, index) => {
                  return (
                    <ReviewCard allData={item} key={index} />
                  );
                })}
              </Slider>
            }
            {reviewData.length >= 2 && <div className="flex justify-center w-full gap-5">
              <button
                onClick={() => handlePrevClick()}
                className="focus:outline-none"
              >
                <AiOutlineArrowLeft
                  height={"24px"}
                  width={"24px"}
                />
              </button>

              <button
                onClick={() => handleNextClick()}
                className="focus:outline-none"
              >
                <AiOutlineArrowRight
                  height={"24px"}
                  width={"24px"}
                />
              </button>
            </div>}
          </div>)
      }
    </>
  );
};

export default ReviewSlider;
