import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    height: calc(100vh - 90px); /* Adjusting to fill the screen */
`;

export const MainContainer = styled.div`
    flex-grow: 1;
    background-color: ${props => props.theme.colorSoftWhite}; /* Using theme property */
    display: flex;
    flex-direction: column;
`;

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${props => props.theme.colorIvory}; /* Example: Using theme property */
`;
