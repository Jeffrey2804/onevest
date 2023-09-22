import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const AdvisorCard = (props) => {
    return (
        <HStack justifyContent={"left"} paddingY={"1rem"} gap={"8"}>
            <VStack backgroundColor={"#FFFFFF"} border={"1px solid #CEE0FF"} borderRadius={"15px"} padding={"1rem"} alignItems={"start"}>
                <Image src='/assets/images/advisor-icon-1.png' />
                <Text fontWeight={"600"} fontSize={"1.3rem"} paddingY={"1rem"}>Build your advisor profile</Text>
                <Text marginBottom={"0px"}>Do this on your own, or work with our team for personal assistance setting up your profile on AdvisoryCloud </Text>
            </VStack>
            <VStack backgroundColor={"#FFFFFF"} border={"1px solid #CEE0FF"} borderRadius={"15px"} padding={"1rem"} alignItems={"start"}>
                <Image src='/assets/images/advisor-icon-2.png' />
                <Text fontWeight={"600"} fontSize={"1.3rem"} paddingY={"1rem"}>Build your advisor profile</Text>
                <Text marginBottom={"0px"}>Do this on your own, or work with our team for personal assistance setting up your profile on AdvisoryCloud </Text>
            </VStack>
            <VStack backgroundColor={"#FFFFFF"} border={"1px solid #CEE0FF"} borderRadius={"15px"} padding={"1rem"} alignItems={"start"}>
                <Image src='/assets/images/advisor-icon-3.png' />
                <Text fontWeight={"600"} fontSize={"1.3rem"} paddingY={"1rem"}>Build your advisor profile</Text>
                <Text marginBottom={"0px"}>Do this on your own, or work with our team for personal assistance setting up your profile on AdvisoryCloud </Text>
            </VStack>
        </HStack>
    )
}

export default AdvisorCard
