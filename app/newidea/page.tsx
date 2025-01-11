import UpdateForm from "../update/UpdateForm";

export default function Page() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <h2 className="text-heading text-2xl font-bold my-4" >Create a new Idea</h2>
      <div className=" mx-auto grid lg:grid-cols-[2fr_1fr]">
        <UpdateForm update={false} />
      </div>
    </div>
  );
}
