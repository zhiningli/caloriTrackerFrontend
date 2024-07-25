import React from 'react';
import DisplayBlock from '../atom/DisplayBlock';
import { SideBarContainer, GridContainer } from './SideBar.style';

function SideBar() {
    return (
        <SideBarContainer>
            <GridContainer>
                <DisplayBlock label="Height" value="180 cm" />
                <DisplayBlock label="Weight" value="75 kg" />
                <DisplayBlock label="BMI" value="23.1" />
                <DisplayBlock label="BMR" value="1500 kcal" />
            </GridContainer>
            <div>
                <p>Target Calorie for the day: 2000 kcal</p>
                <p>Current Calorie for the day: 1500 kcal</p>
            </div>
        </SideBarContainer>
    );
}

export default SideBar

