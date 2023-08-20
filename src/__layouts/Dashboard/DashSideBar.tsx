import React from 'react';
import Logo from '../../components/shared/Logo';
import { StyledFlex } from '../../components/__styles/ui-block.style';
import { useLocation } from 'react-router-dom';
import { DASHBOARD_LINKS } from '../../navigations';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { ParagraphText } from '../../components/__styles/global.style';

const DashSideBar = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <StyledFlex $justify="center">
        <Logo />
      </StyledFlex>
      <StyledNav>
        {DASHBOARD_LINKS.map(({ SLUG, TITLE, LINK, ICON }) => {
          const isActive = pathname === LINK;
          return (
            <Link key={SLUG} to={LINK}>
              <StyledLink $cg="16px" $align="center" $isActive={isActive}>
                {ICON(isActive)}
                <ParagraphText
                  $fsize="14px"
                  $lh="20px"
                  $fw="400"
                  $color={
                    isActive
                      ? 'var( --background-primary)'
                      : 'var(--primary-text)'
                  }
                >
                  {TITLE}
                </ParagraphText>
                {/* Active border   */}
                {isActive && <StyledBorder />}
              </StyledLink>
            </Link>
          );
        })}
      </StyledNav>
    </div>
  );
};

export default DashSideBar;

const StyledLink = styled(StyledFlex)<{ $isActive: boolean }>`
  padding: 14px 24px;
  margin-bottom: 16px;
  position: relative;
  transition: all 0.3s;
  border-radius: 8px;
  background: ${({ $isActive }) =>
    $isActive ? 'var(--btn-text-hover)' : 'var(--white)'};
`;
const StyledBorder = styled.div`
  position: absolute;
  background: var(--background-primary);
  width: 4px;
  left: 0;
  height: 100%;
  border-radius: 8px 0 0 8px;
`;
const StyledNav = styled.div`
  padding-top: 50px;
`;
