import React from 'react';
import { Divider, MainSectionContainer, MealSectionContainer } from '../MainSection.sytle';
import Title from '../Title/Title';
import Button from '../../atom/Button';
import MealPlanComponent from './MealPlanComponents/MealPlanComponent';

function MealPlan() {
    return (
        <MainSectionContainer>
            <div className='Calorie Indicator'/>
            <Title title="MealPlan" />
            <MealSectionContainer>
                <MealPlanComponent name='Kebab' remark='Dinner' ingredients={['Doner', 'Lettuce', 'Tomato', 'Naan Bread']} protein={40} fat={40} carbs={40} calories={600} />
                <Divider/>
                <MealPlanComponent name='Salad' remark='Lunch' ingredients={['Lettuce', 'Tomato', 'Naan Bread']} protein={15} fat={3} carbs={40} calories={300} />
                <Divider/>
                <br />
                <Button className='action-button' ButtonLabel="Create / Record New Meals" />
            </MealSectionContainer>
        </MainSectionContainer>
    );
}

export default MealPlan;
