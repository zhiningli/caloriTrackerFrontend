import React from 'react';
import PieChartComponent from '../../../Reusable Components/Charts/PieChart/PieChartComponent';
import { ChartContainer, MealPlanDashBoardContainer, SectionContainer, TileContainer, Tile} from './MealPlanDashboard.styles';

const MealPlanDashboard = ({ proteins, fats, carbs, calories }) => {

    const totalCalorieRequirement = 2000;

    proteins = proteins.toFixed(0);
    fats = fats.toFixed(2);
    carbs = carbs.toFixed(2);
    calories = calories.toFixed(2);

    const data = [
        { name: 'Consumed', value: parseFloat(calories) },
        { name: 'Remaining', value: parseFloat(totalCalorieRequirement - calories) },
      ];

    return (
        <MealPlanDashBoardContainer>
            <SectionContainer>
                <ChartContainer>
                    <PieChartComponent data={data} width={180} height={125} />
                </ChartContainer>
                <TileContainer>
                        <Tile>
                            <h2>{calories} kcal</h2>
                            <p>Calories</p>
                        </Tile>
                        <Tile>
                            <h2>{proteins} g</h2>
                            <p>Proteins</p>
                        </Tile>
                        <Tile>
                            <h2>{fats} g</h2>
                            <p>Fats</p>
                        </Tile>
                        <Tile>
                            <h2>{carbs} g</h2>
                            <p>Carbs</p>
                        </Tile>
                </TileContainer>
            </SectionContainer>
            <SectionContainer/>
        </MealPlanDashBoardContainer>
    );
};

export default MealPlanDashboard;
