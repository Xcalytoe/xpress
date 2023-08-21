import styled from 'styled-components';
// import DropdownIcon from '../../../public/assets/images/dropdown.svg';
import React from 'react';
import Select from 'react-select';
import InputError from './InputError';

interface ISelect {
  label?: string;
  isClearable: boolean;
  name: string;
  errId: string;
  errors?: { message?: string };
  options: {
    value: string;
    label: string;
  }[];
  onChange: (event: any) => void;
}

const SelectInput = ({
  label,
  errors,
  options,
  errId,
  isClearable,
  onChange,
  name,
}: ISelect) => {
  return (
    <StyledContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect>
        <Select
          className="basic-single"
          classNamePrefix="select"
          name={name}
          isClearable={isClearable}
          // defaultValue={value}
          onChange={onChange}
          options={options}
          isSearchable={false}
        />
      </StyledSelect>
      {errors && <InputError errId={errId} message={errors?.message} />}
    </StyledContainer>
  );
};

export default SelectInput;

const StyledContainer = styled.div`
  .select {
    &__control {
      height: 48px;
      &:hover,
      &:focus {
        border-color: var(--primary-text);
      }
    }
    &__single-value {
      font-weight: 500;
      font-size: 14px;
      line-height: normal;
      color: var(--primary-dark);
    }
  }
`;

const StyledSelect = styled.div<{ height?: string }>`
  height: ${({ height }) => (height ? height : '48px')};
`;
const StyledLabel = styled.div`
  font-style: normal;
  font-weight: 450;
  font-size: 14px;
  line-height: 18px;
  // color: var(--primary-text);
  margin-bottom: 9px;
`;
