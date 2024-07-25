import styled from 'styled-components';

// export const SelectField = styled(Select)`
//     max-width = 200px;

//     &.Select--multi{
//         .Select-value{
//             display: inline-flex;
//             align-items: center;
//         }
//     }

//     &.Select-placeholder{
//     font-size: small;
//     }
// `;

export const MainContainer = styled.main`
    grid-area = 1 / 2 / 2 / 3 ;
    overflow-y: auto;
    width : 100px;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 120px 1fr;
    grid-template-rows: calc(100vh - 180px);
`;



