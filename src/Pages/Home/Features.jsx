import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import FeatureCard from './FeatureCard';

const Features = () => {
    return (
        <HStack position={"relative"} display={"flex"} flexDirection={"column"} paddingY={"2rem"}>
            <Box position={"relative"}>
                <Text fontWeight={"600"} mb={"0"} fontSize={"5rem"}>Features & Benifits</Text>
                <Button color={"#0080FF"} borderRadius={"20px"} border={"1px solid #CEE0FF"} position={"absolute"} top={"40%"} left={"40%"} height={"30px"} fontWeight={"500"}>We are Proud of</Button>
            </Box>

            <Box maxW={"800px"} margin={"auto"} textAlign={"center"} fontSize={"1.2rem"}>
                <Text marginBottom={"0"}>See how easy it is to get started with board work</Text>
            </Box>
            <FeatureCard />
        </HStack>
    )
}

export default Features;
