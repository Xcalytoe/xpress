/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { InputStyle } from './formInput.style';
import InputError from './InputError';

interface IFormInput {
  disabled?: boolean;
  placeholder: any;
  label?: string;
  name: string;
  inputType: string;
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
const FormInput: React.FC<IFormInput> = ({
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
  inputType,
  defaultValue,
}) => {
  useEffect(() => {
    // if field is changed
    watch &&
      watch(name) &&
      handleDataChange &&
      handleDataChange({ [name]: watch(name) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch && watch(name)]);

  return (
    <InputStyle
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
          type={inputType}
          aria-invalid="true"
          aria-errormessage={ariaErrorMessage}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name)}
        />
      </label>
      {errors && (
        <InputError errId={ariaErrorMessage} message={errors.message} />
      )}
    </InputStyle>
  );
};

export default FormInput;
