import React from 'react';
import { DailyIndicator, DailyIndicatorContainer, IndicatorDivider } from './DailyIndicatorComponent.style';

const DailyIndicatorComponent = ({ calorie, protein, fat, carbs }) => {
    return (
        <DailyIndicatorContainer>
            <DailyIndicator>
                <div className="label">Calories (actual/planned/target)</div>
                <div className="value">{calorie}</div>
            </DailyIndicator>
            <IndicatorDivider/>
            <DailyIndicator>
                <div className="label">Proteins (actual/planned/target)</div>
                <div className="value">{protein}</div>
            </DailyIndicator>
            <IndicatorDivider/>
            <DailyIndicator>
                <div className="label">Fats (actual/planned/target)</div>
                <div className="value">{fat}</div>
            </DailyIndicator>
            <IndicatorDivider/>
            <DailyIndicator>
                <div className="label">Carbs (actual/planned/target)</div>
                <div className="value">{carbs}</div>
            </DailyIndicator>
        </DailyIndicatorContainer>
    );
};

export default DailyIndicatorComponent;
