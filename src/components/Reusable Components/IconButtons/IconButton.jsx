import React from 'react';
import { TransparentButton, Icon } from './IconButton.styles';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const IconLibrary = {
    'edit': faEdit,
    'add': faPlus,
    'delete': faTrash, 
}

export const IconButton = ({ iconName , onClick, disabled = false }) => {
        const SelectedIcon = IconLibrary[iconName]

    return (
        <TransparentButton type="button" onClick={onClick} disabled={disabled}>
            <Icon icon={SelectedIcon} />
        </TransparentButton>
        )
}

export default IconButton;