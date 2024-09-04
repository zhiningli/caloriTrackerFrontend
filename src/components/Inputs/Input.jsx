import React, {forwardRef } from 'react';
import { InputLabel, InputField, ErrorMessage, InputWrapper } from './Input.styles';
import {useFormContext} from 'react-hook-form';

const Input = forwardRef(({ 
    name, 
    label, 
    isRequired, 
    validationRules, 
    ...inputProps 
}, ref) => {
    const { register, formState: { errors } } = useFormContext();

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
                {...inputProps}
            />
            {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </InputWrapper>
    );
});

export default Input;