import React from 'react';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import Input from '../../../Reusable Components/Inputs/StandardInput/StandardInput';
import Select from '../../../Reusable Components/Inputs/Select/Select';
import NumberInput from '../../../Reusable Components/Inputs/NumberInput/NumberInput';
import { FoodRow } from './CreateMealForm.styles';


const FoodCategory = [
    { value: 'FRUIT', label: 'Fruit' },
    { value: 'VEGETABLE', label: 'Vegetable' },
    { value: 'PROTEIN', label: 'Protein' },
    { value: 'DAIRY', label: 'Dairy' },
    { value: 'GRAIN', label: 'Grain' },
    { value: 'COMPOSITE', label: 'Composite' }, 
    { value: 'OTHER', label: 'Other' }
  ];

function CreateMealForm(){

    const MealForm = useForm({
        defaultValues: {
            'name': '',
            'category': 'COMPOSITE',
            'foodNames': [{'name': ' ', quantity: 0}]
            },
        });
        
    const {control, handleSubmit} = MealForm;

    const { fields, append, remove} = useFieldArray({
        control,
        name: 'foodNames'
    });

    const onSubmit = (data) =>{
        console.log(data);
        alert(data);
    }

    return (
        <FormProvider {...MealForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    name="name"
                    label="Meal Name"
                    isRequired = {true}
                    validationRules = {{ minLength: { value: 3, message: "Name must be at least 3 characters" } }}
                />

                <Select
                    name="category"
                    label="Category"
                    isRequired = {true}
                    options = {FoodCategory}
                />
                


                <div>
                    <h3>Food Items</h3>
                    {fields.map((item, index) => (
                        <div key={item.id} style={{ marginBottom: '10px' }}>
                            <FoodRow>
                            <Input
                                name={`foodNames[${index}].name`}
                                label={`Food Name`}
                                isRequired={true}
                            />
                            <NumberInput
                                name={`foodNames[${index}].quantity`}
                                label="Quantity"
                                isRequired={true}
                                validationRules={{ min: { value: 1, message: "Quantity must be at least 1" } }}
                            />
                            <button type="button" onClick={() => remove(index)}>Delete</button>
                            </FoodRow>

                        </div>
                    ))}
                    <button type="button" onClick={() => append({ name: '', quantity: 0 })}>
                        Add Food Item
                    </button>
                </div>

                <button type="submit">Submit Meal</button>
            </form>

        </FormProvider>

    )
}


export default CreateMealForm;