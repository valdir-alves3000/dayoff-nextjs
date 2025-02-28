import { BaseCalendar } from "./BaseCalendar";

export const Scale4x2 = () => {
  const generateOffDays = (
    startDay: Date,
    lastDayCalendar: Date,
    markNextDay: (day: Date) => string
  ) => {
    const offDays: string[] = [];
    const currentDay = new Date(startDay); 
    offDays.push(markNextDay(currentDay));

    while (currentDay <= lastDayCalendar) {
      [5, 6].forEach((offset) => {
        const nextDay = new Date(
          currentDay.getFullYear(),
          currentDay.getMonth(),
          currentDay.getDate() + offset
        );
        offDays.push(markNextDay(nextDay));
      });
      currentDay.setDate(currentDay.getDate() + 6); 
    }

    return offDays;
  };

  return <BaseCalendar generateOffDays={generateOffDays} />;
};