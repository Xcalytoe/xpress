import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loginSchema } from '../../../validations/auth.schema';
// import { Dispatch } from '../../../redux/store';
import { HeadingText, ParagraphText } from '../../__styles/global.style';
import FormInput from '../../shared/form/Input';
import {
  StyledButton,
  StyledDiv,
  StyledFlex,
  StyledUnderline,
} from '../../__styles/ui-block.style';
import PasswordInput from '../../shared/form/Password';
import { Link } from 'react-router-dom';
import Spinner from '../../loaders/Spinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
// import InputError from '../../shared/form/InputError';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    // control,
    formState: { errors },
  } = useForm<any>({
    mode: 'all',
    resolver: yupResolver(loginSchema),
  });

  // Check auth status
  //   const { token } = useSelector((root: RootState) => root.authModel);
  //   useEffect(() => {
  //     // Redirect to account if authenticated
  //     if (typeof window !== 'undefined' && !!token) {
  //       if (fromQuery) {
  //         router.push(`${fromQuery}`);
  //       } else {
  //         router.push('/shopper');
  //       }
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [token]);

  //   const dispatch = useDispatch<Dispatch>();
  const isLoading = useSelector(
    (root: RootState) => root.loading.effects.authModel.login
  );

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    const username = email;
    const formData = { username, password };
    console.log(formData);
    // dispatch.authModel.login(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <HeadingText
        $fsize="24px"
        $fw="500"
        $color="var(--background-primary)"
        $pb="8px"
      >
        Welcome Back!
      </HeadingText>
      <ParagraphText
        $fsize="12px"
        $fw="400"
        $color="var(--secondary-text)"
        $mb="16px"
      >
        Sign in to your Xpress reward partner’s dashboard
      </ParagraphText>
      <StyledUnderline $border="1px solid var(--border)" />
      <StyledDiv $mb="32px" $mt="24px">
        <FormInput
          placeholder=""
          name="email"
          color="var(--primary-dark)"
          height="48px"
          inputType="email"
          label="Email address"
          errors={errors.email}
          ariaErrorMessage="emailErr"
          register={register}
        />
      </StyledDiv>

      <StyledDiv $mb="16px">
        <PasswordInput
          placeholder=""
          name="password"
          color="var(--primary-dark)"
          height="48px"
          label="Password"
          errors={errors.password}
          ariaErrorMessage="passwordErr"
          register={register}
        />
      </StyledDiv>
      <StyledFlex $cg="8px">
        <ParagraphText $fsize="14px" $fw="400" $color="var(--secondary-text)">
          Forgot Password?
        </ParagraphText>
        <Link to="/auth/forgot-password">
          <ParagraphText
            $fsize="14px"
            $fw="500"
            $color="var(--background-primary)"
          >
            Reset it
          </ParagraphText>
        </Link>
      </StyledFlex>

      <StyledBtnCon
        $shadow="var(--shadow_2)"
        $borderR="4px"
        $color="var(--white)"
        $bg="var(--background-primary)"
      >
        {isLoading && <Spinner />} Sign In
      </StyledBtnCon>
    </StyledForm>
  );
};

export default LoginForm;
const StyledBtnCon = styled(StyledButton)`
  width: 100%;
  height: 56px;
  margin-top: 32px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;

const StyledForm = styled.form`
  max-width: 522px;
  margin: auto;
  padding: 40px;
  margin-top: 110px;
  background: var(--white);
  border-radius: 8px;
  /* @media only screen and (max-width: 799px) {
    h2 {
      font-size: 32px;
      line-height: 40px;
    }
  } */
`;
