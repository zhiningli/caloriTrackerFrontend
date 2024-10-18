import React from 'react';

const MealPlanSummaryBoard = ({date}) => {


    return (
        <div>
            <h3>Showing mealplans for week of {date} </h3>
            <h4>Well done, you are on track of hitting your calorie goal!</h4>
        </div>
    );
};

export default MealPlanSummaryBoard;