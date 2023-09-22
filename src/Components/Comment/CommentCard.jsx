import { HStack, Box, Text, VStack } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import userProfilePic from "../../assets/images/user.png";

const CommentCard = (props) => {
    const created_at = props?.data.created_at;
    const comment = props?.data;
    const commenter = props?.data?.commenter_details?.[0]?.name;

    const timestamp = created_at;
    const formatRelativeTime = (timestamp) => {
        const currentTime = new Date();
        const pastTime = new Date(timestamp);
        const timeDifference = currentTime - pastTime;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        if (hours >= 24) {
            const days = Math.floor(hours / 24);
            return `${days} ${days === 1 ? "day" : "days"} ago`;
        } else if (hours >= 1) {
            return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
        } else if (minutes >= 1) {
            return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
        } else {
            return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
        }
    };
    const relativeTime = formatRelativeTime(timestamp);

    return (
        <HStack display={"flex"} justifyContent={"space-between"} borderBottom={props.isLast ? "none" : "1px solid #CEE0FF"}>
            <VStack display={"flex"} flexDirection={"row"} gap={"30px"} padding={"2rem 0"}>
                <Image src={userProfilePic} width={"70px"} />
                <Box>
                    <Box display={"flex"} marginBottom={"0.5rem"} gap={"20px"}>
                        <Text margin={"0px"} fontWeight={"bold"}>
                            {commenter
                                ? commenter
                                : localStorage.getItem('username')}
                        </Text>
                        <Text margin={"0px"}>{relativeTime}</Text>
                    </Box>
                    <Text margin={"0px"} textTransform={"capitalize"}>
                        {comment.comment}
                    </Text>
                </Box>
            </VStack>
        </HStack>
    )
};

export default CommentCard;