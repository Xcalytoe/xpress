import React from 'react';
import { styled } from 'styled-components';
import { StyledButton, StyledFlex } from '../../__styles/ui-block.style';
import { ParagraphText } from '../../__styles/global.style';

interface IFooter {
  selectValue: number;
  onChange: (e: any) => void;
  disabledPrev: boolean;
  disabledNext: boolean;
  handlePrev: () => void;
  handleNext: () => void;
  current: number;
  count: number;
  handlePage: (page: number) => void;
}
const Footer = ({
  selectValue,
  handleNext,
  handlePage,
  disabledNext,
  onChange,
  handlePrev,
  disabledPrev,
  current,
  count,
}: IFooter) => {
  return (
    <StyledFooter
      $cg="16px"
      $rg="16px"
      $justify="space-between"
      $flexW="wrap"
      $align="center"
    >
      <StyledFlex $cg="16px" $align="center">
        <ParagraphText
          $fsize="12px"
          $fw="400"
          $lh="normal"
          $color="var(--secondary-text2)"
        >
          Rows per page
        </ParagraphText>
        <StyledSelect value={selectValue} onChange={onChange}>
          {[10, 20, 30, 40, 50].map((pageSize) => {
            return (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            );
          })}
        </StyledSelect>
      </StyledFlex>
      <StyledFlex $cg="16px" $align="center">
        <StyledBtn
          $color={
            disabledPrev
              ? 'var(--secondary-text3)'
              : 'var(--background-primary)'
          }
          type="button"
          onClick={handlePrev}
          disabled={disabledPrev}
        >
          Previous
        </StyledBtn>
        <StyledUl>
          <StyledLi>{current}</StyledLi>
          <StyledLi>of</StyledLi>
          <StyledLi>{count}</StyledLi>
          {/* <StyledLi onClick={() => handlePage(current)}>{current}</StyledLi>
          <StyledLi onClick={() => handlePage(count)}>{count}</StyledLi> */}
        </StyledUl>
        <StyledBtn
          $color={
            disabledNext
              ? 'var(--secondary-text3)'
              : 'var(--background-primary)'
          }
          type="button"
          onClick={handleNext}
          disabled={disabledNext}
        >
          Next
        </StyledBtn>
      </StyledFlex>
    </StyledFooter>
  );
};

export default Footer;

const StyledSelect = styled.select`
  border-radius: 4px;
  border: 1px solid var(--border_6);
  background: var(--white);
  height: 32px;
  width: 89px;
  cursor: pointer;
`;
const StyledLi = styled.li`
  list-style-type: none;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  color: var(--secondary-text2);
`;
const StyledUl = styled.ul`
  display: flex;
  column-gap: 8px;
  padding-left: 0;
  align-items: center;
`;
const StyledBtn = styled(StyledButton)`
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledFooter = styled(StyledFlex)`
  padding: 16px 24px;
`;
