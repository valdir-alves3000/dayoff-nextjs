"use client";
import { useState } from "react";
import { useCalendar } from "../hooks/useCalendar";

interface BaseCalendarProps {
  generateOffDays: (
    startDay: Date,
    lastDayCalendar: Date,
    markNextDay: (day: Date) => string
  ) => string[];
}

export const BaseCalendar = ({ generateOffDays }: BaseCalendarProps) => {
  const [offDays, setOffDays] = useState<string[]>([]);
  const { currentDate, months, lastDayCalendar, markNextDay, weekdays } = useCalendar();

  if (!currentDate) return null;

  const handleDayClick = (day: Date) => {
    const newOffDays = generateOffDays(day, lastDayCalendar, markNextDay);
    setOffDays(newOffDays);
  };

  return (
    <div className="text-center font-sans pb-16">
      {months.map((month, index) => (
        <div key={index} className="month mb-10">
          <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-500 capitalize">
            {month.name} {month.year}
          </h2>
          <div className="weekdays grid grid-cols-7 gap-2 max-w-4xl mx-auto mb-2 p-3 md:p-6 rounded-md bg-white border-t border-gray-200">
            {weekdays.map((weekday, i) => (
              <div
                key={i}
                className={`day p-2 text-xs font-bold rounded-md text-center border-r ${
                  i === 0 ? "text-red-300" : "text-blue-500"
                } md:text-sm`}
              >
                {weekday}
              </div>
            ))}
          </div>
          <div className="days grid grid-cols-7 gap-2 max-w-4xl mx-auto bg-white rounded-md shadow-md p-3 md:p-6">
            {Array.from({ length: month.firstDayOfWeek }).map((_, i) => (
              <div key={`empty-${i}`} className="day p-2 text-center" />
            ))}

            {month.days.map((day, i) => {
              const dayKey = markNextDay(day);
              const isOffDay = offDays.includes(dayKey);
              const isToday = day.getDate() === new Date().getDate() && 
                               day.getMonth() === new Date().getMonth() &&
                               day.getFullYear() === new Date().getFullYear();

              return (
                <div
                  key={i}
                  className={`day p-2 text-center rounded-full ${month.isCurrentMonth ? "cursor-pointer hover:bg-gray-100" : "opacity-80"} ${isOffDay ? "bg-emerald-100 text-emerald-700 font-medium" : "text-zinc-500"} ${isToday ? "ring-1 ring-blue-500 font-bold" : ""}`}
                  onClick={() => month.isCurrentMonth && handleDayClick(day)}
                >
                  {day.getDate()}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
