import React from 'react';
import PieChartComponent from '../../../Reusable Components/Charts/PieChart/PieChartComponent';
import { NutritionDashboardTitle, DashboardGadgetBlock, ChartContainer, MealPlanDashBoardContainer, GadgetContainer, TileContainer, TileRow, Icon, TileValue, TileTitle, TileUnit} from './MealPlanDashboard.styles';
import {faFire, faDrumstickBite, faBottleDroplet, faWheatAwn} from '@fortawesome/free-solid-svg-icons';

const MealPlanDashboard = ({ proteins, fats, carbs, calories }) => {

    const totalCalorieRequirement = 2000;
    const totalProteinsRequirement = 70;
    const totalFatsRequirement = 60;
    const totalCarbsRequirement = 150;

    proteins = proteins.toFixed(2);
    fats = fats.toFixed(2);
    carbs = carbs.toFixed(2);
    calories = calories.toFixed(2);

    const calorieData = [
        { name: 'Consumed', value: parseFloat(calories) },
        { name: 'Remaining', value: parseFloat(totalCalorieRequirement - calories) },
      ];
      
    const proteinData = [
    { name: 'Consumed', value: parseFloat(calories) },
    { name: 'Remaining', value: parseFloat(totalProteinsRequirement - proteins) },
    ];

    const fatsData = [
        { name: 'Consumed', value: parseFloat(calories) },
        { name: 'Remaining', value: parseFloat(totalFatsRequirement - fats) },
        ];

    const carbsData = [
        { name: 'Consumed', value: parseFloat(calories) },
        { name: 'Remaining', value: parseFloat(totalCarbsRequirement - carbs) },
        ];

    return (
        <MealPlanDashBoardContainer>
            <NutritionDashboardTitle>Your Daily Nutritional Goal</NutritionDashboardTitle>
            <DashboardGadgetBlock>
            <GadgetContainer>
                <TileContainer>
                    <Icon icon={faFire} />
                    <TileRow>
                        <TileTitle>Calories</TileTitle>
                    </TileRow>
                    <TileRow>
                        <TileValue>{calories}</TileValue>
                        <TileUnit>kcal</TileUnit>
                    </TileRow>
                </TileContainer>
                <ChartContainer>
                    <PieChartComponent data={calorieData} width={120} height={120} />
                </ChartContainer>
            </GadgetContainer>

            <GadgetContainer>
                <TileContainer>
                    <Icon icon={faDrumstickBite} />
                    <TileRow>
                        <TileTitle>Proteins</TileTitle>
                    </TileRow>

                    <TileRow>
                        <TileValue>{proteins}</TileValue>
                        <TileUnit>grams</TileUnit>
                    </TileRow>

                </TileContainer>
                <ChartContainer>
                    <PieChartComponent data={proteinData} width={120} height={120} />
                </ChartContainer>
            </GadgetContainer>

            <GadgetContainer>
                <TileContainer>
                    <Icon icon={faBottleDroplet} />
                    <TileRow>
                        <TileTitle>Fats</TileTitle>
                    </TileRow>

                    <TileRow>
                        <TileValue>{fats}</TileValue>
                        <TileUnit>grams</TileUnit>
                    </TileRow>

                </TileContainer>
                <ChartContainer>
                    <PieChartComponent data={fatsData} width={120} height={120} />
                </ChartContainer>
            </GadgetContainer>

            <GadgetContainer>
                <TileContainer>
                    <Icon icon={faWheatAwn} />
                    <TileRow>
                        <TileTitle>Carbs</TileTitle>
                    </TileRow>
                    <TileRow>
                        <TileValue>{carbs}</TileValue>
                        <TileUnit>grams</TileUnit>
                    </TileRow>
                </TileContainer>
                <ChartContainer>
                    <PieChartComponent data={carbsData} width={120} height={120} />
                </ChartContainer>
            </GadgetContainer>
            </DashboardGadgetBlock>

        </MealPlanDashBoardContainer>
    );
};

export default MealPlanDashboard;
