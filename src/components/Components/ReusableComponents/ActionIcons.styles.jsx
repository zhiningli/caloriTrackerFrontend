import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RowActionTooltip = styled.span`
    visibility: hidden;
    color: ${props => props.theme.colorFurRed};
    font-size: 12px;
    text-align: center;
    padding: 1px;
    bottom: 0%;
    right: 100%;
    z-index: 10;
    position: absolute;
    word-wrap: break-word;
`

export const RowActionButton = styled.button`
    background: transparent;
    border: none;
`

export const RowActionIcon = styled(FontAwesomeIcon)`
    font-size: 20px;
    color: ${props => props.theme.colorFurRed};
`

export const RowActionButtonContainer = styled.span`
    position: relative;
    display: inline-block;

    &:hover ${RowActionTooltip}{
        visibility: visible;
    }

    &:hover ${RowActionButton}{
        color: ${props => props.theme.colorIvory};
        cursor: pointer;
    }

    &:hover ${RowActionButton}:not(:disabled) ${RowActionIcon}{
        color: ${props => props.theme.colorPandaBrown};
    }

`