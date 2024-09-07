import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { useFormContext, Controller } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerLabel, DatePickerWrapper, DatePickerField, ErrorMessage } from './DatePicker.styles';

const DatePicker = ({ name, label, isRequired, ...props }) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <DatePickerWrapper>
            <DatePickerLabel>
                {label} {isRequired && <span style={{ color: 'red' }}>*</span>}
            </DatePickerLabel>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <DatePickerField>
                        <ReactDatePicker
                            placeholderText="Select date"
                            selected={field.value}
                            onChange={field.onChange}
                            dateFormat="yyyy-MM-dd"
                            {...props}
                        />
                    </DatePickerField>
                )}
                rules={{
                    required: isRequired ? 'This field is required' : false,
                }}
            />
            {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </DatePickerWrapper>
    );
};

export default DatePicker;
