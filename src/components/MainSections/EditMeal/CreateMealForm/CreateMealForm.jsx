import React from 'react';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import Input from '../../../Inputs/Input';


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
        
    const {control, handleSubmit, register} = MealForm;

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

                <label>Category</label>
                <select {...register("category", { required: true })}>
                    {FoodCategory.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <div>
                    <h3>Food Items</h3>
                    {fields.map((item, index) => (
                        <div key={item.id} style={{ marginBottom: '10px' }}>
                            <Input
                                name={`foodNames[${index}].name`}
                                label={`Food Name #${index + 1}`}
                                isRequired={true}
                            />

                            <Input
                                name={`foodNames[${index}].quantity`}
                                label="Quantity"
                                type="number"
                                isRequired={true}
                                validationRules={{ min: { value: 1, message: "Quantity must be at least 1" } }}
                            />
                            <button type="button" onClick={() => remove(index)}>Delete</button>
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