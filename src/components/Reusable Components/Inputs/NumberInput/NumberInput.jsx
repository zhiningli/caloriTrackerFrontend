import React, { forwardRef } from 'react';
import { NumberInputLabel, NumberInputField, ErrorMessage, NumberInputWrapper } from './NumberInput.styles';
import { useFormContext } from 'react-hook-form';

const NumberInput = forwardRef(({ 
    name, 
    label, 
    isRequired, 
    validationRules,  
    ...inputProps 
}, ref) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <NumberInputWrapper>
            <NumberInputLabel>
                {label} {isRequired && <span style={{ color: 'red' }}>*</span>}
            </NumberInputLabel>
            <NumberInputField
                type="number"
                {...register(name, {
                    required: isRequired ? 'This field is required' : false,
                    ...validationRules,
                })}
                {...inputProps}
            />
            {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </NumberInputWrapper>
    );
});

export default NumberInput;
