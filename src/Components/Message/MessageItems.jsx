import { Box, HStack, Image, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import userProfilePic from "../../assets/images/user.png";


const MessageItems = () => {
    return (
        <HStack width={"300px"} display={"flex"} flexDirection={"column"}>
            <VStack width={"100%"}>
                <Input placeholder='Search' borderRadius={"30px"} width={"100%"} />
            </VStack>
            <VStack display={"flex"} flexDirection={"row"} gap={"15px"} padding={"5px 1px"} width={"100%"} backgroundColor={"#CEE0FF"}>
                <Image src={userProfilePic} width={"70px"} />
                <Box>
                    <Box display={"flex"} marginBottom={"0.5rem"} gap={"20px"}>
                        <Text margin={"0px"} fontWeight={"bold"}>Roger Smith</Text>
                        <Text margin={"0px"}>30mins ago</Text>
                    </Box>
                    <Text margin={"0px"}>Hey 👋 , How are you feeling.</Text>
                </Box>
            </VStack>
        </HStack>
    )
}

export default MessageItems;
