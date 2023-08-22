import React from 'react';
import { styled } from 'styled-components';
import searchIcon from '../../../assets/images/search-icon.svg';

const SearchInput = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <StyledLabel>
      <StyledSearch
        onChange={onChange}
        placeholder="Name/Phone no / Location"
      />
      <StyledImg>
        <img src={searchIcon} alt="search icon" />
      </StyledImg>
    </StyledLabel>
  );
};

export default SearchInput;
const StyledSearch = styled.input`
  position: absolute;
  border-radius: 4px;
  border: 1px solid var(--border_4);
  background: var(--white);
  width: 100%;
  height: 100%;
  padding-left: 44px;
  padding-right: 10px;
  font-family: var(--Primary-font);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 0.3s;
  box-shadow: none !important;
  outline: none !important;
  border: 1px solid transparent;

  &:focus {
    transition: all 0.3s;
    border: 1px solid var(--primary-text);
  }
`;

const StyledImg = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`;
const StyledLabel = styled.label`
  position: relative;
  height: 48px;
  display: block;
  width: 100%;
`;
