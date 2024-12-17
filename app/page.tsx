import Card from "./components/Card";
import DataPill from "./components/DataPill";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div className="max-w-[1140px] mx-auto ">
      <Hero />
      <DataPill type="status" value="In progress" />
      <Card date={ Date()} description="A description" priority="high" status="In progress" title="A title" />
    </div>
  );
}
