import styled from 'styled-components';

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const RingContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  z-index: 1000;
`;

export const Ring = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 10px solid transparent !important;
  border-top-color: ${props => props.theme.colorFurRed} !important;
  animation: rotate 1s linear infinite !important;
  animation-delay: 0.5s;


  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;