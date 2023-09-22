import { BsStarFill } from 'react-icons/bs';
import { VStack } from "@chakra-ui/react";

const Review = (props) => {
  return (
		<VStack
			width={"100%"}
			maxWidth={"400px"}
			cursor={"pointer"}
			border={props.border || "1px solid #dcdada"}
			color={props.color ? props.color : "#0086ff"}
			padding={props.padding ? props.padding : "30px 14px"}
			margin={"10px 0"}
			borderRadius={"16px"}
			alignItems={"center"}
			justifyContent={"center"}
			backgroundColor={props.backgroundColor || 'transparent'}
			boxShadow={"0px 0px 20px 0px #0E6EFF1C"}
		>
			<div className='flex flex-row items-start justify-start w-full'>
				{ [0,1,2,3,4].map((_, index) =>	<BsStarFill key={index} color='#FFD231' className='mr-1' />) }
			</div>

			<p className='text-gray-900'>
				I really enjoyed my first board meeting. I got a chance to hear directly from company management about what they want and what they need. And this is a really, really great opportunity for me to help them and share my deep experience with an exciting company.
			</p>

			<div className='flex flex-row w-full items-center justify-start pt-2'>
				<img src={"/assets/images/user-item-image.png"} width="50px" />
				<div className='px-3'>
					<p className='text-lg text-gray-900 mb-0'>
						{props.name || "Zoltan Pasztory"}
					</p>
					<p className='text-sm text-gray-900 mb-0'>
						{props.role || "Advisory Board Member"}
					</p>
				</div>
			</div>
		</VStack>
	)
};

export default Review;


