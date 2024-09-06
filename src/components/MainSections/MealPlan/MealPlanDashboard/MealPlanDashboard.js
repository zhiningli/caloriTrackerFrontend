import React from 'react';
import PieChartComponent from '../../../Reusable Components/Charts/PieChart/PieChartComponent';
import { ChartContainer, MealPlanDashBoardContainer, SectionContainer, TileContainer, Tile, Icon, TileValue, TileUnit} from './MealPlanDashboard.styles';
import {faFire, faDrumstickBite, faBottleDroplet, faWheatAwn} from '@fortawesome/free-solid-svg-icons';

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
                            <TileValue><Icon icon={faFire}/> {calories} kcal</TileValue>
                            <TileUnit>Calories</TileUnit>
                        </Tile>
                        <Tile>
                            <TileValue> <Icon icon={faDrumstickBite}/> {proteins} g</TileValue>
                            <TileUnit>Proteins</TileUnit>
                        </Tile>
                        <Tile>
                            <TileValue> <Icon icon={faBottleDroplet}/> {fats} g</TileValue>
                            <TileUnit>Fats</TileUnit>
                        </Tile>
                        <Tile>
                            <TileValue> <Icon icon={faWheatAwn}/>{carbs} g</TileValue>
                            <TileUnit>Carbs</TileUnit>
                        </Tile>
                </TileContainer>
            </SectionContainer>
            <SectionContainer/>
        </MealPlanDashBoardContainer>
    );
};

export default MealPlanDashboard;
