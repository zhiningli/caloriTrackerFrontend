import React, { forwardRef } from 'react';
import { TimePickerLabel, TimePickerField, ErrorMessage, TimePickerWrapper } from './TimePicker.styles';
import { useFormContext } from 'react-hook-form';

const TimePicker = forwardRef(({ 
    name, 
    label, 
    isRequired, 
    validationRules, 
    ...selectProps 
}, ref) => {
    const { register, formState: { errors } } = useFormContext();

    // Generate hourly options (1:00 to 23:00)
    const generateTimeOptions = () => {
        let times = [];
        for (let i = 0; i <= 23; i++) {
            let hour = i < 10 ? `0${i}:00` : `${i}:00`;
            times.push({ value: hour, label: hour });
        }
        return times;
    };

    const timeOptions = generateTimeOptions();

    return (
        <TimePickerWrapper>
            <TimePickerLabel>
                {label} {isRequired && <span style={{ color: 'red' }}>*</span>}
            </TimePickerLabel>
            <TimePickerField
                {...register(name, {
                    required: isRequired ? 'This field is required' : false,
                    ...validationRules,
                })}
                {...selectProps}
            >
                <option value="">Select time...</option>
                {timeOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TimePickerField>
            {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </TimePickerWrapper>
    );
});

export default TimePicker;
