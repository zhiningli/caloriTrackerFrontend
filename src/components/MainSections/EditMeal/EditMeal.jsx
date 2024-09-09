import React from 'react';
import { MainSectionContainer } from '../MainSection.style';
import { CreateMealHeader, CreateMealSection, CreateMealSubSection } from './EditMeal.styled';
import CreateMealForm from './CreateMealForm/CreateMealForm';
import MealDisplayColumn from './MealDisplayColumn/MealDisplayColumn';

function EditMeal( ) {

    return (
        <MainSectionContainer>
            <CreateMealHeader>
                <h2>Create your meal here</h2>
                <h2>Here also should have the option of choosing date</h2>
            </CreateMealHeader>
            <CreateMealSection>
                <CreateMealSubSection>
                    <CreateMealForm/>
                </CreateMealSubSection>
                <CreateMealSubSection>
                    <MealDisplayColumn/>    
                </CreateMealSubSection>
            </CreateMealSection>
        </MainSectionContainer>
    );
}

export default EditMeal;