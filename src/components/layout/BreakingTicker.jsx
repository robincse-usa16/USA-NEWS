export default function BreakingTicker({ items = [] }) {
  const text = items
    .slice(0, 8)
    .map((i) => i.title)
    .join("  •  ");
  return (
    <div className="breaking">
      <span className="label">Breaking News</span>
      <div className="marquee">
        <div className="track">{text}</div>
      </div>
    </div>
  );
}
