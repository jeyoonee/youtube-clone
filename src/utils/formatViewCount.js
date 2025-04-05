export default function formatViewCount(count) {
  const num = parseInt(count, 10);
  if (num >= 1_000_000)
    return (num / 1_000_000).toFixed(0).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(0).replace(/\.0$/, "") + "K";
  return num.toString();
}
