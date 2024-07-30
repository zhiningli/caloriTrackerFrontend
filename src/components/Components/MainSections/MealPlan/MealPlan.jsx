import React from 'react';
import {MainSectionContainer, SectionContainer, Table, TableHeader, TableCell, TableRow } from '../MainSection.sytle';
import Title from '../Title/Title';
import Button from '../../atom/Button';

function MealPlan(){
    return(
        <MainSectionContainer>
            <Title title="MealPlan"/>
            <SectionContainer>
                This is the section where recorded meal plan will display
                <br />
                MealPlan for today
                <br />
            
            </SectionContainer>
            <SectionContainer>
                <Table>
                    <thead>
                        <TableRow>
                            <TableHeader>Name</TableHeader>
                            <TableHeader>Category</TableHeader>
                            <TableHeader>Calories</TableHeader>
                            <TableHeader>Protein</TableHeader>
                            <TableHeader>Fats</TableHeader>
                            <TableHeader>Carbs</TableHeader>
                            <TableHeader>Quantity</TableHeader>
                            <TableHeader>Actions</TableHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableCell>Apple</TableCell>
                            <TableCell>Fruit</TableCell>
                            <TableCell>78</TableCell>
                            <TableCell>0.45g</TableCell>
                            <TableCell>0.3g</TableCell>
                            <TableCell>21g</TableCell>
                            <TableCell>150g</TableCell>
                            <TableCell>Placeholder for action components</TableCell>
                        </TableRow>
                    </tbody>
                </Table>
            </SectionContainer>

            <SectionContainer>
                What is on your mind?
                <br/>
                <Button className='action-button' ButtonLabel="Create / Record New Meals"/>
            </SectionContainer>
        </MainSectionContainer>
    )
}

export default MealPlan;