import { useState, useEffect } from 'react';

const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export const useCalendar = () => {
    const [currentDate, setCurrentDate] = useState<Date | null>(null);

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    if (!currentDate) return { months: [], currentDate };

    const generateNext12Months = () => {
        const months = [];
        for (let i = 0; i < 12; i++) {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + i;
            const date = new Date(year, month, 1);

            const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
            const days = Array.from({ length: daysInMonth }, (_, day) =>
                new Date(date.getFullYear(), date.getMonth(), day + 1)
            );

            months.push({
                name: date.toLocaleString('default', { month: 'long' }),
                year: date.getFullYear(),
                days,
                firstDayOfWeek: date.getDay(),
                isCurrentMonth: date.getMonth() === currentDate.getMonth(),
            });
        }
        return months;
    };

    const getLastDayOfNextYearMonth = () => {
        const nextYear = currentDate.getFullYear() + 1;
        const currentMonth = currentDate.getMonth();
        return new Date(nextYear, currentMonth + 1, 0);
    };

    const markNextDay = (day: Date) => {
        return `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
    };

    return {
        currentDate,
        months: generateNext12Months(),
        lastDayCalendar: getLastDayOfNextYearMonth(),
        markNextDay,
        weekdays
    };
};

