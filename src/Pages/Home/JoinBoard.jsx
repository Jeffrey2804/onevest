import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import TitleLayout from '../../Layouts/TitleLayout'
import FullContainer from '../../Components/FullContainer'
import { MdOutlineDone } from "react-icons/md"
import AdvisorCard from './AdvisorCard'

const JoinBoard = () => {
    return (
        <Box>
            <HStack paddingLeft={"3px"} display={"flex"} flexDirection={"column"} alignItems={"left"}>
                <Box display={"flex"} gap={"5"}>
                    <Text backgroundColor={"#0080FF"} width={"30px"} fontSize={"1.3rem"} borderRadius={"50%"} color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"}><MdOutlineDone /></Text>
                    <Text fontWeight={"400"} fontSize={"1.2rem"}>Get exclusive access to open to open advisory boards</Text>
                </Box>
                <Box display={"flex"} gap={"5"}>
                    <Text backgroundColor={"#0080FF"} width={"30px"} fontSize={"1.3rem"} borderRadius={"50%"} color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"}><MdOutlineDone /></Text>
                    <Text fontWeight={"400"} fontSize={"1.2rem"}>Get exclusive access to open to open advisory boards</Text>
                </Box>
                <Box display={"flex"} gap={"5"}>
                    <Text backgroundColor={"#0080FF"} width={"30px"} fontSize={"1.3rem"} borderRadius={"50%"} color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"}><MdOutlineDone /></Text>
                    <Text fontWeight={"400"} fontSize={"1.2rem"}>Get exclusive access to open to open advisory boards</Text>
                </Box>
            </HStack>
            <AdvisorCard />
        </Box>
    )
}

export default JoinBoard
