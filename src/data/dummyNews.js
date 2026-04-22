const sources = ["BBC", "CNN", "Reuters", "Al Jazeera", "TechCrunch"];

const data = [
  // 🔥 1. LARGE SLIDER CARD
  {
    type: "L",
    content: "slider",
    slides: [
      {
        title: "AI is transforming the global economy",
        image: "https://picsum.photos/800/500?random=1",
        source: "BBC",
        time: "1h",
        likes: 120,
      },
      {
        title: "Tech layoffs hit record high in 2026",
        image: "https://picsum.photos/800/500?random=2",
        source: "CNN",
        time: "2h",
        likes: 98,
      },
      {
        title: "Startups are shifting to AI-first model",
        image: "https://picsum.photos/800/500?random=3",
        source: "TechCrunch",
        time: "3h",
        likes: 140,
      },
    ],
  },

  // 🔥 2. VIDEO NEWS
  {
    type: "L",
    content: "video",
    title: "Massive storm hits coastal cities",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    source: "Reuters",
    time: "2h",
    likes: 200,
  },

  // 🔥 3. VIDEO AD
  {
    type: "L",
    content: "videoAd",
    title: "New electric cars launched in 2026",
    video: "https://www.w3schools.com/html/movie.mp4",
    source: "Sponsored",
    time: "Ad",
    likes: 0,
  },

  // 🔽 NORMAL MIXED NEWS
  ...Array.from({ length: 27 }).map((_, i) => {
    const index = i + 4;

    return {
      type: index % 7 === 0 ? "L" : "M",

      content:
        index % 9 === 0
          ? "sponsor"
          : index % 11 === 0
            ? "ad"
            : index % 5 === 0
              ? "video"
              : "news",

      title: `News headline ${index} - Breaking global update`,

      image: `https://picsum.photos/400/300?random=${index}`,

      video:
        index % 5 === 0 ? "https://www.w3schools.com/html/mov_bbb.mp4" : null,

      source: sources[index % sources.length],

      time: `${index}h`,

      likes: Math.floor(Math.random() * 200),
    };
  }),
];

export default data;
