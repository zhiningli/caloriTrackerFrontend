import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MainSectionContainer } from '../MainSection.style';
import { CreateMealHeader, CreateMealSection, CreateMealSubSection, CreateMealCalendarSection, MealTicketDisplaySection } from './EditMeal.styled';
import CreateMealForm from './CreateMealForm/CreateMealForm';
import MealDisplayColumn from './MealDisplayColumn/MealDisplayColumn';
import CalendarRow from './CalendarRow/CalendarRow';
import MealPlanSummaryBoard from './HeaderComponents/MealPlanSummaryBoard/MealPlanSummaryBoard';
import MealPlanStatistics from './HeaderComponents/MealPlanStatistics/MealPlanStatistics';
import { formatDate } from '../../../utils/dateUtil';
import { addWeeks, subWeeks } from 'date-fns';

function EditMeal() {


    const [selectedDate, setSelectedDate] = useState(new Date())
    const formattedDate = formatDate(selectedDate);

    const slug = useSelector((state) => state.user.slug);
    const token = useSelector((state) => state.user.token);

    const currentMeals = useSelector(state => state.meals.currentMeals);
    const newMeals = useSelector(state => state.meals.newMeals);
    const deleteMeals = useSelector(state => state.meals.deleteMeals);
    const updatedMeals = useSelector(state => state.meals.updatedMeals);

    const [selectedMealId, setSelectedMealId] = useState(null);

    
    const selectedMeal = currentMeals.concat(newMeals, deleteMeals, updatedMeals).find((meal) => meal.id === selectedMealId);

    const handleTicketClick = (id) => {
        setSelectedMealId(id); 
    };

    const handlePreviousWeek = () => {
        setSelectedDate(subWeeks(selectedDate, 1));
    };

    const handleNextWeek = () => {
        setSelectedDate(addWeeks(selectedDate, 1));
    };

    return (
        <MainSectionContainer>
            <CreateMealHeader>
                <MealPlanSummaryBoard date={formattedDate}/>
                <MealPlanStatistics/>
            </CreateMealHeader>
            <button onClick={handlePreviousWeek}> Previous Week </button>
            <button onClick={handleNextWeek}> Next Week </button>
            <CreateMealCalendarSection>
                <CalendarRow date={formattedDate}/>
            </CreateMealCalendarSection>

            <CreateMealSection>
                <CreateMealSubSection>
                    <CreateMealForm 
                        date={formattedDate}
                        selectedMeal={selectedMeal} 
                        currentMeals={currentMeals} 
                        newMeals={newMeals} 
                        updatedMeals={updatedMeals}
                        deleteMeals={deleteMeals}
                        slug={slug} 
                        token={token} />
                </CreateMealSubSection>

                <MealTicketDisplaySection>
                    <MealDisplayColumn
                        date = {formattedDate} 
                        currentMeals={currentMeals} 
                        newMeals={newMeals} 
                        deleteMeals={deleteMeals} 
                        updatedMeals={updatedMeals}
                        onTicketClick={handleTicketClick} 
                    />
                </MealTicketDisplaySection>
            </CreateMealSection>
        </MainSectionContainer>
    );
}

export default EditMeal;
