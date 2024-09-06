import { PieChart, Pie, Cell } from 'recharts';
import styled from 'styled-components';

export const StyledPieChartWrapper = styled.div`
    .recharts-wrapper {
        width: 100px; /* Adjust based on what works */
        height: 100px; /* You can set these values to match your layout */
    }
`;

export const StyledPieChart = styled(PieChart)`
    width: 30%;
    height: 30%;
    background-color: ${props => props.theme.colorPandaBrown};
`;

export const StyledPie = styled(Pie)`
    stroke: ${props => props.theme.colorPandaBrown};
    stroke-width: 2;
`;

export const StyledCell = styled(Cell)`
    stroke: ${props => props.theme.colorFurRed};
    stroke-width: 1;
`;
