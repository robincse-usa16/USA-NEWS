import { useRef } from "react";
import NewsCard from "./NewsCard";

export default function RowCategory({ title, articles }) {
  const scrollRef = useRef();

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => (isDown = false);
  const handleMouseUp = () => (isDown = false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="category">
      <h2>{title}</h2>

      <div
        className="row-scroll"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {articles.map((item, i) => (
          <div className="row-item" key={i}>
            <NewsCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
