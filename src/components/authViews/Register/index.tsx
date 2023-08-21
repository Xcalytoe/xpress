import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import { styled } from 'styled-components';
import { StyledButton } from '../../__styles/ui-block.style';

interface IStepsForm {}
const RegisterForm = () => {
  const [formRegState, setFormRegState] = useState({});
  const [activeStep, setActiveStep] = useState('company-info');

  const storeData = (data: IStepsForm) => {
    setFormRegState({ ...formRegState, ...data });
  };

  const handleNext = (step: string) => {
    setActiveStep(step);
  };

  const handleReset = () => setFormRegState({});

  const formData = {
    handleNext,
    formRegState,
    storeData,
    handleReset,
  };

  // form step inputs
  switch (activeStep) {
    case 'company-info':
      return <Step1 {...formData} />;
    case 'personal-info':
      return <Step2 {...formData} />;
    default:
      return null;
  }
};

export default RegisterForm;

export const StyledBtnCon = styled(StyledButton)`
  width: 100%;
  max-width: 185px;
  height: 56px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  @media only screen and (max-width: 375px) {
    max-width: 115px;
  }
`;
export const StyledLabel = styled.label<{ textAlign?: string }>`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: ${({ textAlign }) => textAlign};
  display: block;
  margin-bottom: 8px;
  line-height: normal;
  color: var(--primary-text);
`;
export const StyledForm = styled.form`
  max-width: 522px;
  box-shadow: var(--shadow);
  margin: auto;
  border-radius: 8px;
  padding: 40px;
  margin-top: 110px;
  background: var(--white);
  @media only screen and (max-width: 500px) {
    padding: 40px 15px;
  }
`;
