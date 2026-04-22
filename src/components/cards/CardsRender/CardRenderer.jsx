// একটাই জায়গা থেকে decide করবে কোন card দেখাবে
import LargeCard from "../LargeCard/LargeCard";
import MediumCard from "../MediumCard/MediumCard";
import SmallCard from "../SmallCard/SmallCard";

export default function CardRenderer({ item }) {
  // তুমি এখন dummy data তে type দিছো: "large" | "medium" | "small"
  //   if (item.type === "large") return <LargeCard item={item} />;
  if (item.type === "large") return <LargeCard item={item} />;
  //   if (item.type === "medium") return <MediumCard item={item} />;
  if (item.type === "medium") return <MediumCard item={item} />;
  return <SmallCard item={item} />;
}
