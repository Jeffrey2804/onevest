import React from 'react';
import FullContainer from '../../Components/FullContainer';
import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react';
import userProfilePic from "../../assets/images/user.png";


const NotificationCard = () => {
    return (
        <HStack display={"flex"} justifyContent={"space-between"} borderBottom={"1px solid #CEE0FF"}>
            <VStack display={"flex"} flexDirection={"row"} gap={"30px"} padding={"2rem 0"}>
                <Image src={userProfilePic} width={"70px"} />
                <Box>
                    <Box display={"flex"} marginBottom={"0.5rem"} gap={"20px"}>
                        <Text margin={"0px"} fontWeight={"bold"}>Roger Smith</Text>
                        <Text margin={"0px"}>30mins ago</Text>
                    </Box>
                    <Text margin={"0px"}>Sent you a Session Request</Text>
                </Box>
            </VStack>
            <VStack display={"flex"} flexDirection={"row"}>
                <Button backgroundColor={"white"} border={"1px solid #CEE0FF"} borderRadius={"10px"} padding={"0 13px"} fontSize={"14px"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='mr-1'>
                        <g clip-path="url(#clip0_30_21939)">
                            <path d="M4.6665 8.00008L7.99984 11.3334L14.6665 4.66675" stroke="#1E1E1F" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.3335 8.00008L4.66683 11.3334M8.00016 8.00008L11.3335 4.66675" stroke="#1E1E1F" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_30_21939">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg> Mark as Read
                </Button>
                <Button backgroundColor={"white"} border={"1px solid #CEE0FF"} borderRadius={"10px"} padding={"0 13px"} fontSize={"14px"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='mr-1'>
                        <g clip-path="url(#clip0_30_21945)">
                            <path d="M2.6665 4.66675H13.3332" stroke="#1E1E1F" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.6665 7.33325V11.3333" stroke="#1E1E1F" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.3335 7.33325V11.3333" stroke="#1E1E1F" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.3335 4.66675L4.00016 12.6667C4.00016 13.0204 4.14064 13.3595 4.39069 13.6096C4.64074 13.8596 4.97987 14.0001 5.3335 14.0001H10.6668C11.0205 14.0001 11.3596 13.8596 11.6096 13.6096C11.8597 13.3595 12.0002 13.0204 12.0002 12.6667L12.6668 4.66675" stroke="#1E1E1F" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 4.66667V2.66667C6 2.48986 6.07024 2.32029 6.19526 2.19526C6.32029 2.07024 6.48986 2 6.66667 2H9.33333C9.51014 2 9.67971 2.07024 9.80474 2.19526C9.92976 2.32029 10 2.48986 10 2.66667V4.66667" stroke="#1E1E1F" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_30_21945">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg> Delete
                </Button>
            </VStack>
        </HStack>
    )
}

export default NotificationCard
