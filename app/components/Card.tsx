import React from "react";
import DataPill from "./DataPill";

interface Props {
  title: string;
  description: string;
  date: string;
  status: "Not started" | "In progress" | "Done";
  priority: "low" | "high" | "medium";
}

export default function Card({
  date,
  description,
  priority,
  status,
  title,
}: Props) {
  const shortDesc =
    description.length < 100 ? description : description.slice(0, 100);
  return (
    <div className="border-text border p-[15px] shadow-sm rounded-md  max-w-[350px] cursor-pointer">
      <div className="flex justify-between">
        <DataPill type="status" value={status} />
        <DataPill type="priority" value={priority} />
      </div>
      <p className="font-semibold text-description">{date.toString()}</p>

      <h3 className="font-semibold text-[24px] mt-2 text-subheading opacity-90 ">
        {title}
      </h3>
      <p className=" text-description ">{shortDesc}</p>
    </div>
  );
}
