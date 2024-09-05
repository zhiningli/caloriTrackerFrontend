import React from 'react';
import { LoadingOverlay, RingContainer, Ring } from './LoadingScreen.styles';

const LoadingScreen = () => {
  return (
    <LoadingOverlay>
      <RingContainer>
        <Ring/>
      </RingContainer>
    </LoadingOverlay>
  );
};

export default LoadingScreen;