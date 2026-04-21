import Masonry from "react-masonry-css";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import data from "../../data/dummyNews";
import LargeCard from "../../components/cards/LargeCard/LargeCard";
import MediumCard from "../../components/cards/MediumCard/MediumCard";
import SmallCard from "../../components/cards/SmallCard/SmallCard";
import "./MainLayout.css";

const breakpoints = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

export default function MainLayout() {
  return (
    <div className="main-layout">
      <div className="grid">
        <Masonry breakpointCols={breakpoints} className="masonry">
          {data.map((item, i) => {
            if (item.type === "large") return <LargeCard key={i} item={item} />;
            if (item.type === "medium")
              return <MediumCard key={i} item={item} />;
            return <SmallCard key={i} item={item} />;
          })}
        </Masonry>
      </div>

      <Sidebar />
    </div>
  );
}
