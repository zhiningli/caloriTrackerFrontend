import React from 'react';
import { CalendarRowContainer, DayBlock } from './CalendarRow.styles';

const CalendarRow = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <CalendarRowContainer>
            {daysOfWeek.map((day, index) => (
                <DayBlock key={index}>
                    {day}
                </DayBlock>
            ))}
        </CalendarRowContainer>
    );
};

export default CalendarRow;