import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
    flex: 1; 
    position: relative;
    margin-bottom: 25px;
`;

export const DatePickerLabel = styled.label`
    color: ${props => props.theme.colorPandaBrown};
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
`;

export const DatePickerField = styled.div`
    .react-datepicker-wrapper {
        width: 100%;
    }

    .react-datepicker__input-container {
        input {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid ${props => props.theme.colorFurRed};
            border-radius: 5px;
            box-sizing: border-box;
        }
    }

    .react-datepicker-popper {
        z-index: 2;
    }
`;

export const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 5px;
`;
