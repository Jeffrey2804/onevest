import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HStack, Text } from '@chakra-ui/react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';
import "./slick.css";
import "./slick-theme.css";

const DashboardBlog = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const [sliderRef, setSliderRef] = useState(null);

    const blogPosts = [
        {
            title: "How do I find a business Idea",
            caption:
                "Search and join any of the open advisory boards you match with, or work with our team to find the perfect fit",
            image: "/assets/images/blog-1.png",
        },

        {
            title: "How do I find a business Idea",
            caption:
                "Search and join any of the open advisory boards you match with, or work with our team to find the perfect fit",
            image: "/assets/images/blog-2.png",
        },
        {
            title: "How do I find a business Idea",
            caption:
                "Search and join any of the open advisory boards you match with, or work with our team to find the perfect fit",
            image: "/assets/images/blog-3.png",
        },
        {
            title: "How do I find a business Idea",
            caption:
                "Search and join any of the open advisory boards you match with, or work with our team to find the perfect fit",
            image: "/assets/images/blog-2.png",
        },
        {
            title: "How do I find a business Idea",
            caption:
                "Search and join any of the open advisory boards you match with, or work with our team to find the perfect fit",
            image: "/assets/images/blog-3.png",
        },
    ];
    const navigate = useNavigate();

    return (
        <>
            <HStack className="flex justify-between w-[100%]">
                <Text className="text-3xl text-black text-center font-semibold">
                    Latest Updates
                </Text>
                <HStack>
                    <div
                        className="bg-white w-[45px] h-[45px] flex justify-center items-center"
                        style={{
                            borderRadius: "50%",
                            border: "1px solid #CEE0FF",
                            cursor: "pointer",
                        }}
                        onClick={sliderRef?.slickPrev}
                    >
                        <BsArrowLeft color="#0080FF" fontSize={"17px"} />
                    </div>
                    <div
                        className="bg-[#0080FF] w-[45px] h-[45px] flex justify-center items-center"
                        style={{ borderRadius: "50%", cursor: "pointer" }}
                        onClick={sliderRef?.slickNext}
                    >
                        <BsArrowRight color="white" fontSize={"17px"} />
                    </div>
                </HStack>
            </HStack>
            <HStack className="w-[100%] my-2">
                <Slider ref={setSliderRef} {...settings}>
                    {blogPosts.map((post, id) => {
                        return (
                            <div
                                key={id}
                                onClick={() => navigate("/blog")}
                                className="gap-6 flex flex-col justify-between cursor-pointer"
                            >
                                <img src={post.image} style={{ borderRadius: "20px" }} />
                                <div
                                    className="flex mt-4 flex-col gap-2 cursor-pointer"
                                    onClick={() => navigate("/blog")}
                                >
                                    <p className="text-xl text-black font-semibold mb-0">
                                        {post.title}
                                    </p>
                                    <p className="p-0 mb-0">{post.caption}</p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </HStack>
        </>
    )
}

export default DashboardBlog;
