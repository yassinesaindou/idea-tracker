import UpdateForm from "../UpdateForm";

import { getIdea } from "@/app/actions";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const idea = await getIdea(id);

  if (!idea) return <h1>Not Found</h1>;
  return (
    <div className="max-w-[1140px] mx-auto grid lg:grid-cols-[2fr_1fr]">
      <UpdateForm idea={idea} update={true} />
    </div>
  );
}
