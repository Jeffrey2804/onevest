import { Button, Text } from '@chakra-ui/react';
import React from 'react'

const TitleLayout = (props) => {
    return (
        <div className="flex justify-between w-[100%] py-5">
            <Text className="text-3xl text-black text-center font-semibold">
                {props.title}
            </Text>
            <Button backgroundColor={props.btnBg} color={props.btnColor} border={"1px solid #CEE0FF"} borderRadius={"30px"} padding={"0 23px"} fontSize={"14px"}>
                {props.buttonText}
            </Button>
        </div>
    )
}

export default TitleLayout;
