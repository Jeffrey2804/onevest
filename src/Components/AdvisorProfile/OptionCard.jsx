import { AddIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react';
import React, { useState } from 'react'

function OptionCard({ allData }) {
    const [isHover, setIsHover] = useState(false);
    const { image, name } = allData
    return (
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={` transition-all duration-300 px-[60px] py-[57px] rounded-[15px] shadow-[7px_7px_52px_0px_#12121212] flex-col justify-start items-center gap-[17px] inline-flex hover:cursor-pointer ${isHover ? "bg-[#0E6EFF]" : "bg-white"}`}>
            <div className={`w-[72px] h-[72px] relative  rounded-[100px] ${!isHover ? "bg-[#0E6EFF]" : "bg-white"}`}>
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full rounded-full">
                    {/* <AddIcon h={6} w={6} fontWeight="bold" color={isHover ? "#0E6EFF" : "white"} /> */}
                    <Image
                        src={`/assets/images/${isHover ? `${image}-white.svg` : `${image}-blue.svg`}`}
                        width={33}
                        height={33}
                        boxSize="full"
                    />
                </div>
            </div>
            <div className={`text-center text-3xl font-semibold ${isHover ? "text-[white]" : "text-[#0E6EFF]"}`}>{name || ""}</div>
        </div>
    )
}

export default OptionCard