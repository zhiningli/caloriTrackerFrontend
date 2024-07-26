import React from 'react';
import {MainSectionContainer, SectionContainer } from '../MainSection.sytle';
import Title from '../Title/Title';
import Button from '../../atom/Button';

function MealPlan(){
    return(
        <MainSectionContainer>
            <Title title="MealPlan"/>
            <SectionContainer>
                This is the section where recorded meal plan will display
                <br />
                MealPlan for today
                <br />
                You have no meal planned for today. Wanna create one? 
                <br/>
                <Button className='action-button' ButtonLabel="Create / Record New Meals">
                </Button>
            
            </SectionContainer>

            <SectionContainer>
                What is on your mind?
            </SectionContainer>
        </MainSectionContainer>
    )
}

export default MealPlan;