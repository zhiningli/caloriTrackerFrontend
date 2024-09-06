import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

const PieChartComponent = ({ data, height, width, innerRadius = 50, outerRadius = 60, paddingAngle = 5, cx = "50%", cy = "50%" }) => {
  const COLORS = ['#A5381F', '#4B2C20', '#B34729'];

  const percentage = (data[0].value / (data[0].value + data[1].value)) * 100;
  
  console.log('Pie chart is renderinging?', data);

  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx={cx}
        cy={cy}
        dataKey="value"
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
        
        <Label 
          value={`${percentage.toFixed(0)}%`} 
          position="center" 
          fontSize={24}
          fill="#333" 
        />
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
