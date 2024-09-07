import React, { forwardRef } from 'react';
import { SelectLabel, SelectField, ErrorMessage, SelectWrapper } from './Select.styles';
import { useFormContext } from 'react-hook-form';

const Select = forwardRef(({ 
    name, 
    label, 
    isRequired, 
    validationRules, 
    options, 
    ...selectProps 
}, ref) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <SelectWrapper>
            <SelectLabel>
                {label} {isRequired && <span style={{ color: 'red' }}>*</span>}
            </SelectLabel>
            <SelectField
                {...register(name, {
                    required: isRequired ? 'This field is required' : false,
                    ...validationRules,
                })}
                {...selectProps}
            >
                <option value="">Select...</option> {/* Placeholder option */}
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </SelectField>
            {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </SelectWrapper>
    );
});

export default Select;
