import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const PieChartComponent = ({ data, height, width, innerRadius = 50, outerRadius = 60, paddingAngle = 5 }) => {


    const COLORS = ['#A5381F', '#4B2C20', '#B34729']; // Define your color palette

    console.table(data);
    
    return (

            <PieChart width={width} height={height}> {/* Ensure the PieChart has relative width and height */}
                <Pie 
                    data={data} 
                    dataKey="value" 
                    nameKey="name"
                    cx="50%"
                    cy="50%" 
                    innerRadius={innerRadius} 
                    outerRadius={outerRadius} 
                    paddingAngle={paddingAngle}
                >
                    {data.map((entry, index) => (
                        <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[index % COLORS.length]} 
                        />
                    ))}
                </Pie>
            </PieChart>

    );
}

export default PieChartComponent;
