import React from 'react';
import Layout from '../../__layouts/Auth';
import {
  StyledButton,
  StyledFlex,
} from '../../components/__styles/ui-block.style';
import { Link } from 'react-router-dom';
import { ParagraphText } from '../../components/__styles/global.style';
import RegisterForm from '../../components/authViews/Register';
import { StyledParagraph } from './LoginPage';

const RegisterPage = () => {
  const element = (
    <StyledFlex $cg="8px" $align="center" $rg="10px" $flexW="wrap">
      <StyledParagraph
        $fsize="14px"
        $lh="20px"
        $fw="400"
        $color="var(--secondary-text)"
      >
        Already have an account?
      </StyledParagraph>

      <Link to="/auth/login">
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
            Sign In
          </ParagraphText>
        </StyledButton>
      </Link>
    </StyledFlex>
  );
  return (
    <Layout element={element}>
      <RegisterForm />
    </Layout>
  );
};

export default RegisterPage;
