import styled from 'styled-components';

export const MainHeaderContainer = styled.div`
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    background-color: ${props => props.theme.colorSoftWhite}; /* Using theme property */
`;

export const MainHeaderTitleContainer = styled.div`
    height: 66px;
`;

export const MainHeaderTypography = styled.span`
    font-size: 30px;
    color: ${props => props.theme.primaryColor}; /* Example: Using theme property for text color */
`;
