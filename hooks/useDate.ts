export const useDate = (): {
  dayNumber: number;
  month: string;
  year: number;
  hours: number;
  minutes: number;
} => {
  const mois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const today = new Date();
  let year = today.getFullYear();
  let dayNumber = today.getDate();
  let month = mois[today.getMonth()];
  let hours = today.getUTCHours();
  let minutes = today.getUTCMinutes();

  return { dayNumber, month, year, hours, minutes };
};
