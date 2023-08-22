import React, { ReactNode } from 'react';
import {
  StyledButton,
  StyledFlex,
} from '../../components/__styles/ui-block.style';
import dropdownIcon from '../../assets/images/dropdown-icon.svg';
import { styled } from 'styled-components';
import ProfileImage from '../../components/shared/ProfileImage';
import menuIcon from '../../assets/images/menu-icon.svg';
import { NotificationIcon } from '../../components/__icons';

const DashNavBar = ({
  title,
  handleMenu,
}: {
  title: ReactNode;
  handleMenu: () => void;
}) => {
  return (
    <StyledHeader $justify="space-between" $align="center">
      <StyledFlex $align="center" $cg="16px">
        {/* Mobile menu  */}
        <StyledImg onClick={handleMenu}>
          <img src={menuIcon} alt="Menu" />
        </StyledImg>
        {title}
      </StyledFlex>
      <StyledFlexCon $cg="16px" $align="center">
        <StyledBtn>
          <NotificationIcon isActive />
        </StyledBtn>
        <StyledBtn as="div" $cg="8px">
          <ProfileImage name="Temi Adejumoke" />
          <img src={dropdownIcon} alt="dropdown icon" />
        </StyledBtn>
      </StyledFlexCon>
    </StyledHeader>
  );
};

export default DashNavBar;
const StyledImg = styled(StyledButton)`
  display: none;
  align-items: center;
  @media only screen and (max-width: 800px) {
    display: flex;
  }
`;
const StyledFlexCon = styled(StyledFlex)``;
const StyledHeader = styled(StyledFlex)`
  padding: 22px 32px;
  background: var(--white);
  flex-shrink: 0;
`;
const StyledBtn = styled(StyledButton)<{ $cg?: string }>`
  display: flex;
  column-gap: ${({ $cg }) => $cg};
  align-content: center;
  flex-wrap: wrap;
`;
