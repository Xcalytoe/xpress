import { ReactElement } from 'react';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import {
  StyledFlex,
  StyledFlexItem,
} from '../../components/__styles/ui-block.style';

const AuthLayout = ({ children }: { children: ReactElement }) => {
  return (
    <StyledFlexCon $flexW="wrap">
      <StyledFlexItemCon $grow="true" $basis="400px" $bg="var(--white)">
        <StyledSection className="layer__1">
          {/* Logo  */}
          <StyledFlexConItem $basis="96px">Logo</StyledFlexConItem>
          <StyledBody $align="center">{children}</StyledBody>
        </StyledSection>
      </StyledFlexItemCon>
      <StyledFlexItemCon
        $grow="true"
        $basis="400px"
        $bg="var(--background-primary_2)"
      >
        <StyledSection m="0" className="layer__2">
          <StyledImg $mwidth="672px" $grow="true" $basis="400px">
            jjjjjjjjjjj
          </StyledImg>
        </StyledSection>
      </StyledFlexItemCon>
    </StyledFlexCon>
  );
};

export default AuthLayout;

const StyledFlexConItem = styled(StyledFlexItem)`
  display: flex;
  align-items: center;
`;
const StyledSection = styled.section<{
  m?: string;
  p?: string;
}>`
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  &.layer {
    &__1 {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 27px;
    }
    &__2 {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
  @media only screen and (max-width: 799px) {
    &.layer {
      &__2 {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    &.layer {
      &__1 {
        padding: 0 20px;
      }
    }
  }
`;
const StyledImg = styled(StyledFlexItem)`
  padding-left: 40px;
`;
const StyledBody = styled(StyledFlex)`
  height: 100%;
  flex-grow: 1;
  justify-content: center;
  flex-basis: 360px;
  max-width: 400px;
  width: 100%;
  margin: auto;
  @media only screen and (max-width: 500px) {
    padding-top: 42px;
  }
`;
const StyledFlexCon = styled(StyledFlex)`
  min-height: 100vh;
`;

const StyledFlexItemCon = styled(StyledFlexItem)<{ $bg: string }>`
  background-color: ${({ $bg }) => $bg};
  display: flex;
  align-items: center;
`;
