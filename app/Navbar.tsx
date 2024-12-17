import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between max-w-[1140px] border mx-auto border-b-description items-center py-2">
      <h1 className="text-heading font-bold text-2xl">Ideaz</h1>
      <div className=" flex items-center justify-between gap-4 text-subheading">
        <p>Joe Coleman</p>

        <Image
          src={"https://cdn-icons-png.flaticon.com/128/847/847969.png"}
          width={40}
          height={40}
          alt="user"
        />
      </div>
    </nav>
  );
}
