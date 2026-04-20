export default function BreakingTicker({ items = [] }) {
  const text = items.map((i) => i.title).join("  •  ");

  return (
    <div className="breaking">
      <div className="breaking-label">Breaking News</div>

      <div className="breaking-wrapper">
        <div className="breaking-track">{text}</div>
      </div>
    </div>
  );
}
