import { StarIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import React from "react";

function ReviewCard({ allData }) {
  const ratting = 5;
  const { name, designation, image, rating, description } = allData;
  return (
    <div className="my-3 bg-white rounded-2xl w-full flex items-center gap-10 flex-col">
      <div className="w-full flex items-center gap-2 justify-center">
        {ratting <= 5 &&
          Array(ratting)
            .fill(null)
            .map((_, index) => {
              return (
                <StarIcon
                  key={index}
                  color="#ffab09"
                  height={25}
                  width={25}
                />
              );
            })}
      </div>
      <div className="flex gap-2 items-center justify-center">
        <h2 className="text-zinc-600 text-sm lg:text-lg font-normal leading-[28.98px] text-center tracking-tight">
          {description || ""}
        </h2>
      </div>
      <div className="w-full flex items-center justify-center">
        <Image
          src={`/assets/images/${image}`}
          width={79}
          height={79}
          className="object-cover"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-center text-zinc-600">
            {name || ""}
          </h2>
          <span className="text-center text-zinc-600 text-[15px] font-normal leading-normal">
            {designation || ""}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
