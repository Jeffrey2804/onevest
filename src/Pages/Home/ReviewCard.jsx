import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ReviewCard = () => {
    return (
        <HStack justifyContent={"left"} paddingY={"1rem"} gap={"8"}>
            <VStack backgroundColor={"#FFFFFF"} border={"1px solid #CEE0FF"} borderRadius={"15px"} padding={"2rem"} alignItems={"start"} width={"400px"} boxShadow={"0px 0px 20px 0px rgba(14, 110, 255, 0.11)"} height={"450px"} justifyContent={"center"}>
                <Box display={"flex"} textColor={"#FFD231"} fontSize={"1.8rem"} gap={"1"}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </Box>
                <Box>
                    <Text fontSize={"1.3rem"} fontWeight={"500"}>
                        I really enjoyed my first board meeting. I got a chance to hear directly from company management about what they want and what they need. And this is a really, really great opportunity for me to help them and share my deep experience with an exciting company.
                    </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"5"}>
                    <Image src='/assets/images/review-user-1.png' />
                    <Box>
                        <Text mb={"0"} fontWeight={"800"} fontSize={"1.2rem"}>Zoltan Pasztory</Text>
                        <Text mb={"0"}>Advisory Board Member</Text>
                    </Box>
                </Box>
            </VStack>

            <VStack backgroundColor={"#FFFFFF"} border={"1px solid #CEE0FF"} borderRadius={"15px"} padding={"2rem"} alignItems={"start"} width={"400px"} boxShadow={"0px 0px 20px 0px rgba(14, 110, 255, 0.11)"} height={"450px"} justifyContent={"center"}>
                <Box display={"flex"} textColor={"#FFD231"} fontSize={"1.8rem"} gap={"1"}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </Box>
                <Box>
                    <Text fontSize={"1.3rem"} fontWeight={"500"}>
                        The first advisory board meeting I attended was fantastic. The business owner was very engaged and so was the rest of the board. The format was effective and the fact that it was moderated made for a very efficient use of everyone’s time.                    </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"5"}>
                    <Image src='/assets/images/review-user-2.png' />
                    <Box>
                        <Text mb={"0"} fontWeight={"800"} fontSize={"1.2rem"}>Tom Shircliff</Text>
                        <Text mb={"0"}>Advisory Board Member</Text>
                    </Box>
                </Box>
            </VStack>

            <VStack backgroundColor={"#FFFFFF"} border={"1px solid #CEE0FF"} borderRadius={"15px"} padding={"2rem"} alignItems={"start"} width={"400px"} boxShadow={"0px 0px 20px 0px rgba(14, 110, 255, 0.11)"} height={"450px"} justifyContent={"center"}>
                <Box display={"flex"} textColor={"#FFD231"} fontSize={"1.8rem"} gap={"1"}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </Box>
                <Box>
                    <Text fontSize={"1.3rem"} fontWeight={"500"}>
                        One of the reasons why we joined AdvisoryCloud was to get people with different experiences from all different walks of life who can provide us with different ideas on how to solve the problems we’re facing.                     </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"5"}>
                    <Image src='/assets/images/review-user-3.png' />
                    <Box>
                        <Text mb={"0"} fontWeight={"800"} fontSize={"1.2rem"}>Madelyn Levin</Text>
                        <Text mb={"0"}>AFounder & CEO at Ovis News</Text>
                    </Box>
                </Box>
            </VStack>

        </HStack>
    )
}

export default ReviewCard
