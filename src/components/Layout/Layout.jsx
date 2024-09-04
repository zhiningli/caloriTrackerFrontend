import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../MainHeader/MainHeader.jsx';
import Header from '../Header/Header.jsx';
// import SideBar from '../SideBar/SideBar.jsx';
import { LayoutContainer, MainContainer, Wrapper } from './Layout.styles.jsx';

function Layout() {
    return (
        <LayoutContainer>
            <MainHeader />
            <Header />
            <Wrapper>
                <MainContainer>
                    <Outlet /> {/* This is where the child routes will be rendered */}
                </MainContainer>
            </Wrapper>
        </LayoutContainer>
    );
}

export default Layout;
