import styled from 'styled-components';

export const HeaderContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end; /* 'right' is not valid, 'flex-end' is used for alignment */
  height: 30px;
  width: 100%;
  background-color: ${props => props.theme.colorFurRed}; 
`;

export const HeaderItemDiv = styled.div`
  color: #2938cc; /* use colon instead of equals sign */
`;

export const HeaderLabel = styled.span`
  font-size: 20px; /* use colon instead of equals sign */
`;
