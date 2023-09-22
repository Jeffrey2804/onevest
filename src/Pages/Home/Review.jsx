import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import FeatureCard from './FeatureCard';
import ReviewCard from './ReviewCard';

const Review = (props) => {
    return (
        <HStack position={"relative"} display={"flex"} flexDirection={"column"} paddingY={"2rem"}>
            {!props.noHeader && <Box position={"relative"}>
                <Text fontWeight={"600"} mb={"0"} fontSize={"5rem"} textAlign={"center"}>We’ve helped <br />15,000 Professionals</Text>
                <Button color={"#0080FF"} borderRadius={"20px"} border={"1px solid #CEE0FF"} position={"absolute"} top={"70%"} left={"14%"} height={"30px"} fontWeight={"500"}>Happy Customers</Button>
            </Box>}

            {!props.noHeader &&<Box maxW={"800px"} margin={"auto"} textAlign={"center"} fontSize={"1.2rem"}>
                <Text marginBottom={"0"}>See how easy it is to get started with board work</Text>
            </Box>}
            <ReviewCard />
        </HStack>
    )
}

export default Review;
