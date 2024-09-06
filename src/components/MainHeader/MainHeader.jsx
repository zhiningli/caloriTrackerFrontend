import React, { useRef } from 'react';
import { MainHeaderContainer, MainHeaderTitleContainer} from './MainHeader.styles';
import Logo from '../Media/Logo.png';

function MainHeader() {
    const headerRef = useRef(null);


    return (
        <MainHeaderContainer ref={headerRef}>
            <MainHeaderTitleContainer>
                <img src={Logo} alt="Calorie Tracker Logo" style={{ height: '66px' }} />
            </MainHeaderTitleContainer>
        </MainHeaderContainer>
    );
}

export default MainHeader;

