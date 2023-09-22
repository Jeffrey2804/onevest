import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
    return (
        <VStack mt={"0px"} width={"full"} gap={"100px"} ms={"auto"} pt={"35px"}>
            <HStack
                width={"full"}
                flexDir={["column", "column", "row"]}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <VStack
                    alignItems={["center", "center", "flex-start"]}
                    gap={"7"}
                    width={"full"}
                    position={"relative"}
                >
                    <Box className="card-1"></Box>
                    <Box className="card-2"></Box>

                    <Box className="card-3"></Box>
                    <Box className="card-4"></Box>
                    <Box className="card-5"></Box>
                    <Box className="card-6"></Box>
                    <Box className="card-7"></Box>

                    <Box
                        position={"relative"}
                        width={"full"}
                        maxW={["90%", "90%", "70%"]}
                        marginX={"auto"}
                        textAlign={"center"}
                        className="home-hero"
                    >
                        <Image src="/assets/images/bg-laptop.png" width={"100%"} />
                    </Box>

                </VStack>
            </HStack>
            {/* <Fade delay={600}>
            <PatnersRow />
          </Fade> */}

            <HStack position={"relative"} display={"flex"} flexDirection={"column"}>
                <Box position={"relative"}>
                    <Text fontWeight={"600"} fontSize={"5rem"}>Find your perfect advisor</Text>
                    <Button color={"#0080FF"} borderRadius={"20px"} border={"1px solid #CEE0FF"} position={"absolute"} top={"40%"} left={"14%"} height={"30px"} fontWeight={"500"}>Advisory Board</Button>
                </Box>
                <Button color={"#0080FF"} borderRadius={"20px"} border={"1px solid #CEE0FF"} position={"absolute"} top={"43%"} right={"20%"} height={"30px"} backgroundColor={"#CEE0FF"} fontWeight={"500"}>Meetings</Button>
                <br />
                <Box maxW={"800px"} margin={"auto"} textAlign={"center"} fontSize={"1.2rem"}>
                    <Text>We’ve made it easy to join and build advisory boards remotely. Select your interest below to see how we’ve transformed the traditional boardroom</Text>
                </Box>
                <Box display={"flex"} gap={"5"}>
                    <Button borderRadius={"30px"} paddingX={"20px"} paddingY={"25px"} backgroundColor={"#0080FF"} color={"#FFFFFF"}>Join a Board</Button>
                    <Button borderRadius={"30px"} paddingX={"20px"} paddingY={"25px"} backgroundColor={"#EDEDED"} color={"#1E1E1F"}>Build a Board</Button>
                </Box>
            </HStack>
        </VStack>
    )
}

export default Hero;
