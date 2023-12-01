export function getMonthAbbreviation(dateString) {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const date = new Date(dateString);
  const monthIndex = date.getMonth();

  return months[monthIndex];
}

export function getDay(dateString) {
  const date = new Date(dateString);
  return date.getDate();
}
