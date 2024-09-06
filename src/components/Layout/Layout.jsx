import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import MainHeader from '../MainHeader/MainHeader.jsx';
import Header from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import { LayoutContainer, MainContainer, Wrapper } from './Layout.styles.jsx';

function Layout() {
    const { slug } = useParams();

    return (
        <LayoutContainer>
            <MainHeader />
            <Header />
            <Wrapper>
                <SideBar slug={slug} />
                <MainContainer>
                    <Outlet /> 
                </MainContainer>
            </Wrapper>
        </LayoutContainer>
    );
}

export default Layout;
