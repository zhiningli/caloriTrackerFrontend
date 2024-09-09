import React from 'react';
import { MealDisplayColumnContainer } from './MealDisplayColumn.styles';
import MealTicket from './MealTicket/MealTicket';


const MealDisplayColumn = () => {
    return (
        <MealDisplayColumnContainer>
            I should display a column of the meal of the day, something similar to a JIRA ticket column?
            <MealTicket
                name = {"Doner Kebab"}
                category={"Breakfast"}
                calories={300}
                ingredients={["Beef", "Egg", "Salad"]}
            />
            <MealTicket
                name = {"Doner Kebab"}
                category={"Breakfast"}
                calories={300}
                ingredients={["Beef", "Egg", "Salad"]}
            />
            <MealTicket
                name = {"Doner Kebab"}
                category={"Breakfast"}
                calories={300}
                ingredients={["Beef", "Egg", "Salad"]}
            />
        </MealDisplayColumnContainer>

    )
}

export default MealDisplayColumn;