import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../MainHeader/MainHeader.jsx';
import Header from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import { MainContainer, Wrapper } from './Layout.styles';

function Layout() {
    return (
        <div>
            <MainHeader />
            <Header />
            <Wrapper>
                <SideBar />
                <MainContainer>
                    <Outlet /> {/* This is where the child routes will be rendered */}
                </MainContainer>
            </Wrapper>
        </div>
    );
}

export default Layout;
