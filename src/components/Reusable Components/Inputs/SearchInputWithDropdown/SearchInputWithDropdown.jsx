import React, { useState, forwardRef, useEffect } from 'react';
import { InputLabel, InputField, ErrorMessage, InputWrapper, Dropdown } from './SearchInputWithDropdown.styles';
import { DropdownItem } from './DropdownItem';
import { useFormContext } from 'react-hook-form';
import debounce from 'lodash.debounce';

const SearchTextInputWithDropdown = forwardRef(({
    name,
    label,
    isRequired,
    validationRules,
    fetchSuggestions,
    ...inputProps
}, ref) => {
    const { register, setValue, formState: { errors }, watch } = useFormContext();
    
    const inputValue = watch(name);

    const [suggestions, setSuggestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const inputElement = document.querySelector(`input[name='${name}']`);
        if (inputElement) {
            const rect = inputElement.getBoundingClientRect();
            setDropdownPosition({ top: rect.bottom, left: rect.left });
        }
    }, [inputValue, name]);

    const debouncedFetchSuggestions = debounce(async (query) => {
        if (query.length > 2) {
            const results = await fetchSuggestions(query);
            console.log("Suggestions fetched:", results); 
            setSuggestions(results || []);
            setShowDropdown(true);
        } else {
            setSuggestions([]);
            setShowDropdown(false);
        }
    }, 300);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setValue(name, value);
        debouncedFetchSuggestions(value);
    };

    const handleSuggestionClick = (suggestion) => {
        setValue(name, suggestion.name);
        setShowDropdown(false);
    };

    return (
        <InputWrapper>
            <InputLabel>
                {label} {isRequired && <span style={{ color: 'red' }}>*</span>}
            </InputLabel>
            <InputField
                {...register(name, {
                    required: isRequired ? 'This field is required' : false,
                    ...validationRules,
                })}
                value={inputValue || ''} // Use the value from react-hook-form's state
                onChange={handleInputChange}
                {...inputProps}
            />
            {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}

            {showDropdown && suggestions.length > 0 && (
                <Dropdown top={dropdownPosition.top} left={dropdownPosition.left}>
                    {suggestions.map((suggestion, index) => {
                        console.log(suggestion.category);
                        return (
                        <DropdownItem
                            key={index}
                            category={suggestion.category.toLowerCase()}
                            label={suggestion.name}
                            onClick={() => handleSuggestionClick(suggestion)}
                        />)
                    })}
                </Dropdown>
            )}
        </InputWrapper>
    );
});

export default SearchTextInputWithDropdown;
