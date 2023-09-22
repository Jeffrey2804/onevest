import { Box, HStack, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AdvisorCard } from '../SearchAdvisors'
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { fetchAdvisorList } from '../../Helpers/apis';

const AdvisorSlide = () => {
    const [advisorSliderRef, setAdvisorSliderRef] = useState(null);
    const [advisors, setAdvisors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const auth = localStorage.getItem("cflToken");

    const advisorsSettings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const advisorData = async () => {
        setIsLoading(true)
        try {
            const data = await fetchAdvisorList();
            setAdvisors(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching advisor data:", error);
        }
    };


    useEffect(() => {
        advisorData();
    }, [])

    return (
        <HStack
            width={"100%"}
            justifyContent={"center"}
            spacing={"0"}
            gap={0}
        >
            {
                isLoading ? <Spinner /> : <>
                    <div
                        className="bg-[#FFF] py-2 flex justify-center items-center"
                        style={{ borderRadius: "4px", cursor: "pointer" }}
                        onClick={advisorSliderRef?.slickPrev}
                    >
                        <GoTriangleLeft fontSize={"24px"} color="#0080FF" />
                    </div>

                    <Box width={"95%"}>
                        <Slider ref={setAdvisorSliderRef} {...advisorsSettings}>
                            {
                                advisors?.map((advisor, index) => {
                                    return <AdvisorCard props={advisor} key={index} />
                                })
                            }
                        </Slider>
                    </Box>
                    <div
                        className="bg-[#FFF] py-2 flex justify-center items-center"
                        style={{ borderRadius: "4px", cursor: "pointer" }}
                        onClick={advisorSliderRef?.slickNext}
                    >
                        <GoTriangleRight fontSize={"24px"} color="#0080FF" />
                    </div>
                </>
            }
        </HStack>
    )
}

export default AdvisorSlide
