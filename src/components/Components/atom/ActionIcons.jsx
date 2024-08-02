import React, { useState } from 'react';
import FontAwesomeIcon from '@fontawesome/react-fontawesome';
import { faEdit, faTrash } from '@fontawesome/free-solid-svg-icons';
import styled from 'styled-components';

/* This object holds different rowActions, can be expanded for additional icons in the future */
const rowActions = {
    edit: {
        setProps: BtnSetProps,
        props: {
            disabled: false,
            icon: faEdit,
            tooltipMsg: "This is a placeholder tooltip message for the edit button"
        },
        func: {
            onClick: (agParams, evtSrc) => editAction(agParams, evtSrc)
        }
    },
    delete: {
        setProps: BtnSetProps,
        props: {
            disabled: false,
            icon: faTrash,
            tooltipMsg: "This is a placeholder tooltip message for the delete button"
        },
        func: {
            onClick: (agParams, evtSrc) => deleteAction(agParams, evtSrc)
        }
    }
};

const editAction = (agParams, evtSrc) => {
    alert(`Edit button clicked!: ${agParams.node.id}`);
    console.log("Event source " + evtSrc);
};

const deleteAction = (agParams, evtSrc) => {
    alert(`Delete button clicked: ${agParams.node.id}`);
    console.log("Event source " + evtSrc);
};

const BtnSetProps = (btnProps, agParams) => {
    let props = { ...btnProps };
    return props;
};

const ActionsCellComponent = ({ agParams }) => {
    if (!agParams) {
        return null;
    }

    const { rowActions } = agParams;
    const actionId = 'rowAction-' + rowActions.id;

    const createButton = (actionName) => {
        const action = rowActions[actionName];
        const [isHover, setHover] = useState(false);
        let buttonProps = action.props;
        if (action.setProps) {
            buttonProps = { ...action.setProps(actionName, action.props, agParams) };
        }

        if (buttonProps.disabled) {
            return null;
        }

        return (
            <ButtonContainer
                key={actionName}
                className={`${actionName}-action-components`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <StyledButton
                    isHover={isHover}
                    onClick={(evt) => action.func.onClick(agParams, evt)}
                    {...buttonProps}
                >
                    <FontAwesomeIcon icon={buttonProps.icon} />
                </StyledButton>
                <Tooltip isHover={isHover}>{buttonProps.tooltipMsg}</Tooltip>
            </ButtonContainer>
        );
    };

    return (
        <div id={actionId} align="right">
            {Object.keys(rowActions).map((actionName, index) => {
                const buttonElement = createButton(actionName);
                if (!buttonElement) { return null; }
                return <span key={index} style={{ marginLeft: index < Object.keys(rowActions).length ? '20px' : 0 }}>{buttonElement}</span>;
            })}
        </div>
    );
};

// Styled-components
const ButtonContainer = styled.span`
    position: relative;
    display: inline-block;
    overflow: visible;
`;

const StyledButton = styled.button`
    background: ${(props) => (props.isHover ? props.theme.colorIvory : 'transparent')};
    border: none;
    font-size: 22px;
    color: ${(props) => (props.isHover ? props.theme.colorDarkChocolate : props.theme.colorPandaBrown)};
`;

const Tooltip = styled.span`
    visibility: ${(props) => (props.isHover ? 'visible' : 'hidden')};
    color: ${(props) => props.theme.colorSoftWhite};
    background-color: ${(props) => props.theme.colorPandaBrown};
    font-size: 10px;
    text-align: center;
    padding: 2px;
    bottom: -20%;
    right: 100%;
    z-index: 1;
    position: absolute;
    word-wrap: break-word;
`;

export default ActionsCellComponent;
