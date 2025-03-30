import { differenceInHours, differenceInDays, parseISO } from "date-fns";
import { useMemo } from "react";

export default function RelativeTime({ isoDateString }) {
  const timeAgo = useMemo(() => {
    const date = parseISO(isoDateString);
    const now = new Date();

    const hoursDiff = differenceInHours(now, date);
    const daysDiff = differenceInDays(now, date);

    if (hoursDiff < 24) {
      return `${hoursDiff} hour${hoursDiff !== 1 ? "s" : ""} ago`;
    }

    if (daysDiff < 7) {
      return `${daysDiff} day${daysDiff !== 1 ? "s" : ""} ago`;
    }

    const weeks = Math.floor(daysDiff / 7);
    return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  }, [isoDateString]);

  return <span>{timeAgo}</span>;
}
