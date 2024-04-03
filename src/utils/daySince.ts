function timeSince(date: Date) {
  const now = new Date();
  const seconds = Math.floor((Number(now) - Number(date)) / 1000);

  const intervals = [
    { value: 31536000, unit: "year" },
    { value: 2592000, unit: "month" },
    { value: 86400, unit: "day" },
    { value: 3600, unit: "hour" },
    { value: 60, unit: "minute" },
  ];

  let biggestInterval = 0;
  let unit;

  for (const interval of intervals) {
    if (seconds >= interval.value) {
      biggestInterval = Math.floor(seconds / interval.value);
      unit = interval.unit;
      break;
    }
  }

  if (biggestInterval === 0) {
    return "just now";
  }

  return (
    biggestInterval + " " + (biggestInterval > 1 ? unit + "s" : unit) + " ago"
  );
}

export default timeSince;
