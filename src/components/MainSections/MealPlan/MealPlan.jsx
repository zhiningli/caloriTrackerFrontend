import React from 'react';
import { useParams } from 'react-router-dom';
import { MainSectionContainer, MealSectionContainer } from '../MainSection.sytle';
import Title from '../Title/Title';
import Button from '../../Reusable Components/Button';
import MealList from '../../../containers/MealList'; 

function MealPlan() {
    const { slug } = useParams();

    return (
        <MainSectionContainer>
            <div className='Calorie Indicator'/>
            <Title title="MealPlan for">{slug}</Title>
            <MealSectionContainer>
                <MealList />  {/* This will render all the MealPlanComponents based on the fetched data */}
                <br />
                <Button className='action-button' ButtonLabel="Create / Record New Meals" />
            </MealSectionContainer>
        </MainSectionContainer>
    );
}

export default MealPlan;
