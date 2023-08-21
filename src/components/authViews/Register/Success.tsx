import React from 'react';
import styled from 'styled-components';
import pendingIcon from '../../../assets/images/pending-icon.svg';
import { HeadingText, ParagraphText } from '../../__styles/global.style';
import { StyledButton, StyledDiv } from '../../__styles/ui-block.style';
import { useNavigate } from 'react-router-dom';

const Success = ({
  handleReset,
  handleNext,
}: {
  handleReset: () => void;
  handleNext: (step: string) => void;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    handleNext('company-info');
    handleReset();
    // Navigate to login
    navigate('/auth/login');
  };

  return (
    <StyledContainer>
      <StyledModal>
        <StyledImg>
          <img src={pendingIcon} alt="Pending" />
        </StyledImg>
        <HeadingText
          $fsize="24px"
          $fw="500"
          $lh="142.2%"
          $color="var(--warning)"
          $pb="24px"
          $pt="8px"
        >
          Pending
        </HeadingText>
        <StyledDiv $mw="349px" $m="auto">
          <ParagraphText
            $fsize="12px"
            $fw="400"
            $ff="var(--Secondary-font)"
            $color="var(--primary-text)"
            $mb="16px"
          >
            Your registration is awaiting approval from our partnership team
          </ParagraphText>
        </StyledDiv>

        <StyledBtnCon
          $shadow="var(--shadow_2)"
          $borderR="4px"
          $color="var(--white)"
          $bg="var(--background-primary)"
          onClick={handleClick}
        >
          Done
        </StyledBtnCon>
      </StyledModal>
    </StyledContainer>
  );
};

export default Success;
const StyledModal = styled(StyledDiv)`
  max-width: 442px;
  margin: auto;
  border-radius: 8px;
  padding: 40px;
  margin-top: 110px;
  background: var(--white);
  box-shadow: var(--shadow);
  text-align: center;
`;
const StyledBtnCon = styled(StyledButton)`
  width: 100%;
  height: 56px;
  margin-top: 32px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;

const StyledImg = styled.div`
  height: 68px;
  width: 68px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--warning2);
  border-radius: 6px;

  img {
    height: 30px;
    width: 30px;
  }
`;
const StyledContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: var(--overlay);
`;
