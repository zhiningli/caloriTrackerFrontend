import React, { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { MainHeaderContainer, MainHeaderTitleContainer, MainHeaderTypography } from './MainHeader.styles';

function MainHeader() {
    const headerRef = useRef(null);
    const theme = useTheme();

    useEffect(() => {
        if (headerRef.current) {
            const backgroundColor = getComputedStyle(headerRef.current).backgroundColor;
            console.log('MainHeader background color:', backgroundColor);
            console.log('Theme inside MainHeader:', theme); // Log the theme to ensure it is being passed correctly
        }
    }, [theme]);

    return (
        <MainHeaderContainer ref={headerRef}>
            <MainHeaderTitleContainer>
                <MainHeaderTypography>Calorie Tracker</MainHeaderTypography>
            </MainHeaderTitleContainer>
        </MainHeaderContainer>
    );
}

export default MainHeader;

