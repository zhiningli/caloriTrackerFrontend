import React from "react";
import { HeaderContainerDiv, HeaderItemDiv, HeaderLabel } from "./Header.styles";


function Header() {
    return(
        <HeaderContainerDiv>
            <HeaderItemDiv>
                Placeholder for header options
                <br />
                <HeaderLabel>Hello World</HeaderLabel>
            </HeaderItemDiv>
            <HeaderItemDiv>
                Placeholder for hear options
                <br/>  
                <HeaderLabel>How are you</HeaderLabel>
            </HeaderItemDiv>
        </HeaderContainerDiv>
    )
};

export default Header;