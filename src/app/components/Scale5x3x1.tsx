import { BaseCalendar } from "./BaseCalendar";

export const Scale5x3x1 = () => {
  const generateOffDays = (
    startDay: Date,
    lastDayCalendar: Date,
    markNextDay: (day: Date) => string
  ) => {
    const offDays = new Set<string>();
    const queue: Array<{ day: Date; handler: string }> = [];
    const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    const initialHandler = weekdays[startDay.getDay()];
    queue.push({ day: startDay, handler: initialHandler });

    const createDayOffHandler = (nextHandler: string, offset: number) => (day: Date) => {
      offDays.add(markNextDay(day));
      queue.push({
        day: new Date(day.getFullYear(), day.getMonth(), day.getDate() + offset),
        handler: nextHandler,
      });
    };

    const dayOffSeg = (day: Date) => {
      offDays.add(markNextDay(day));
      queue.push({
        day: new Date(day.getFullYear(), day.getMonth(), day.getDate() + 4),
        handler: "Sex",
      });
    };

    const dayOffSex = (day: Date) => {
      offDays.add(markNextDay(day));
      offDays.add(markNextDay(new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1)));
      offDays.add(markNextDay(new Date(day.getFullYear(), day.getMonth(), day.getDate() + 2)));
      queue.push({
        day: new Date(day.getFullYear(), day.getMonth(), day.getDate() + 6),
        handler: "Qui",
      });
    };

    const dayOffSab = (day: Date) => {
      queue.push({
        day: new Date(day.getFullYear(), day.getMonth(), day.getDate() - 1),
        handler: "Sex",
      });
    };

    const dayOffDom = (day: Date) => {
      queue.push({
        day: new Date(day.getFullYear(), day.getMonth(), day.getDate() - 2),
        handler: "Sex",
      });
    };

    const offDayMapping = new Map<string, (day: Date) => void>([
      ["Seg", dayOffSeg],
      ["Ter", createDayOffHandler("Seg", 6)], 
      ["Qua", createDayOffHandler("Ter", 6)], 
      ["Qui", createDayOffHandler("Qua", 6)], 
      ["Sex", dayOffSex],
      ["Sáb", dayOffSab],
      ["Dom", dayOffDom],
    ]);

    while (queue.length > 0) {
      const { day, handler } = queue.shift()!;
      if (day > lastDayCalendar) continue;

      const handlerFunction = offDayMapping.get(handler);
      if (handlerFunction) {
        handlerFunction(day);
      }
    }

    return Array.from(offDays);
  };

  return <BaseCalendar generateOffDays={generateOffDays} />;
};