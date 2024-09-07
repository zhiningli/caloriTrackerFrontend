import styled from 'styled-components';

export const TimePickerWrapper = styled.div`
    flex: 1; /* This allows the TimePicker to take equal space */
    position: relative;
    margin-bottom: 25px;
`;

export const TimePickerLabel = styled.label`
    color: ${props => props.theme.colorPandaBrown};
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
`;

export const TimePickerField = styled.select`
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${props => props.theme.colorFurRed};
    border-radius: 5px;
    width: 100%;
    background-color: white; 
    background-position: right 10px center;
    background-size: 12px;
`;

export const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    position: absolute;
    top: 90%;
    left: 0;
    margin-top: 5px;
`;
