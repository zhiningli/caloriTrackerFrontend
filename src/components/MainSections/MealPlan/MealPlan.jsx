import React from 'react';
import { useParams } from 'react-router-dom';
import { MainSectionContainer, MealSectionContainer } from '../MainSection.sytle';
import Button from '../../Reusable Components/Button';
import MealList from '../../../containers/MealList';
import MealPlanDashboardContainer from '../../../containers/MealPlanDashBoardContainer';

function MealPlan() {
    const { slug } = useParams();

    return (
        <MainSectionContainer>
            <MealPlanDashboardContainer/>
            <MealSectionContainer>
                <MealList /> 
                <br />
                <Button className='action-button' ButtonLabel="Create / Record New Meals" />
            </MealSectionContainer>
        </MainSectionContainer>
    );
}

export default MealPlan;
