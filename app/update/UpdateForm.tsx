"use client";
import Ideainterface from "@/utils/ideaInterface";
import React, { FormEvent } from "react";
import { createIdea, updateIdea } from "../actions";

interface Props {
  idea?: Ideainterface;
  update: boolean;
}

export default function UpdateForm({ idea, update }: Props) {
  console.log(idea);
  let updateIdeaWithId;
  if (idea) {
    updateIdeaWithId = updateIdea.bind(null, idea.$id);
  } else {
    updateIdeaWithId = createIdea;
  }


  return (
    <form action={updateIdeaWithId}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        defaultValue={idea?.title ?? ""}
        className="text-[16px] border outline-none px-2 text-subheading block mb-5 py-1 w-[100%] rounded-sm focus:border-gray-400"
        placeholder="Name your idea"
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        defaultValue={idea?.description ?? ""}
        className="text-[16px] border outline-none block px-2 py-1 text-subheading min-h-[200px] w-[100%] rounded-sm focus:border-gray-400"
        placeholder="Describe your idea here"
        name="description"
      />

      <div className="flex justify-between mt-3 items-center w-[100%] ">
        <div className="flex gap-[35px]">
          <div className="flex gap-2 mt-2 items-baseline">
            <label htmlFor="status">Status: </label>
            <select
              name="status"
              className="text-[16px] border px-2 py-1 rounded-sm outline-none "
              id="status">
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex gap-2 mt-2 items-baseline">
            <label htmlFor="priority">Status: </label>
            <select
              name="priority"
              className="text-[16px] border px-2 py-1 rounded-sm outline-none "
              id="priority">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="bg-heading text-gray-100 px-4 py-1 rounded-sm">
          {update ? "Update Idea" : "Create Idea"}
        </button>
      </div>
    </form>
  );
}
