import React, { useState } from 'react';
import {faPlus, faEdit, faTrash, faXmark } from '@fontawesome/free-solid-svg-icons';
import { RowActionButtonContainer, RowActionButton, RowActionIcon, RowActionTooltip } from './ActionIcons.styles';

const getIcons = (actionName) =>{
    const Icons = {
        'plus': faPlus,
        'edit': faEdit,
        'delete': faTrash 
    }
    return Icons[actionName] || faXmark
}

const getToolTipMessages = (actionName, disabled) => {
    const ToolTipMessages = {
        'plus': 'Expand to show details',
        'edit': 'Edit meal',
        'delete': 'Delete meal',
        'disabled': 'Disabled Icon'
    };
    if (disabled) {
        return ToolTipMessages['disabled']
    }

    return ToolTipMessages[actionName] || 'This icon does not exists'
}

const ActionIcons = (agParams) => {

    const {rowActions} = agParams;
    
    const createIcon = (actionName) => {
        const action = rowActions[actionName]
        const [isHover, setHover] = useState(false);
        let buttonProps = action.props;
    

        if (action.setProps){
            buttonProps = {...action.setProps(actionName, action.props, agParams)};
        }

        if (buttonProps.hidden){
            return null;
        }

        const icon = getIcons[actionName];
        const toolTipMessage = getToolTipMessages[actionName];

        return (
            <RowActionButtonContainer 
                className={`${actionName}-action-icon`}
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)}
            >
                <RowActionButton
                    id = {`${actionName}-button-${rowActions.id}`}
                    onClick = {(evt) => action.funcs.onClick(agParams, evt)}
                    {...buttonProps}
                >
                    <RowActionIcon disabled={buttonProps.disabled} icon = {icon}/>
                </RowActionButton>
                <RowActionTooltip>
                    {toolTipMessage}
                </RowActionTooltip>
            </RowActionButtonContainer> 
        );
    }

    const renderButtons = (rowActions) => {
        const actionNames = Object.keys[rowActions];
        const buttons = []

        for (let i=0; i < actionNames.length; i++){
            const actionName = actionName[i];
            const buttonElement = createIcon(actionName);
            if (!buttonElement) continue;

            buttons.push(
                <span key={i} style = {{marginLeft: i<Object.keys[rowActions].length ? '12px': '0'}}>
                    {buttonElement}
                </span>
            )
        }
        return buttons;
    }

    return <div align='right'>{renderButtons(rowActions)}</div>
}