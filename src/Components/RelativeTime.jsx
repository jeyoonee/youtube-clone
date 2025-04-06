import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
  parseISO,
} from "date-fns";
import { useMemo } from "react";

export default function RelativeTime({ isoDateString }) {
  const timeAgo = useMemo(() => {
    const date = parseISO(isoDateString);
    const now = new Date();

    const minutesDiff = differenceInMinutes(now, date);
    const hoursDiff = differenceInHours(now, date);
    const daysDiff = differenceInDays(now, date);
    const weeksDiff = differenceInWeeks(now, date);
    const monthsDiff = differenceInMonths(now, date);
    const yearsDiff = differenceInYears(now, date);

    if (minutesDiff < 60) {
      return `${minutesDiff} minute${minutesDiff !== 1 ? "s" : ""} ago`;
    }

    if (hoursDiff < 24) {
      return `${hoursDiff} hour${hoursDiff !== 1 ? "s" : ""} ago`;
    }

    if (daysDiff < 7) {
      return `${daysDiff} day${daysDiff !== 1 ? "s" : ""} ago`;
    }

    if (weeksDiff < 4) {
      return `${weeksDiff} week${weeksDiff !== 1 ? "s" : ""} ago`;
    }

    if (monthsDiff < 12) {
      return `${monthsDiff} month${monthsDiff !== 1 ? "s" : ""} ago`;
    }

    return `${yearsDiff} year${yearsDiff !== 1 ? "s" : ""} ago`;
  }, [isoDateString]);

  return <span>{timeAgo}</span>;
}
