import React, { HTMLProps, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { StyledButton, StyledDiv } from '../../__styles/ui-block.style';
import moreIcon from '../../../assets/images/more-icon.svg';

export default function CheckboxSelect({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, indeterminate]);

  return <StyledInput type="checkbox" ref={ref} {...rest} />;
}
const StyledInput = styled.input`
  margin-left: 24px;
  cursor: pointer;
`;

export const ActionBtn = () => {
  return (
    <StyledDiv $pr="24px">
      <StyledButton>
        <img src={moreIcon} alt="more icon" />
      </StyledButton>
    </StyledDiv>
  );
};
