import styled from 'styled-components';

export const MainSectionContainer = styled.div`
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    background-color: ${props => props.theme.colorIvory};
    overflow-y: scroll;
    overflow-x: scroll;
    width: 1200;
`

