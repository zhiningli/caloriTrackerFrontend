import React from 'react';
import { CalendarRowContainer, DayBlock } from './CalendarRow.styles';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';

const CalendarRow = ({ date }) => {
    const parsedDate = new Date(date);
    console.log('Parsed date', parsedDate);
    const today = new Date(); 

    const startOfTheWeek = startOfWeek(parsedDate, { weekStartsOn: 0 });

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <CalendarRowContainer>
            {daysOfWeek.map((day, index) => {
                const currentDay = addDays(startOfTheWeek, index);
                const dayOfMonth = format(currentDay, 'dd');
                const isToday = isSameDay(currentDay, today);

                console.log('Current Day:', currentDay);
                console.log('Day of Month:', dayOfMonth);
                

                return (
                    <DayBlock key={index} $isToday={isToday}>
                        <div>{day}</div>
                        <div>{dayOfMonth}</div>
                    </DayBlock>
                );
            })}
        </CalendarRowContainer>
    );
};

export default CalendarRow;
