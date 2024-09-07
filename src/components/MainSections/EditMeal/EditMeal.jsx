import React from 'react';
import { MainSectionContainer } from '../MainSection.sytle';
import { CreateMealHeader, CreateMealSection, CreateMealSubSection } from './EditMeal.styled';
import CreateMealForm from './CreateMealForm/CreateMealForm';

function EditMeal() {

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
                <CreateMealSubSection>This section display the current meal plan for today</CreateMealSubSection>
            </CreateMealSection>
        </MainSectionContainer>
    );
}

export default EditMeal;