import React from 'react';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import Input from '../../../Reusable Components/Inputs/StandardInput/StandardInput';
import Select from '../../../Reusable Components/Inputs/Select/Select';
import NumberInput from '../../../Reusable Components/Inputs/NumberInput/NumberInput';
import { MealRow, MultiColRow, FoodRow, FoodSection, MealFormContainer } from './CreateMealForm.styles';
import  IconButton  from '../../../Reusable Components/IconButtons/IconButton';
import TimePicker from '../../../Reusable Components/Inputs/TimePicker/TimePicker';
import DatePicker from '../../../Reusable Components/Inputs/DatePicker/DatePicker';
import Button from '../../../Reusable Components/Button/Button';


const FoodCategory = [
    { value: 'FRUIT', label: 'Fruit' },
    { value: 'VEGETABLE', label: 'Vegetable' },
    { value: 'PROTEIN', label: 'Protein' },
    { value: 'DAIRY', label: 'Dairy' },
    { value: 'GRAIN', label: 'Grain' },
    { value: 'COMPOSITE', label: 'Composite' }, 
    { value: 'OTHER', label: 'Other' }
  ];

const CreateMealForm = () =>{

    const MealForm = useForm({
        defaultValues: {
            'name': '',
            'category': 'COMPOSITE',
            'consumeDate': '',
            'comsumeTime': '',
            'foodNames': [{'name': ' ', quantity: 0}]
        },
    });
        
    const {control, handleSubmit} = MealForm;

    const { fields, append, remove} = useFieldArray({
        control,
        name: 'foodNames'
    });

    const onAddFood = () => {
        append({ name: '', quantity: 0 });
    };

    const onDeleteFood = (index) => {
            remove(index);
    };
    
    const onAddMeal = () => {
        alert('AddMeal Clicked!');
    };

    const onRemoveMeal = () => {
        alert('Remove Clicked!');
    };
    
    const onSubmit = (data) =>{
        console.log(data);
        alert(data);
    }

    return (
        <MealFormContainer>
            <FormProvider {...MealForm}>
                <h3 style={{marginBottom: '10px'}}>Meal Editor </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <MealRow>
                        <Input
                            name="name"
                            label="Meal Name"
                            isRequired = {true}
                            validationRules = {{ minLength: { value: 3, message: "Name must be at least 3 characters" } }}
                        />
                    </MealRow>
                    <MealRow>
                        <Select
                            name="category"
                            label="Category"
                            isRequired = {true}
                            options = {FoodCategory}
                        />
                    </MealRow>
                    <MultiColRow>
                        <DatePicker
                            name = 'consumeDate'
                            label = 'Target Consume Date'
                            isRequired = {true}
                        />

                        <TimePicker
                            name = 'consumeTime'
                            label = 'Target Consume Time'
                            isRequired = {true}
                        />
                    </MultiColRow>

                    <h3>Food Items  <IconButton iconName="add" onClick={onAddFood}/> </h3>
                    <MealRow>
                    <FoodSection>
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
                                        label="Weight (in grams)"
                                        isRequired={true}
                                        validationRules={{ min: { value: 1, message: "Weight must be at least 1" } }}
                                    />
                                    {<IconButton iconName="delete" onClick={() => onDeleteFood(index)} disabled={index === 0}/> }
                                </FoodRow>
                            </div>
                        ))}
                    </FoodSection>
                    </MealRow>
                  
                    <Button type="button" text='Add Meal' onClick={onAddMeal}/>
                    <Button type="button" text='Remove Meal' onClick={onRemoveMeal}/>
                    <Button type="submit" text='Save Meal'/>         

                </form>
            </FormProvider>
        </MealFormContainer>
    )
}


export default CreateMealForm;