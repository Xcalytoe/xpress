import { styled } from 'styled-components';
import {
  StyledContainer,
  StyledFlex,
} from '../components/__styles/ui-block.style';
import { ReactElement, ReactNode } from 'react';
import Logo from '../components/shared/Logo';

const AuthLayout = ({
  children,
  element,
}: {
  element: ReactNode;
  children: ReactElement;
}) => {
  return (
    <StyledMainCon>
      <StyledMain>
        <StyledFlex
          as="header"
          $align="center"
          $justify="space-between"
          $cg="20px"
        >
          <Logo />
          {element}
        </StyledFlex>
        {children}
      </StyledMain>
    </StyledMainCon>
  );
};

export default AuthLayout;

const StyledMainCon = styled(StyledContainer)`
  background: var(--background-primary_2);
  padding-top: 72px;
  padding-bottom: 80px;
`;
const StyledMain = styled.main`
  max-width: 1209;
  margin: auto;
`;
