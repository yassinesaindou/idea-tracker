"use client";
import { format } from "date-fns";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import DataPill from "./DataPill";
import { deleteIdea } from "../actions";

interface Props {
  id: string;
  title: string;
  description: string;
  date: Date | string;
  status: "Not started" | "In progress" | "Done";
  priority: "low" | "high" | "medium";
}

export default function Card({
  date,
  description,
  priority,
  status,
  title,
  id,
}: Props) {
  const shortDesc =
    description.length < 70 ? description : description.slice(0, 70) + "...";

  return (
    <div className="border-text border p-[15px] shadow-md rounded-md  max-w-[350px] cursor-pointer">
      <div className="flex justify-between">
        <DataPill type="status" value={status} />
        <div className="flex gap-2">
          <DataPill type="priority" value={priority} />
          <Dropdown id={id} />
        </div>
      </div>

      <p className="font-semibold text-description">
        {format(date, "dd/MMM/yyyy")}
      </p>

      <h3 className="font-semibold text-[24px] mt-2 text-subheading opacity-90 ">
        {title}
      </h3>
      <p className=" text-description ">
        {shortDesc}
        <Link href={`/ideas/${id}`}>
          <span className="text-link bg-blue-50">read more</span>
        </Link>
      </p>
    </div>
  );
}

function Dropdown({ id }: { id: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none border-[1px] p-1 rounded-sm ">
        <EllipsisVertical size={16} className="" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border rounded-md w-[80px]">
        <DropdownMenuItem className="hover:bg-gray-100 pl-1 w-full  outline-none">
          <Link href={`/update/${id}`}> Update</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => await deleteIdea(id)}
          className="hover:bg-gray-100 pl-1  outline-none">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
