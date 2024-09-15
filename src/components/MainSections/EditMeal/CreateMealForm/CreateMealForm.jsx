import React, { useEffect, useState } from 'react';
import { useForm, FormProvider, useFieldArray, useWatch } from 'react-hook-form';
import { searchFoodInIndexedDB } from '../../../../utils/indexedDBUtil';
import { useDispatch } from 'react-redux';
import Input from '../../../Reusable Components/Inputs/StandardInput/StandardInput';
import Select from '../../../Reusable Components/Inputs/Select/Select';
import NumberInput from '../../../Reusable Components/Inputs/NumberInput/NumberInput';
import SearchInputWithDropdown from '../../../Reusable Components/Inputs/SearchInputWithDropdown/SearchInputWithDropdown';
import TimePicker from '../../../Reusable Components/Inputs/TimePicker/TimePicker';
import DatePicker from '../../../Reusable Components/Inputs/DatePicker/DatePicker';
import Button from '../../../Reusable Components/Button/Button';
import IconButton from '../../../Reusable Components/IconButtons/IconButton';
import { MealRow, MultiColRow, FoodRow, FoodSection, MealFormContainer } from './CreateMealForm.styles';

import { handleAddMeal, handleSubmitMeals, handleDeleteMeals, handleAddFood, handleAddNewMeal, handleDeleteFood, calculateTotalNutrients, handleUpdateMeal } from './CreateMealFormMethods';
import { FoodCategory } from '../../../Reusable Components/Category/CategoryMap';

const CreateMealForm = ({ selectedMeal: propSelectedMeal, newMeals, currentMeals, deleteMeals, updatedMeals, slug, token }) => {
    console.log(propSelectedMeal);
    const dispatch = useDispatch();

    const [selectedMeal, setSelectedMeal] = useState(propSelectedMeal);

    const MealForm = useForm({
        defaultValues: {
            name: '',
            category: 'COMPOSITE',
            consumptionDate: '',
            consumptionTime: '',
            foodNames: [{ name: '', quantity: 0 }]
        },
    });

    const [totalNutrients, setTotalNutrients] = useState({
        calories: 0,
        proteins: 0,
        fats: 0,
        carbs: 0,
    });

    const { control, handleSubmit, setValue, reset } = MealForm;
    const { fields, append, remove } = useFieldArray({ control, name: 'foodNames' });
    const foodNames = useWatch({ control, name: 'foodNames' });

    const onAddMeal = (data) => handleAddMeal(data, dispatch);
    const onUpdateMeal = (data) => {const selectedID = propSelectedMeal.id; handleUpdateMeal(data, selectedID, dispatch);};

    const onAddNewMeal = () => { handleAddNewMeal(reset, setSelectedMeal);};

    const onDeleteMeal = (data) => {
        const selectedId = propSelectedMeal.id; 
        handleDeleteMeals(data, selectedId,dispatch)
    };

    const onSubmit = () => handleSubmitMeals(newMeals, currentMeals, updatedMeals, slug, token, dispatch);

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

    useEffect(() => {
        calculateTotalNutrients(foodNames, setTotalNutrients);
    }, [foodNames]);

    useEffect(() => {
        setSelectedMeal(propSelectedMeal); 
    }, [propSelectedMeal]);

    return (
        <MealFormContainer>
            <FormProvider {...MealForm}>
                <h3 style={{ marginBottom: '10px' }}>Meal Editor</h3>
                <form onSubmit={handleSubmit(selectedMeal ? onUpdateMeal : onAddMeal)}>
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

                    <h3>Food Items <IconButton iconName="add" onClick={() => handleAddFood(append)} /></h3>
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
                                        <IconButton iconName="delete" onClick={() => handleDeleteFood(remove, index)} disabled={index === 0} />
                                    </FoodRow>
                                </div>
                            ))}
                        </FoodSection>
                    </MealRow>

                    {selectedMeal ? (
                        <>
                            <Button type="submit" text='Update Meal' />
                            <Button
                                type="button"
                                text='Add New Meal'
                                onClick={onAddNewMeal}
                            />
                            <Button type="submit" text='Delete Meal' onClick={handleSubmit(onDeleteMeal)} />
                        </>
                    ) : (
                        <Button type="submit" text='Add Meal' />
                    )}

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
