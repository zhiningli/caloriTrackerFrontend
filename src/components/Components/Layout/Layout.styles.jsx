import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    height: calc(100vh - 90px); /* Adjusting to fill the screen */
`;

export const MainContainer = styled.div`
    flex-grow: 1;
    padding: 20px;
    background-color: ${props => props.theme.colorSoftWhite}; /* Using theme property */
    display: flex;
    flex-direction: column;
`;
