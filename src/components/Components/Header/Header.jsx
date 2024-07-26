import React from "react";
import { HeaderContainerDiv, HeaderItemDiv, HeaderLabel } from "./Header.styles";


function Header() {
    return(
        <HeaderContainerDiv>
            <HeaderItemDiv>
                This is the header
                <br />
            </HeaderItemDiv>
            <HeaderItemDiv>
                <HeaderLabel>Here I will place some menu for logout, directory to other pages</HeaderLabel>
            </HeaderItemDiv>        
        </HeaderContainerDiv>
    )
};

export default Header;