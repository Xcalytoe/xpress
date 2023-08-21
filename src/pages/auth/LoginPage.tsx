import React from 'react';
import Layout from '../../__layouts/Auth';
import {
  StyledButton,
  StyledFlex,
} from '../../components/__styles/ui-block.style';
import { ParagraphText } from '../../components/__styles/global.style';
import { Link } from 'react-router-dom';
import Login from '../../components/authViews/Login';

const LoginPage = () => {
  const element = (
    <StyledFlex $cg="8px" $align="center" $rg="10px" $flexW="wrap">
      <ParagraphText
        $fsize="14px"
        $lh="20px"
        $fw="400"
        $color="var(--secondary-text)"
      >
        New to Xpress Rewards?
      </ParagraphText>

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
