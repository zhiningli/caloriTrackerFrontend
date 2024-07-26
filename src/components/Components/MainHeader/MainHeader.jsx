import React from 'react';
import { MainHeaderContainer, MainHeaderTitleContainer, MainHeaderTypography } from './MainHeader.styles';

function MainHeader(){
    return(
        <div>
            <MainHeaderContainer>
                <MainHeaderTitleContainer>
                    This is the main header where I will put a logo
                    <MainHeaderTypography>Calorie Tracker</MainHeaderTypography>
                </MainHeaderTitleContainer>
                <MainHeaderTitleContainer>
                    Hello, user, hope you have had a great day!
                </MainHeaderTitleContainer>
            </MainHeaderContainer>
        </div>
    )
}

export default MainHeader;