import React from 'react';
import { MainSectionContainer, SectionContainer } from '../MainSection.sytle';
import Title from '../Title/Title';

function MealPlan(){
    return(
        <MainSectionContainer>
            <Title title="MealPlan"/>
            <SectionContainer>MealPlan for today</SectionContainer>
        </MainSectionContainer>
    )
}

export default MealPlan;