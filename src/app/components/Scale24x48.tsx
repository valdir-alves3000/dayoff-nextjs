import { BaseCalendar } from "./BaseCalendar";

export const Scale24x48 = () => {
  const generateOffDays = (
    startDay: Date,
    lastDayCalendar: Date,
    markNextDay: (day: Date) => string
  ) => {
    const offDays: string[] = [];
    const currentDay = new Date(startDay);
    offDays.push(markNextDay(currentDay));

    while (currentDay <= lastDayCalendar) {
        [2, 3].forEach((offset) => {
          const nextDay = new Date(
            currentDay.getFullYear(),
            currentDay.getMonth(),
            currentDay.getDate() + offset
          );
          offDays.push(markNextDay(nextDay));
        });
        currentDay.setDate(currentDay.getDate() + 3); 
      }
  
      return offDays;
    };

  return <BaseCalendar generateOffDays={generateOffDays} />;
};
