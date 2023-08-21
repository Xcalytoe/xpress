import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import { registerSchema1 } from '../../../validations/auth.schema';
// import { Dispatch } from '../../../redux/store';
import { HeadingText, ParagraphText } from '../../__styles/global.style';
import FormInput from '../../shared/form/Input';
import {
  StyledDiv,
  StyledFlex,
  StyledUnderline,
} from '../../__styles/ui-block.style';
import Spinner from '../../loaders/Spinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { StyledBtnCon, StyledForm, StyledLabel } from '.';
import FileUpload from '../../shared/form/FileUpload';
import SelectInput from '../../shared/form/Select';
// import InputError from '../../shared/form/InputError';

const Step1 = ({
  storeData,
  handleNext,
}: {
  storeData: any;
  handleNext: (step: string) => void;
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    mode: 'all',
    resolver: yupResolver(registerSchema1),
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

  const onSubmit = async (data: unknown) => {
    storeData(data);
    handleNext('personal-info');
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
      >
        Business Information
      </HeadingText>
      <StyledDiv $mb="24px" $mt="16px">
        <FormInput
          placeholder=""
          name="bizName"
          color="var(--primary-dark)"
          height="48px"
          inputType="text"
          label="Business name"
          errors={errors.bizName}
          ariaErrorMessage="bizNameErr"
          register={register}
        />
      </StyledDiv>
      <StyledDiv $mb="24px" $mt="16px">
        <FormInput
          placeholder=""
          name="bizEmail"
          color="var(--primary-dark)"
          height="48px"
          inputType="email"
          label="Business Email Address"
          errors={errors.bizEmail}
          ariaErrorMessage="bizEmailErr"
          register={register}
        />
      </StyledDiv>
      <StyledDiv $mb="24px" $mt="16px">
        <FormInput
          placeholder=""
          name="bizPhone"
          color="var(--primary-dark)"
          height="48px"
          inputType="number"
          label="Business Phone Number"
          errors={errors.bizPhone}
          ariaErrorMessage="bizPhoneErr"
          register={register}
        />
      </StyledDiv>
      <StyledDiv $mb="24px" $mt="16px">
        <StyledLabel>Business Category</StyledLabel>
        <Controller
          control={control}
          name="bizCategory"
          render={(props) => (
            <SelectInput
              isClearable={false}
              {...props}
              name="bizCategory"
              errors={errors.bizCategory}
              options={options}
              errId="bizCategoryErr"
              onChange={(event: any) => {
                const val = event?.value;
                return props.field.onChange(val);
              }}
            />
          )}
        />
      </StyledDiv>
      <StyledDiv $mb="24px" $mt="16px">
        <FormInput
          placeholder=""
          name="account"
          color="var(--primary-dark)"
          height="48px"
          inputType="number"
          label="Account No"
          errors={errors.account}
          ariaErrorMessage="accountErr"
          register={register}
        />
      </StyledDiv>
      <StyledDiv $mb="40px" $mt="16px">
        <StyledLabel>Image (Logo)</StyledLabel>
        <Controller
          control={control}
          name="logo"
          render={(props) => (
            <FileUpload
              name="logo"
              height="204px"
              errId="logoErr"
              placeholder="Drag here or click the button below to upload "
              errors={errors.logo}
              onChange={(event: any) => {
                const file = event?.target?.files[0];
                return props.field.onChange(file);
              }}
              type="Maximum upload size: 10MB (.jpg)"
              {...props}
              value={props.field.value?.name}
              accept=".png,.jpg,.jpeg,.webp,.svg"
            />
          )}
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
          Step 1 of 2
        </ParagraphText>
      </StyledFlex>
    </StyledForm>
  );
};

export default Step1;

const options = [
  { value: 'cate 1', label: 'Cate 1' },
  { value: 'cate 2', label: 'Cate 2' },
  { value: 'cate 3', label: 'Cate 3' },
];
