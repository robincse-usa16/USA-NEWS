const sources = ["BBC", "CNN", "Reuters", "Al Jazeera", "TechCrunch"];

const data = [];

for (let i = 1; i <= 50; i++) {
  data.push({
    title: `News headline number ${i} - Breaking story update`,
    image: `https://picsum.photos/400/300?random=${i}`,
    type: i % 5 === 0 ? "large" : i % 2 === 0 ? "medium" : "small",
    source: sources[i % sources.length],
    time: `${i}h`,
    likes: Math.floor(Math.random() * 200),
  });
}

export default data;
