import React from 'react';
import { MainSectionContainer, MealSectionContainer, Divider } from '../MainSection.sytle';
import Title from '../Title/Title';
import Button from '../../Reusable Components/Button';
import MealPlanComponent from './MealPlanComponents/MealPlanComponent/MealPlanComponent';
import DailyIndicatorComponent from './MealPlanComponents/DailyIndicatorComponent/DailyIndicatorComponent';

function MealPlan() {
    return (
        <MainSectionContainer>
            <DailyIndicatorComponent calorie={2000} protein={150} fat={70} carbs={250} />
            <Title title="MealPlan" />
            <MealSectionContainer>
                <MealPlanComponent name='Kebab' remark='Dinner' ingredients={['Doner', 'Lettuce', 'Tomato', 'Naan Bread']} protein={40} fat={40} carbs={40} calories={600} />
                <Divider />
                <MealPlanComponent name='Salad' remark='Lunch' ingredients={['Lettuce', 'Tomato', 'Naan Bread']} protein={15} fat={3} carbs={40} calories={300} />
                <Divider />
                <br />
                <Button className='action-button' ButtonLabel="Create / Record New Meals" />
            </MealSectionContainer>
        </MainSectionContainer>
    );
}

export default MealPlan;
