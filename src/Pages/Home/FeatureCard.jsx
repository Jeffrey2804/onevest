import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const FeatureCard = () => {
    return (
        <HStack justifyContent={"center"} paddingY={"1rem"} gap={"8"} flexWrap={"wrap"}>
            <VStack backgroundColor={"#FFFFFF"} borderRadius={"15px"} padding={"1rem"} alignItems={"start"} width={"370px"}>
                <Image src='/assets/images/feature-icon-1.png' />
                <Text fontWeight={"600"} fontSize={"1.3rem"} paddingY={"1rem"}>Build your advisor profile</Text>
                <Text marginBottom={"0px"}>Do this on your own, or work with our team for personal assistance setting up your profile on AdvisoryCloud </Text>
            </VStack>
            <VStack backgroundColor={"#FFFFFF"} borderRadius={"15px"} padding={"1rem"} alignItems={"start"} width={"370px"}>
                <Image src='/assets/images/feature-icon-2.png' />
                <Text fontWeight={"600"} fontSize={"1.3rem"} paddingY={"1rem"}>Build your advisor profile</Text>
                <Text marginBottom={"0px"}>Do this on your own, or work with our team for personal assistance setting up your profile on AdvisoryCloud </Text>
            </VStack>
            <VStack backgroundColor={"#FFFFFF"} borderRadius={"15px"} padding={"1rem"} alignItems={"start"} width={"370px"}>
                <Image src='/assets/images/feature-icon-3.png' />
                <Text fontWeight={"600"} fontSize={"1.3rem"} paddingY={"1rem"}>Build your advisor profile</Text>
                <Text marginBottom={"0px"}>Do this on your own, or work with our team for personal assistance setting up your profile on AdvisoryCloud </Text>
            </VStack>
            <VStack backgroundColor={"#FFFFFF"} borderRadius={"15px"} padding={"1rem"} alignItems={"start"} width={"370px"}>
                <Image src='/assets/images/feature-icon-4.png' />
                <Text fontWeight={"600"} fontSize={"1.3rem"} paddingY={"1rem"}>Build your advisor profile</Text>
                <Text marginBottom={"0px"}>Do this on your own, or work with our team for personal assistance setting up your profile on AdvisoryCloud </Text>
            </VStack>
            <VStack backgroundColor={"#FFFFFF"} borderRadius={"15px"} padding={"1rem"} alignItems={"start"} width={"370px"}>
                <Image src='/assets/images/feature-icon-5.png' />
                <Text fontWeight={"600"} fontSize={"1.3rem"} paddingY={"1rem"}>Build your advisor profile</Text>
                <Text marginBottom={"0px"}>Do this on your own, or work with our team for personal assistance setting up your profile on AdvisoryCloud </Text>
            </VStack>
            <VStack backgroundColor={"#FFFFFF"} borderRadius={"15px"} padding={"1rem"} alignItems={"start"} width={"370px"}>
                <Image src='/assets/images/feature-icon-6.png' />
                <Text fontWeight={"600"} fontSize={"1.3rem"} paddingY={"1rem"}>Build your advisor profile</Text>
                <Text marginBottom={"0px"}>Do this on your own, or work with our team for personal assistance setting up your profile on AdvisoryCloud </Text>
            </VStack>
        </HStack>
    )
}

export default FeatureCard
