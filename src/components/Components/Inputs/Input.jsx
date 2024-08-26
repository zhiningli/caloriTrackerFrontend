import React from 'react';
import { InputLabel, InputField, ErrorMessage } from './Input.styles';

const Input = ({ 
    name, 
    label, 
    isRequired, 
    validationRules, 
    ...inputProps 
}) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
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
        </div>
    );
};s

export default Input;