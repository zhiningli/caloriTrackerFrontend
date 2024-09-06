import React from 'react';
import { MainSectionContainer} from '../MainSection.sytle';
import { MealPlanSubContainer, MealPlanContainer } from './Dashboard.styles';
import MealList from '../../../containers/MealList';
import NutritionDashboardContainer from '../../../containers/NutritionDashBoardContainer';

function Dashboard() {

    return (
        <MainSectionContainer>
            <NutritionDashboardContainer/>
            <MealPlanContainer>
                <MealPlanSubContainer>
                    <MealList /> 
                </MealPlanSubContainer>
                <MealPlanSubContainer>
                    <MealList /> 
                </MealPlanSubContainer>
            </MealPlanContainer>
        </MainSectionContainer>
    );
}

export default Dashboard;
