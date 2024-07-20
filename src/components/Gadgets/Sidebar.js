import React, { useState } from "react";
import './Sidebar.css';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
        setCollapsed(!collapsed);
    };


    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <button className="collapse-button" onClick={handleCollapse}>
                {collapsed ? '>>' : '<<'}
            </button>
            {!collapsed && (
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