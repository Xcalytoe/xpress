import React from 'react';
import styled from 'styled-components';

function Spinner({ light, dark }: { light?: string; dark?: string }) {
  return <StyledSpinner $light={light} $dark={dark} />;
}

export default Spinner;

const StyledSpinner = styled.div<{ $light?: string; $dark?: string }>`
  display: inline-block;
  width: 23px;
  height: 23px;
  border: 2px solid ${({ $light }) => $light || 'var(--white)'};
  border-radius: 50%;
  border-top-color: ${({ $dark }) => $dark || 'var(--secondary-text)'};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
