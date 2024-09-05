import React, { useState } from 'react';
import { 
    MealPlanContainer, 
    DetailTile, 
    NameSection, 
    IngredientSection, 
    NutritionSection, 
    NutritionBlock, 
    CalorieTile, 
    ActionComponentTile 
} from './MealPlanComponent.styles';

const MealPlanComponent = ({ name, ingredients, protein, fat, carbs, calories }) => {
    const [isGrams, setIsGrams] = useState(true);

    const toggleUnits = () => {
        setIsGrams(!isGrams);
    };

    return (
        <MealPlanContainer>
            <DetailTile>
                <NameSection>
                    Name: {name}
                </NameSection>
                <IngredientSection>
                    Ingredients: {ingredients.join(', ')}
                </IngredientSection>
                <NutritionSection>
                    <NutritionBlock onClick={toggleUnits}>
                        <div className="label">Protein</div>
                        <div className="value">{isGrams ? `${protein}g` : `${(protein / 2000 * 100).toFixed(1)}%`}</div>
                    </NutritionBlock>
                    <NutritionBlock onClick={toggleUnits}>
                        <div className="label">Fat</div>
                        <div className="value">{isGrams ? `${fat}g` : `${(fat / 2000 * 100).toFixed(1)}%`}</div>
                    </NutritionBlock>
                    <NutritionBlock onClick={toggleUnits}>
                        <div className="label">Carbs</div>
                        <div className="value">{isGrams ? `${carbs}g` : `${(carbs / 2000 * 100).toFixed(1)}%`}</div>
                    </NutritionBlock>
                </NutritionSection>
            </DetailTile>
            <CalorieTile>
                Calories: {calories} kCal
            </CalorieTile>
            <ActionComponentTile>
                Action Icons
            </ActionComponentTile>
        </MealPlanContainer>
    );
};

export default MealPlanComponent;
