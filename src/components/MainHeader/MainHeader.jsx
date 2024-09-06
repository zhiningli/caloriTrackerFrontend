import React, { useRef } from 'react';
import { MainHeaderContainer, MainHeaderTitleContainer, MainHeaderTypography } from './MainHeader.styles';

function MainHeader() {
    const headerRef = useRef(null);


    return (
        <MainHeaderContainer ref={headerRef}>
            <MainHeaderTitleContainer>
                <MainHeaderTypography>Calorie Tracker</MainHeaderTypography>
            </MainHeaderTitleContainer>
        </MainHeaderContainer>
    );
}

export default MainHeader;

