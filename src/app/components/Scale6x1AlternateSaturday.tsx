import { useState } from "react";
import { useCalendar } from "../hooks/useCalendar";

export const Scale6x1AlternateSaturday = () => {
    const [offDays, setOffDays] = useState<string[]>([]);
    const { currentDate, months, lastDayCalendar, markNextDay, weekdays } = useCalendar();

    if (!currentDate) return null;

    const generateOffDays = (
        startDay: Date,
        lastDayCalendar: Date,
        markNextDay: (day: Date) => string
    ) => {
        const offDays: string[] = [];
        const currentDay = new Date(startDay);
        offDays.push(markNextDay(startDay));
        let includeNextSaturday = true;

        while (currentDay <= lastDayCalendar) {
            const nextDay = new Date(
                currentDay.getFullYear(),
                currentDay.getMonth(),
                currentDay.getDate() + 1
            );

            offDays.push(markNextDay(nextDay));

            if (currentDay.getDay() === 6) {
                if (includeNextSaturday) {
                    offDays.push(markNextDay(currentDay));
                }
                includeNextSaturday = !includeNextSaturday
            }

            currentDay.setDate(currentDay.getDate() + 7);
        }

        return offDays;
    };

    const handleDayClick = (day: Date) => {
        const newOffDays = generateOffDays(day, lastDayCalendar, markNextDay);
        setOffDays(newOffDays);
    };

    return (
        <div className="text-center font-sans">
            {months.map((month, index) => (
                <div key={index} className="month mb-10">
                    <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-400 capitalize">
                        {month.name} {month.year}
                    </h2>
                    <div className="weekdays grid grid-cols-7 gap-2 max-w-4xl mx-auto mb-2 p-3 md:p-6 rounded-md shadow bg-gray-50">
                        {weekdays.map((weekday, i) => (
                            <div
                                key={i}
                                className={`day p-2 text-xs font-bold rounded-md text-center shadow bg-zinc-100 ${i === 0 ? "text-red-300" : "text-[#74a0ff]"
                                    } md:text-sm`}
                            >
                                {weekday}
                            </div>
                        ))}
                    </div>
                    <div className="days grid grid-cols-7 gap-2 max-w-4xl mx-auto bg-zinc-50 rounded-md shadow-md p-3 md:p-6">
                        {Array.from({ length: month.firstDayOfWeek }).map((_, i) => (
                            <div key={`empty-${i}`} className="day p-2 text-center" />
                        ))}

                        {month.days.map((day, i) => {
                            const dayKey = markNextDay(day);
                            const isOffDay = offDays.includes(dayKey);
                            const isActive = month.isCurrentMonth && day.getDay() === 6

                            return (
                                <div
                                    key={i}
                                    className={`day p-2 text-center rounded-md border border-gray-100 shadow ${isActive ? "cursor-pointer hover:bg-gray-200" : ""
                                        } ${isOffDay ? "bg-green-100 text-zinc-500" : "text-zinc-400"}`}
                                    onClick={() => isActive && handleDayClick(day)}
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
