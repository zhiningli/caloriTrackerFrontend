import React, { useEffect, useState } from 'react';
import { useForm, FormProvider, useFieldArray, useWatch } from 'react-hook-form';
import Input from '../../../Reusable Components/Inputs/StandardInput/StandardInput';
import Select from '../../../Reusable Components/Inputs/Select/Select';
import NumberInput from '../../../Reusable Components/Inputs/NumberInput/NumberInput';
import SearchInputWithDropdown from '../../../Reusable Components/Inputs/SearchInputWithDropdown/SearchInputWithDropdown';
import { MealRow, MultiColRow, FoodRow, FoodSection, MealFormContainer } from './CreateMealForm.styles';
import IconButton from '../../../Reusable Components/IconButtons/IconButton';
import TimePicker from '../../../Reusable Components/Inputs/TimePicker/TimePicker';
import DatePicker from '../../../Reusable Components/Inputs/DatePicker/DatePicker';
import Button from '../../../Reusable Components/Button/Button';
import { useDispatch } from 'react-redux';
import { addMeal, clearMeal, setMeals } from '../../../../redux/mealSlice';
import { handleAddMeal, handleRemoveMeal, handleSubmitMeals } from './CreateMealFormMethods';
import { searchFoodInIndexedDB } from '../../../../utils/indexedDBUtil';

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

const CreateMealForm = ({ selectedMeal, newMeals, currentMeals, deleteMeals, slug, token }) => {

    const dispatch = useDispatch();

    const [totalNutrients, setTotalNutrients] = useState({
        calories: 0,
        proteins: 0,
        fats: 0,
        carbs: 0,
    });

    const MealForm = useForm({
        defaultValues: {
            name: '',
            category: 'COMPOSITE',
            consumptionDate: '',
            consumptionTime: '',
            foodNames: [{ name: '', quantity: 0 }]
        },
    });

    const { control, handleSubmit, setValue } = MealForm;
    const { fields, append, remove } = useFieldArray({ control, name: 'foodNames' });

    const onAddFood = () => append({ name: '', quantity: 0 });

    const onDeleteFood = (index) => remove(index);

    const onAddMeal = (data) => handleAddMeal(data, dispatch, addMeal);

    const onRemoveMeal = (data) => handleRemoveMeal(data, dispatch, clearMeal);

    const onSubmit = () => handleSubmitMeals(newMeals, currentMeals, slug, token, dispatch, setMeals, clearMeal);

    useEffect(() => {
        if (selectedMeal) {
            setValue('name', selectedMeal.name);
            setValue('category', selectedMeal.category);
            setValue('consumptionDate', selectedMeal.consumptionDate);
            setValue('consumptionTime', selectedMeal.consumptionTime);

            const foodNamesArray = Object.entries(selectedMeal.foodNames).map(([name, quantity]) => ({
                name,
                quantity,
            }));

            setValue('foodNames', foodNamesArray);
        }
    }, [selectedMeal, setValue]);

    const calculateTotalNutrients = (foodNames) => {
        let totalCalories = 0;
        let totalProteins = 0;
        let totalFats = 0;
        let totalCarbs = 0;

        foodNames.forEach((food) => {
            const { quantity, caloriesPerGram, proteinsPerGram, fatsPerGram, carbsPerGram } = food;
            if (quantity && caloriesPerGram) {
                totalCalories += caloriesPerGram * quantity;
                totalProteins += proteinsPerGram * quantity;
                totalFats += fatsPerGram * quantity;
                totalCarbs += carbsPerGram * quantity;
            }
        });

        setTotalNutrients({
            calories: totalCalories,
            proteins: totalProteins,
            fats: totalFats,
            carbs: totalCarbs,
        });
    };

    const foodNames = useWatch({ control, name: 'foodNames' });

    useEffect(() => {
        calculateTotalNutrients(foodNames);
    }, [foodNames]);

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
                        <FoodSection className='food-section'>
                            {fields.map((item, index) => (
                                <div key={item.id} style={{ marginBottom: '10px' }}>
                                    <FoodRow>
                                        <SearchInputWithDropdown
                                            name={`foodNames[${index}].name`}
                                            label={`Food Name`}
                                            isRequired={true}
                                            fetchSuggestions={searchFoodInIndexedDB}
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
            <div>Total Calories: {totalNutrients.calories}</div>
            <div>Total Proteins: {totalNutrients.proteins}</div>
            <div>Total Fats: {totalNutrients.fats}</div>
            <div>Total Carbs: {totalNutrients.carbs}</div>
        </MealFormContainer>
    );
};

export default CreateMealForm;
