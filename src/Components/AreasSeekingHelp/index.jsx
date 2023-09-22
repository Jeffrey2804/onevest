import { HighlightCard } from "../../Components/CategoryCard/HighlightCard";
import {
  BsFillBuildingFill,
} from "react-icons/bs";

import { HiPresentationChartLine, HiLightBulb } from 'react-icons/hi';
import { AiFillCopy } from 'react-icons/ai';

const highlightCardStyles = {
	border: '1px solid #CEE0FF',
	backgroundColor: '#FFF',
	textColor: "#000",
	iconBackgrounColor: "#E7F0FF",
	mbText: "0px"
};

const AreasSeekingHelp = (props) => {
  return (
		<div className="flex flex-col gap-[24px]">
			<p className="text-3xl font-semibold text-black">
			{props.title || "Areas Seeking Help"}
			</p>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 ">
				<HighlightCard {...highlightCardStyles} icon={<HiLightBulb />} title={"Idea"}  />
				<HighlightCard {...highlightCardStyles} icon={<BsFillBuildingFill />} title={"Startup"} />
				<HighlightCard
						{...highlightCardStyles}
						icon={<AiFillCopy />}
						title={"MVP"}
				/>
				<HighlightCard {...highlightCardStyles} icon={<HiPresentationChartLine />} title={"Growth"} />
			</div>
		</div>
	)
};

export default AreasSeekingHelp;


