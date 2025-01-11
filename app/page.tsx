import ideas from "@/utils/ideas";
import Card from "./components/Card";
import DataPill from "./components/DataPill";
import Hero from "./sections/Hero";
import { databases } from "./lib/apprite";
import { Query } from "appwrite";
import { getAllIdeas } from "./actions";
import Link from "next/link";

export default async function Home() {
  const res = await getAllIdeas();
  const ideas = res?.documents;

  return ideas ? (
    <div className="max-w-[1140px] mx-auto my-4 ">
      <Hero />

      <button className=" bg-gray-900 relative right-1 px-5 py-2  rounded-sm text-gray-300">
        <Link href={`/newidea`}>Create a new Idea</Link>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ideas.map((idea) => (
          <Card
            id={idea["$id"]}
            key={idea["$id"]}
            date={idea.date}
            description={idea.description}
            priority={idea.priority}
            status={idea.status}
            title={idea.title}
          />
        ))}
      </div>
    </div>
  ) : (
    <p>No Ideas</p>
  );
}
