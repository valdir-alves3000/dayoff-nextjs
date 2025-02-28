import { BaseCalendar } from "./BaseCalendar";

export const Scale18x12 = () => {
  const generateOffDays = (
    startDay: Date,
    lastDayCalendar: Date,
    markNextDay: (day: Date) => string
  ) => {
    const offDays: string[] = [];
    const currentDay = new Date(startDay);
    offDays.push(markNextDay(currentDay));

    while (currentDay <= lastDayCalendar) {
        [19,20,21,22,23,24,25,26,27,28,29,30].forEach((offset) => {
          const nextDay = new Date(
            currentDay.getFullYear(),
            currentDay.getMonth(),
            currentDay.getDate() + offset
          );
          offDays.push(markNextDay(nextDay));
        });
        currentDay.setDate(currentDay.getDate() + 31); 
      }
  
      return offDays;
    };

  return <BaseCalendar generateOffDays={generateOffDays} />;
};
