import styled from 'styled-components';

export const DailyIndicatorContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: ${props => props.theme.colorDeepTerracotta};
    text-align: center;
`;

export const DailyIndicator = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23%;
    height:80%;
    
    .label {
        margin-top: 5px;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    
    .value {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const IndicatorDivider = styled.div`
    width: 3%;
    height: 100%;
    background-color: ${props => props.theme.colorPandaBrown};
    margin: 0 15px; /* Adjust the spacing between indicators */
`;
