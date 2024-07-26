import styled from 'styled-components';

export const MainSectionContainer = styled.div`
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 10px;
`;

export const SectionContainer = styled.div`
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
    flex: 1;  /* Make sure both sections take equal space */
`;

export const Divider = styled.hr`
    box-sizing: border-box;
    margin: 0;
    height: 0;
    border: 0;
    border-bottom: 1px solid;
`