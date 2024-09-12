import { ThemedDropdownItem } from "./DropdownItem.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categoryIconMap } from "../../CategoryIcons/CategoryIconMap";

export const DropdownItem = ({ category, label, onClick }) => {
    const { icon, color } = categoryIconMap[category] || {};

    return (
        <ThemedDropdownItem onClick={onClick} style={{ display: 'flex', alignItems: 'center', padding: '10px', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={icon} style={{ marginRight: '8px', color: color }} />
            {label}
        </ThemedDropdownItem>
    );
};
