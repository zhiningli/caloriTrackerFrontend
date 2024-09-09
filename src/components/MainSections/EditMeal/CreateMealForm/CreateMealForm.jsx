import React from 'react';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import Input from '../../../Reusable Components/Inputs/StandardInput/StandardInput';
import Select from '../../../Reusable Components/Inputs/Select/Select';
import NumberInput from '../../../Reusable Components/Inputs/NumberInput/NumberInput';
import { MealRow, MultiColRow, FoodRow, FoodSection, MealFormContainer } from './CreateMealForm.styles';
import IconButton from '../../../Reusable Components/IconButtons/IconButton';
import TimePicker from '../../../Reusable Components/Inputs/TimePicker/TimePicker';
import DatePicker from '../../../Reusable Components/Inputs/DatePicker/DatePicker';
import Button from '../../../Reusable Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addMeal, clearMeal, setMeals } from '../../../../redux/mealSlice';
import { handleAddMeal, handleRemoveMeal, handleSubmitMeals } from './CreateMealFormMethods';

const FoodCategory = [
    { value: 'BREAKFAST', label: 'Breakfast' },
    { value: 'BRUNCH', label: 'Brunch' },
    { value: 'LUNCH', label: 'Lunch' },
    { value: 'DRINK', label: 'Drink' },
    { value: 'SNACK', label: 'Snack' },
    { value: 'DINNER', label: 'Dinner' },
    { value: 'OTHER', label: 'Other' },
    { value: 'SUPPER', label: 'Supper' }
];

const CreateMealForm = () => {
    const dispatch = useDispatch();
    const slug = useSelector((state) => state.user.slug);
    const currentMeals = useSelector((state) => state.meals.currentMeals);
    const newMeals = useSelector((state) => state.meals.newMeals);
    const token = useSelector((state) => state.user.token);

    const MealForm = useForm({
        defaultValues: {
            name: '',
            category: 'COMPOSITE',
            consumptionDate: '',
            consumptionTime: '',
            foodNames: [{ name: '', quantity: 0 }]
        },
    });

    const { control, handleSubmit } = MealForm;
    const { fields, append, remove } = useFieldArray({ control, name: 'foodNames' });

    const onAddFood = () => {
        append({ name: '', quantity: 0 });
    };

    const onDeleteFood = (index) => {
        remove(index);
    };

    const onAddMeal = (data) => {
        handleAddMeal(data, dispatch, addMeal);
    };

    const onRemoveMeal = (data) => {
        handleRemoveMeal(data, dispatch, clearMeal);
    };

    const onSubmit = () => {
        handleSubmitMeals(newMeals, currentMeals, slug, token, dispatch, setMeals, clearMeal);
    };

    return (
        <MealFormContainer>
            <FormProvider {...MealForm}>
                <h3 style={{ marginBottom: '10px' }}>Meal Editor</h3>
                <form onSubmit={handleSubmit(onAddMeal)}>
                    <MealRow>
                        <Input
                            name="name"
                            label="Meal Name"
                            isRequired={true}
                            validationRules={{ minLength: { value: 3, message: "Name must be at least 3 characters" } }}
                        />
                    </MealRow>
                    <MealRow>
                        <Select
                            name="category"
                            label="Category"
                            isRequired={true}
                            options={FoodCategory}
                        />
                    </MealRow>
                    <MultiColRow>
                        <DatePicker
                            name='consumptionDate'
                            label='Target Consume Date'
                            isRequired={true}
                        />
                        <TimePicker
                            name='consumptionTime'
                            label='Target Consume Time'
                            isRequired={true}
                        />
                    </MultiColRow>

                    <h3>Food Items <IconButton iconName="add" onClick={onAddFood} /></h3>
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
                                        <IconButton iconName="delete" onClick={() => onDeleteFood(index)} disabled={index === 0} />
                                    </FoodRow>
                                </div>
                            ))}
                        </FoodSection>
                    </MealRow>

                    <Button type="submit" text='Add Meal' />
                    <Button type="button" text='Remove Meal' onClick={onRemoveMeal} />
                    <Button type="button" text='Save Meal' onClick={onSubmit} />
                </form>
            </FormProvider>
        </MealFormContainer>
    );
};

export default CreateMealForm;
