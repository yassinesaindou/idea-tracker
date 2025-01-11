interface Props {
  type: "priority" | "status";
  value:
    | "high"
    | "medium"
    | "low"
    | "In progress"
    | "Not started"
    | "Done"
    | "not-started"
    | "in-progress";
}

export default function DataPill({ type, value }: Props) {
  let color;
  if (type === "priority") {
    value == "high"
      ? (color = "border-red-400")
      : value == "medium"
      ? (color = "border-orange-400")
      : (color = "border-yellow-400");

    return (
      <div
        className={`px-4 py-[1px] border ${color} border-[2px] w-fit rounded-md text-subheading`}>
        {value}
      </div>
    );
  } else {
    value == "In progress" || value == "in-progress"
      ? (color = "bg-yellow-400")
      : value === "Not started" || value === "not-started"
      ? (color = "bg-red-400")
      : (color = "bg-green-400");

    return (
      <div className={`px-3 py-[1px] ${color} rounded-md w-fit text-gray-100`}>
        {value.split("-").join(" ").toUpperCase()}
      </div>
    );
  }
}
