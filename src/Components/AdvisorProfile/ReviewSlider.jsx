import React, { useCallback, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { StarIcon } from "@chakra-ui/icons";
import { FaEdit } from "react-icons/fa";


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
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.previous();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.next();
  }, []);

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToSlide: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: "0",
  //   autoplayDuration: 3000,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   responsive: [
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         slidesToSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         slidesToSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         slidesToSlide: 1,
  //       },
  //     },
  //   ],
  // };

  // const sliderRef = useRef(null);

  // const handleNextClick = () => {
  //   sliderRef.current.slickNext();
  // };

  // const handlePrevClick = () => {
  //   sliderRef.current.slickPrev();
  // };

  const carouselOptions = {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    },
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2000, // 3 second
  };

  return (
    <>
      {/* {
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
      } */}

      <div className="container mx-auto">
        <Carousel {...carouselOptions} ref={sliderRef}>
          {reviewData.map((review, index) => (
            <div key={index} className="relative flex justify-center">
              <div className="my-3 bg-white rounded-2xl flex items-center gap-10 flex-col review-slieder">
                <div className="w-full flex items-center gap-2 justify-center">
                  {review?.rating <= 5 &&
                    Array(review.rating)
                      .fill(null)
                      .map((_, index) => {
                        return (
                          <StarIcon
                            key={index}
                            color="#ffab09"
                            height={25}
                            width={25}
                          />
                        );
                      })}
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <h2 className="text-zinc-600 text-sm lg:text-lg font-normal text-center tracking-tigh w-300">
                    {review.description || ""}
                  </h2>
                </div>
                <div className="w-full flex items-center justify-center">
                  <Image
                    src={`/assets/images/${review.image}`}
                    width={79}
                    height={79}
                    className="object-cover"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold text-center text-zinc-600">
                      {review.name || ""}
                    </h2>
                    <span className="text-center text-zinc-600 text-[15px] font-normal leading-normal">
                      {review.designation || ""}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <br />
      <div className="flex items-center justify-center w-[200px] px-[10px] m-auto gap-4 py-[4px] lg:px-[20px] lg:py-[8px] rounded-full border-2 border-[#74a7f4] cursor-pointer hover-review">
        <p className="text-xs lg:text-base text-[#74a7f4]">
          Write A Review
        </p>
        <FaEdit color="#74a7f4" />
      </div>

    </>
  );
};

export default ReviewSlider;
