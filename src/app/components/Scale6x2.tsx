import { BaseCalendar } from "./BaseCalendar";

export const Scale6x2 = () => {
  const generateOffDays = (
    startDay: Date,
    lastDayCalendar: Date,
    markNextDay: (day: Date) => string
  ) => {
    const offDays: string[] = [];
    const currentDay = new Date(startDay);
    offDays.push(markNextDay(currentDay));

    while (currentDay <= lastDayCalendar) {
      [7, 8].forEach((offset) => {
        const nextDay = new Date(
          currentDay.getFullYear(),
          currentDay.getMonth(),
          currentDay.getDate() + offset
        );
        offDays.push(markNextDay(nextDay));
      });
      currentDay.setDate(currentDay.getDate() + 8);
    }

    return offDays;
  };

  return <BaseCalendar generateOffDays={generateOffDays} />;
};