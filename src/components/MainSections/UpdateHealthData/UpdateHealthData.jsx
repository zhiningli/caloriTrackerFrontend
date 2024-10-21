import React from 'react';
import { MainSectionContainer } from '../MainSection.style';
import NumberInput from '../../Reusable Components/Inputs/NumberInput/NumberInput';
import { useForm, FormProvider } from 'react-hook-form';
import Select from '../../Reusable Components/Inputs/Select/Select';

function UpdateHealthData() {

    const healthMetricsForm = useForm({
        defaultValues: {
            height: '',
            weight: '',
            yearOfBirth: '',
            bodyFatPercentage: "",
            biologicalSex: "",
        },
    });

    const submitHealthMetrics = (data) => {
        console.log(data);
    };

    const { handleSubmit } = healthMetricsForm;

    return (
        <MainSectionContainer>
            <FormProvider {...healthMetricsForm}>
                <form onSubmit={handleSubmit(submitHealthMetrics)}>
                    <NumberInput
                        name="height"
                        label="Height"
                        isRequired={true}
                        validationRules={{ 
                            min: { value: 30, message: "Height must be at least 30 cm" }, 
                            max: { value: 250, message: "Height must be under 250 cm" }
                        }}
                    />
                    <NumberInput
                        name="weight"
                        label="Weight"
                        validationRules={{ 
                            min: { value: 20, message: "Weight must be at least 20 kg" }, 
                            max: { value: 300, message: "Weight must be under 300 kg" }
                        }}
                    />
                    <NumberInput
                        name="yearOfBirth"
                        label="Year of birth"
                        validationRules={{ 
                            min: { value: 1900, message: "Select year between 1900 and 2024" }, 
                            max: { value: 2024, message: "Select year between 1900 and 2024" }
                        }}
                    />
                    <NumberInput
                        name="bodyFatPercentage"
                        label="Body Fat Percentage (optional)"
                        isRequired={false}
                    />
                    <Select
                        name="biologicalSex"
                        label="Sex"
                        isRequired={true}
                        options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'other', label: 'Other' },
                        ]}
                    />

                    <button type="submit">Save Health Data</button>
                </form>
            </FormProvider>
        </MainSectionContainer>
    );
}

export default UpdateHealthData;
