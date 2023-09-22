import { Box, Button, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react'

const Works = () => {
    return (
        <HStack position={"relative"} display={"flex"} flexDirection={"column"} mt={"9rem"}>
            <Box position={"relative"}>
                <Text fontWeight={"600"} fontSize={"5rem"} marginBottom={"0"}>See How it Works</Text>
                <Button color={"#0080FF"} borderRadius={"20px"} border={"1px solid #CEE0FF"} position={"absolute"} top={"40%"} right={"14%"} height={"30px"} fontWeight={"500"}>Advisory Board</Button>
            </Box>
            <Box maxW={"800px"} margin={"auto"} textAlign={"center"} fontSize={"1.2rem"}>
                <Text>See how easy it is to get started with board work</Text>
            </Box>
            <br />
            <Button width={"460px"} height={"65px"} borderRadius={"30px"} border={"1px solid #0080FF"} display={"flex"} justifyContent={"space-between"} paddingX={"5px"}>
                <Button borderRadius={"30px"} paddingX={"20px"} paddingY={"25px"} backgroundColor={"#0080FF"} color={"#FFFFFF"}>Join an Advisory Board</Button>
                <Button borderRadius={"30px"} paddingX={"20px"} paddingY={"25px"} backgroundColor={"#E7F0FF"} color={"#1E1E1F"}>Build an Advisory Board</Button>
            </Button>

            <Box paddingY={"20rem"} position={"absolute"}>
                <Image src='/assets/images/works-bg.png' />
                <Box className="works-icon-like"></Box>
                <Box className="works-icon-group"></Box>
            </Box>
        </HStack>
    )
}

export default Works;
