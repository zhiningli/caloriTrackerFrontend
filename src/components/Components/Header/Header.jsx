import React from "react";
import { HeaderContainerDiv, HeaderItemDiv, HeaderLabel } from "./Header.styles";


function Header() {
    return(
        <HeaderContainerDiv>
            <HeaderItemDiv>
                This is the header
                <br />
                <HeaderLabel>Hello World</HeaderLabel>
            </HeaderItemDiv>
        </HeaderContainerDiv>
    )
};

export default Header;