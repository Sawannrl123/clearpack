const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const getDateandTimeFromMillisecond = millisecond => {
  const parsedDate = new Date(millisecond);
  const date = parsedDate.getDate();
  const month = parsedDate.getMonth();
  const year = parsedDate.getFullYear();
  const hour = parsedDate.getHours();
  const min = parsedDate.getMinutes();
  const sec = parsedDate.getSeconds();
  return `${plural(date)}-${months[month]}-${year} ${plural(hour)}:${plural(
    min
  )}:${plural(sec)}`;
};

export const plural = num => {
  return (num + "").length === 1 ? `0${num}` : `${num}`;
};

export const Data = {
  setting: {
    Date: undefined,
    Analysis: [
      "Current Shift",
      "Current Day",
      "Current Week",
      "Current Month",
      "Period"
    ],
    From: null,
    To: null,
    User: "Admin"
  },
  view: {
    labels: ["Event Bar", "Pie Chart"],
    data: {}
  }
};
