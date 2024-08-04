import React, { useState } from 'react';
import DisplayBlock from '../Reusable Components/DisplayBlock';
import { SideBarContainer, GridContainer, CalendarContainer } from './SideBar.style';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function SideBar() {
    const [date, setDate] = useState(new Date());

    return (
        <SideBarContainer>
            <GridContainer>
                <DisplayBlock label="Height" value="180 cm" />
                <DisplayBlock label="Weight" value="75 kg" />
                <DisplayBlock label="BMI" value="23.1" />
                <DisplayBlock label="BMR" value="1500 kcal" />
            </GridContainer>
            {/* <CalendarContainer>
                <Calendar onChange={setDate} value={date} />
            </CalendarContainer> */}
        </SideBarContainer>
    );
}

export default SideBar;
