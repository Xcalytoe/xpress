import { styled } from 'styled-components';
import {
  StyledContainer,
  StyledFlex,
} from '../components/__styles/ui-block.style';
import { ReactElement, ReactNode, useEffect } from 'react';
import Logo from '../components/shared/Logo';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';

const AuthLayout = ({
  children,
  element,
}: {
  element: ReactNode;
  children: ReactElement;
}) => {
  //   Navigation hook
  const navigate = useNavigate();

  // Check auth status
  const { token } = useSelector((root: RootState) => root.authModel);
  useEffect(() => {
    // Redirect to account if authenticated
    if (typeof window !== 'undefined' && !!token) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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
