export const truncate = (text = "", n = 100) =>
  text.length > n ? text.slice(0, n) + "..." : text;
