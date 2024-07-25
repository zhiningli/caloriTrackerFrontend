import React from "react";
import { TitleContainer, TitleLabel } from "./Title.style";


function Title({ title }) {
    return (
        <TitleContainer id="section-title-container">
            <div>
                <TitleLabel id="section-title">{title}</TitleLabel>
            </div>
        </TitleContainer>
    );
}

export default Title;