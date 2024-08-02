import styled from 'styled-components';

export const MainSectionContainer = styled.div`
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 10px;
    background=color: ${props=>(props.theme.colorFurRed)};
`;

export const SectionContainer = styled.div`
    background-color: ${props=>(props.theme.colorFurRed)};
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
    flex: 1;  /* Make sure both sections take equal space */
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
`;

export const TableHeader = styled.th`
    background-color: #f2f2f2;
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const TableCell = styled.td`
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
`;

export const Divider = styled.hr`
    box-sizing: border-box;
    margin: 0;
    height: 0;
    border: 0;
    border-bottom: 1px solid;
`