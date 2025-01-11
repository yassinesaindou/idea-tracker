export default interface Ideainterface {
  $id: string;
  title: string;
  description: string;
  date: string;
  status: "Not started" | "In progress" | "Done";
  priority: "low" | "high" | "medium";
}
