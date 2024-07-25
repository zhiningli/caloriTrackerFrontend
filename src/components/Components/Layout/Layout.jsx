import React, { useState } from 'react';
import MainHeader from '../MainHeader/MainHeader.jsx';
import Header from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import { Outlet } from 'react-router';
import { MainContainer, Wrapper } from './Layout.styles';

function Layout(){
    
    return (
        <div>
            <MainHeader/>
            <Header />
            <Wrapper>
                <SideBar/>
                <MainContainer>
                    How are you doing today
                    <Outlet/>
                </MainContainer>
            </Wrapper>
        </div>
    );
}

export default Layout;