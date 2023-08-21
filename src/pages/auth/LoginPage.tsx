import React from 'react';
import Layout from '../../__layouts/Auth';
import {
  StyledButton,
  StyledFlex,
} from '../../components/__styles/ui-block.style';
import { ParagraphText } from '../../components/__styles/global.style';
import { Link } from 'react-router-dom';
import Login from '../../components/authViews/Login';
import { styled } from 'styled-components';

const LoginPage = () => {
  const element = (
    <StyledFlex $cg="8px" $align="center" $rg="10px" $flexW="wrap">
      <StyledParagraph
        $fsize="14px"
        $lh="20px"
        $fw="400"
        $color="var(--secondary-text)"
      >
        New to Xpress Rewards?
      </StyledParagraph>

      <Link to="/auth/register">
        <StyledButton
          as="div"
          $bg="transparent"
          $borderR="4px"
          $hoverB="var(--background-primary)"
          $hoverC="var(--white)"
          $color="var(--primary-text)"
          $border="1px solid var(--background-primary)"
        >
          <ParagraphText
            $fsize="14px"
            $lh="20px"
            $fw="400"
            $color="unset"
            $p="8px 16px"
          >
            Sign Up
          </ParagraphText>
        </StyledButton>
      </Link>
    </StyledFlex>
  );
  return (
    <Layout element={element}>
      <Login />
    </Layout>
  );
};

export default LoginPage;

export const StyledParagraph = styled(ParagraphText)`
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
