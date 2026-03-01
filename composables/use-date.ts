export function useDate() {
  let today = new Date();

  let date = today.toLocaleString("ru-RU", {
    hour12: false,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  // ('en-GB',{hour12: true, year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'})

  // let date =
  //   today.getDate() +
  //   "." +
  //   (today.getMonth() + 1) +
  //   "." +
  //   today.getFullYear() +
  //   " " +
  //   today.getHours() +
  //   ":" +
  //   today.getMinutes();

  let number = `${today.getDate()}${today.getMonth() + 1}${today.getMinutes()}${today.getSeconds()}`;

  return { date, number };
}
