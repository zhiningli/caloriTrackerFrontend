import React from 'react';
import { SideBarContainer } from './SideBar.style';

function SideBar (){
    return (
        <SideBarContainer>
            This is a place holder to display health info
            <br />
            Height, Weight, BMI, Basic Metabolic Rate,
            <br />
            Target Calorie for the day
            <br />
            Current Calorie for the day
        </SideBarContainer>
    )
};

export default SideBar;

