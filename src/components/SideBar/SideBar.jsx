import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom'; // Import useNavigate, useLocation, and useParams from react-router-dom
import { SideBarContainer, SideBarTabGroup, SideBarTabTitle, SideBarTab, Icon } from './SideBar.style';
import { faHouse, faBullseye, faPlus, faPenToSquare, faGear, faHeadset, faCircleInfo, faBars } from '@fortawesome/free-solid-svg-icons';

function SideBar() {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const { slug } = useParams(); // Extract slug from URL

    const handleNavigation = (path) => {
        console.log('Navigating to ', `/${slug}${path}`); // Log the full path
        navigate(`/${slug}${path}`); // Ensure slug is part of the path
    };

    return (
        <SideBarContainer isOpen={isOpen}>
            <SideBarTab>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Icon icon={faBars} />
                </button>
            </SideBarTab>

            {isOpen && (
                <>
                    <SideBarTabGroup>
                        <SideBarTab active={location.pathname === `/${slug}/dashboard`}>
                            <Icon icon={faHouse} />
                            <button onClick={() => handleNavigation('/dashboard')}>
                                Meal Dashboard
                            </button>
                        </SideBarTab>
                    </SideBarTabGroup>

                    <SideBarTabGroup>
                        <SideBarTabTitle>Meal</SideBarTabTitle>
                        <SideBarTab active={location.pathname === `/${slug}/nutritionalGoal`}>
                            <Icon icon={faBullseye} />
                            <button onClick={() => handleNavigation('/nutritionalGoal')}>Set Nutritional Goal</button>
                        </SideBarTab>
                        <SideBarTab active={location.pathname === `/${slug}/editMeal`}>
                            <Icon icon={faPlus} />
                            <button onClick={() => handleNavigation('/editMeal')}>Create Meal</button>
                        </SideBarTab>
                    </SideBarTabGroup>

                    <SideBarTabGroup>
                        <SideBarTabTitle>Personal</SideBarTabTitle>
                        <SideBarTab active={location.pathname === `/${slug}/updateHealthData`}>
                            <Icon icon={faPenToSquare} />
                            <button onClick={() => handleNavigation('/updateHealthData')}>Update Health Metric</button>
                        </SideBarTab>
                        <SideBarTab active={location.pathname === `/${slug}/accountSettings`}>
                            <Icon icon={faGear} />
                            <button onClick={() => handleNavigation('/accountSettings')}>Account Setting</button>
                        </SideBarTab>
                    </SideBarTabGroup>

                    <SideBarTabGroup>
                        <SideBarTabTitle>Help</SideBarTabTitle>
                        <SideBarTab active={location.pathname === `/contact`}>
                            <Icon icon={faHeadset} />
                            <button onClick={() => handleNavigation('../contact')}>Contact Us</button>
                        </SideBarTab>
                        <SideBarTab active={location.pathname === `/about`}>
                            <Icon icon={faCircleInfo} />
                            <button onClick={() => handleNavigation('../about')}>About this App</button>
                        </SideBarTab>
                    </SideBarTabGroup>
                </>
            )}
        </SideBarContainer>
    );
}

export default SideBar;

