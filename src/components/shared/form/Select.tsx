import styled from 'styled-components';
// import DropdownIcon from '../../../public/assets/images/dropdown.svg';
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

interface ISelect {
  placeholder?: string;
  label?: string;
  value?: string;
  handleDataChange?: (value: string) => void;
}

const SelectInput = ({
  label,
  placeholder,
  handleDataChange,
  value,
}: ISelect) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOnChange = (val: string) => {
    // save value on parent
    handleDataChange && handleDataChange(val);
  };
  return (
    <StyledContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect>
        <Select
          // defaultValue={value}
          // onChange={handleOnChange}
          options={options}
          isSearchable={false}
        />
      </StyledSelect>
    </StyledContainer>
  );
};

export default SelectInput;

const StyledContainer = styled.div`
  /* margin-top: 15px;
  margin-bottom: 15px; */
  .ant-select-item-option-selected {
    background-color: var(--border-2) !important;
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
