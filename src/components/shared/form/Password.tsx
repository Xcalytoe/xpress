/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { InputStyle } from './formInput.style';
import InputError from './InputError';
import { styled } from 'styled-components';
import { StyledButton } from '../../__styles/ui-block.style';
import EyeIcon from '../../__icons/EyeIcon';

interface IPasswordInput {
  disabled?: boolean;
  placeholder: any;
  label?: string;
  name: string;
  register: any;
  errors?: { message?: string };
  defaultValue?: string;
  handleDataChange?: (val: string | any) => void;
  watch?: (names?: string | string[]) => unknown;
  ariaErrorMessage: string;
  height?: string;
  color?: string;
  padding?: string;
  margin?: string;
}
const PasswordInput: React.FC<IPasswordInput> = ({
  placeholder,
  label,
  name,
  errors,
  margin,
  padding,
  disabled,
  ariaErrorMessage,
  color,
  height,
  watch,
  handleDataChange,
  register,
  defaultValue,
}) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    // if field is changed
    watch &&
      watch(name) &&
      handleDataChange &&
      handleDataChange({ [name]: watch(name) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch && watch(name)]);

  return (
    <StyledPass
      margin={margin}
      height={height}
      color={color}
      padding={padding}
      disabled={disabled}
    >
      <label>
        {label && <div className="label">{label}</div>}
        <input
          aria-label={name}
          className={errors && 'error-input'}
          id={name}
          autoComplete={name}
          type={isActive ? 'text' : 'password'}
          aria-invalid="true"
          aria-errormessage={ariaErrorMessage}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name)}
        />
        <StyledBtn onClick={() => setIsActive(!isActive)} type="button">
          <EyeIcon isActive={isActive} />
        </StyledBtn>
      </label>
      {errors && (
        <InputError errId={ariaErrorMessage} message={errors.message} />
      )}
    </StyledPass>
  );
};

export default PasswordInput;
const StyledBtn = styled(StyledButton)`
  position: absolute;
  top: 50%;
  right: 12px;
`;
const StyledPass = styled(InputStyle)`
  label {
    position: relative;
  }
`;
