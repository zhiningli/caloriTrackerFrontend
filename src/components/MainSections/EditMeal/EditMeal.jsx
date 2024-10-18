import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MainSectionContainer } from '../MainSection.style';
import { CreateMealHeader, CreateMealSection, CreateMealSubSection, CreateMealCalendarSection } from './EditMeal.styled';
import CreateMealForm from './CreateMealForm/CreateMealForm';
import MealDisplayColumn from './MealDisplayColumn/MealDisplayColumn';
import CalendarRow from './CalendarRow/CalendarRow';
import MealPlanSummaryBoard from './HeaderComponents/MealPlanSummaryBoard/MealPlanSummaryBoard';
import MealPlanStatistics from './HeaderComponents/MealPlanStatistics/MealPlanStatistics';

function EditMeal() {

    const currentMeals = useSelector((state) => state.meals.currentMeals);
    const newMeals = useSelector((state) => state.meals.newMeals);
    const deleteMeals = useSelector((state) => state.meals.deleteMeals);
    const updatedMeals = useSelector((state)=> state.meals.updatedMeals)
    const slug = useSelector((state) => state.user.slug);
    const token = useSelector((state) => state.user.token);

    const [selectedMealId, setSelectedMealId] = useState(null);
    
    const selectedMeal = currentMeals.concat(newMeals, deleteMeals, updatedMeals).find((meal) => meal.id === selectedMealId);

    const handleTicketClick = (id) => {
        setSelectedMealId(id); 
    };

    return (
        <MainSectionContainer>
            <CreateMealHeader>
                <MealPlanSummaryBoard/>
                <MealPlanStatistics/>
            </CreateMealHeader>
            <CreateMealCalendarSection>
                <CalendarRow/>
            </CreateMealCalendarSection>

            <CreateMealSection>
                <CreateMealSubSection>
                    <CreateMealForm 
                        selectedMeal={selectedMeal} 
                        currentMeals={currentMeals} 
                        newMeals={newMeals} 
                        updatedMeals={updatedMeals}
                        deleteMeals={deleteMeals}
                        slug={slug} 
                        token={token} />
                </CreateMealSubSection>

                <CreateMealSubSection>
                    <MealDisplayColumn 
                        currentMeals={currentMeals} 
                        newMeals={newMeals} 
                        deleteMeals={deleteMeals} 
                        updatedMeals={updatedMeals}
                        onTicketClick={handleTicketClick} 
                    />
                </CreateMealSubSection>
            </CreateMealSection>
        </MainSectionContainer>
    );
}

export default EditMeal;
