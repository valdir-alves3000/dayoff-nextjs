import { BaseCalendar } from "./BaseCalendar";

export const Scale12x36 = () => {
  const generateOffDays = (
    startDay: Date,
    lastDayCalendar: Date,
    markNextDay: (day: Date) => string
  ) => {
    const offDays: string[] = [];
    const currentDay = new Date(startDay);
    offDays.push(markNextDay(currentDay));

    while (currentDay <= lastDayCalendar) {
      const nextDay = new Date(
        currentDay.getFullYear(),
        currentDay.getMonth(),
        currentDay.getDate() + 2
      );
      offDays.push(markNextDay(nextDay));      
      currentDay.setDate(currentDay.getDate() + 2);
    }

    return offDays;
  };

  return <BaseCalendar generateOffDays={generateOffDays} />;
};
