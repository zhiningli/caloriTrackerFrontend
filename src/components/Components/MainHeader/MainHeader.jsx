import React from 'react';
import { MainHeaderContainer, MainHeaderTitleContainer, MainHeaderTypography } from './MainHeader.styles';

function MainHeader(){
    return(
        <div>
            <MainHeaderContainer>
                <MainHeaderTitleContainer>
                    Calorie Tracker
                    <MainHeaderTypography>This is a decorator for the text</MainHeaderTypography>
                </MainHeaderTitleContainer>
            </MainHeaderContainer>
        </div>
    )
}

export default MainHeader;