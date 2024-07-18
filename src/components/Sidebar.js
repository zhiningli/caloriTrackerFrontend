import React, { useState } from "react";
import './Sidebar.css';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSideBar = () => {
        setIsCollapsed(!isCollapsed);
    };


    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="toggle-button" onClick={toggleSideBar}>
                {isCollapsed ? 'Expand' : 'Collapse'}
            </button>

            {!isCollapsed && (
                <>
                    <div className="greeting">
                        <h2>Hello User, how is your day today</h2>
                    </div>
                    <button className="sidebar-button">Meal History</button>
                    <button className="sidebar-button">Change Meal Preference</button>
                </>
            )}
        </div>
    );
};

export default Sidebar;