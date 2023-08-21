import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import { registerSchema2 } from '../../../validations/auth.schema';
// import { Dispatch } from '../../../redux/store';
import { HeadingText, ParagraphText } from '../../__styles/global.style';
import FormInput from '../../shared/form/Input';
import {
  StyledDiv,
  StyledFlex,
  StyledFlexItem,
  StyledUnderline,
} from '../../__styles/ui-block.style';
// import PasswordInput from '../../shared/form/Password';
// import { Link } from 'react-router-dom';
import Spinner from '../../loaders/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../../redux/store';
import Success from './Success';
import { StyledBtnCon, StyledForm, StyledLabel } from '.';
import SelectInput from '../../shared/form/Select';
import PasswordInput from '../../shared/form/Password';
// import InputError from '../../shared/form/InputError';

interface IData {
  city: string;
  confirmPassword: string;
  email: string;
  houseNo: string;
  name: string;
  password: string;
  phone: string;
  state: string;
  street: string;
}

const Step2 = ({
  formRegState,
  handleReset,
}: {
  handleReset: () => void;
  formRegState: any;
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    mode: 'all',
    resolver: yupResolver(registerSchema2),
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

  const dispatch = useDispatch<Dispatch>();
  const isLoading = useSelector(
    (root: RootState) => root.loading.effects.authModel.register
  );

  const onSubmit = async (data: IData) => {
    const formData = { ...formRegState, ...data };
    try {
      dispatch.authModel.register(formData);
      setIsSuccess(true);
    } catch (error) {}
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <HeadingText
          $fsize="24px"
          $fw="500"
          $color="var(--background-primary)"
          $pb="8px"
        >
          Welcome to Xpress Rewards
        </HeadingText>
        <ParagraphText
          $fsize="12px"
          $fw="400"
          $color="var(--secondary-text)"
          $mb="16px"
        >
          Complete the form below to get started
        </ParagraphText>
        <StyledUnderline $border="1px solid var(--border)" />
        <HeadingText
          $fsize="14px"
          $fw="500"
          $color="var(--background-primary)"
          $pt="24px"
          $pb="16px"
        >
          Business Address
        </HeadingText>
        <StyledFlex $cg="16px" $rg="16px" $flexW="wrap">
          <StyledFlexItem $grow="1" $basis="114px" $mwidth="114px">
            <FormInput
              placeholder=""
              name="houseNo"
              color="var(--primary-dark)"
              height="48px"
              inputType="number"
              label="House Number"
              errors={errors.houseNo}
              ariaErrorMessage="houseNoErr"
              register={register}
            />
          </StyledFlexItem>
          <StyledFlexItem $grow="1">
            <FormInput
              placeholder=""
              name="street"
              color="var(--primary-dark)"
              height="48px"
              inputType="text"
              label="Street"
              errors={errors.street}
              ariaErrorMessage="streetErr"
              register={register}
            />
          </StyledFlexItem>
        </StyledFlex>
        <StyledFlex $p="16px 0 0 0" $cg="16px" $rg="16px" $flexW="wrap">
          <StyledFlexItem $grow="1" $basis="150px">
            <FormInput
              placeholder=""
              name="city"
              color="var(--primary-dark)"
              height="48px"
              inputType="text"
              label="City"
              errors={errors.city}
              ariaErrorMessage="cityErr"
              register={register}
            />
          </StyledFlexItem>
          <StyledFlexItem $grow="1" $basis="150px">
            <StyledLabel>State</StyledLabel>
            <Controller
              control={control}
              name="state"
              render={(props) => (
                <SelectInput
                  isClearable={false}
                  {...props}
                  name="state"
                  errors={errors.state}
                  options={options}
                  errId="stateErr"
                  onChange={(event: any) => {
                    const val = event?.value;
                    return props.field.onChange(val);
                  }}
                />
              )}
            />
          </StyledFlexItem>
        </StyledFlex>
        <HeadingText
          $fsize="14px"
          $fw="500"
          $color="var(--background-primary)"
          $pt="40px"
        >
          Contact Person Information
        </HeadingText>
        <StyledDiv $mb="24px" $mt="16px">
          <FormInput
            placeholder=""
            name="name"
            color="var(--primary-dark)"
            height="48px"
            inputType="text"
            label="Contact Name"
            errors={errors.name}
            ariaErrorMessage="nameErr"
            register={register}
          />
        </StyledDiv>
        <StyledDiv $mb="24px" $mt="16px">
          <FormInput
            placeholder=""
            name="phone"
            color="var(--primary-dark)"
            height="48px"
            inputType="number"
            label="Contact Phone Number"
            errors={errors.phone}
            ariaErrorMessage="phoneErr"
            register={register}
          />
        </StyledDiv>
        <StyledDiv $mt="16px">
          <FormInput
            placeholder=""
            name="email"
            color="var(--primary-dark)"
            height="48px"
            inputType="email"
            label="Contact Email Address"
            errors={errors.email}
            ariaErrorMessage="emailErr"
            register={register}
          />
        </StyledDiv>
        <HeadingText
          $fsize="14px"
          $fw="500"
          $color="var(--background-primary)"
          $pt="40px"
        >
          Password
        </HeadingText>
        <StyledDiv $mb="24px" $mt="16px">
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
        <StyledDiv $mb="40px" $mt="16px">
          <PasswordInput
            placeholder=""
            name="confirmPassword"
            color="var(--primary-dark)"
            height="48px"
            label="Confirm Password"
            errors={errors.confirmPassword}
            ariaErrorMessage="confirmPasswordErr"
            register={register}
          />
        </StyledDiv>
        <StyledFlex $cg="15px" $align="center">
          <StyledBtnCon
            $shadow="var(--shadow_2)"
            $borderR="4px"
            $color="var(--white)"
            $bg="var(--background-primary)"
          >
            {isLoading && <Spinner />} Next
          </StyledBtnCon>
          <ParagraphText $fsize="14px" $fw="400" $color="var(--secondary-text)">
            Step 2 of 2
          </ParagraphText>
        </StyledFlex>
      </StyledForm>
      {isSuccess && (
        <Success handleReset={handleReset} handleNext={handleReset} />
      )}
    </>
  );
};

export default Step2;

const options = [
  { value: 'anambra', label: 'Anambra' },
  { value: 'lagos', label: 'Lagos' },
  { value: 'ogun', label: 'Ogun' },
];
