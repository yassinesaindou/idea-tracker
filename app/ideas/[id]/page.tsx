import { deleteIdea, getIdea } from "@/app/actions";

import Link from "next/link";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  // console.log(id);

  const idea = await getIdea(id);

  if (!idea) return <h1>Not Found</h1>;

  return (
    <div className="max-w-[1140px] mx-auto">
      <h1 className="text-2xl text-heading font-semibold mb-5">{idea.title}</h1>
      <div className="max-w-[75%] border p-3 border-gray-400 rounded-md">
        <p className="text-description ">{idea.description}</p>
      </div>
      <button className=" bg-blue-300 px-5 py-2  rounded-sm text-heading">
        <Link href={`/update/${idea.$id}`}>Update Idea</Link>
      </button>
      <button className="m-5 bg-red-300 px-5 py-2  rounded-sm text-heading">
        Delete Idea
      </button>
    </div>
  );
}
