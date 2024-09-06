import React from 'react';
import { DashboardContainer, MealPlanSubContainer, MealPlanContainer } from '../MainSection.sytle';
import MealList from '../../../containers/MealList';
import NutritionDashboardContainer from '../../../containers/NutritionDashBoardContainer';

function Dashboard() {

    return (
        <DashboardContainer>
            <NutritionDashboardContainer/>
            <MealPlanContainer>
                <MealPlanSubContainer>
                    <MealList /> 
                </MealPlanSubContainer>
                <MealPlanSubContainer>
                    <MealList /> 
                </MealPlanSubContainer>
            </MealPlanContainer>
        </DashboardContainer>
    );
}

export default Dashboard;
