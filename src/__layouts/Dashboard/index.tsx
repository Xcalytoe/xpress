import { ReactElement, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import DashSideBar from './DashSideBar';
import {
  StyledDiv,
  StyledFlex,
  StyledFlexItem,
} from '../../components/__styles/ui-block.style';
import DashNavBar from './DashNavBar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const DashboardLayout = ({
  children,
  title,
}: {
  title: ReactNode;
  children: ReactElement;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   Navigation hook
  const navigate = useNavigate();

  // Check auth status
  const { token } = useSelector((root: RootState) => root.authModel);
  useEffect(() => {
    // Redirect to login if unauthenticated
    if (typeof window !== 'undefined' && !token) {
      navigate('/auth/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div>
      <StyledLayout $cg="1px">
        <StyledAside as="aside" $mwidth="256px" $grow="true" $basis="256px">
          <StyledAsideFlex $fdirection="row">
            {/* ASIDE WEB  */}
            <StyledAsideWeb $isOpen={isMenuOpen}>
              <DashSideBar />
            </StyledAsideWeb>
            {/* Mobile overlay  */}
            <StyledOverlay
              $isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(false)}
            />
          </StyledAsideFlex>
        </StyledAside>

        <StyledMain as="main" $grow="true" $basis="400px">
          <DashNavBar title={title} handleMenu={() => setIsMenuOpen(true)} />
          {children}
        </StyledMain>
      </StyledLayout>
    </div>
  );
};

export default DashboardLayout;
// const StyledBtn = styled(StyledButton)`
//   display: flex;
//   align-items: center;
// `;

const StyledAside = styled(StyledFlexItem)`
  box-shadow: var(--shadow);
  min-height: 100vh;
  background: var(--white);
  padding: 40px 24px;

  @media only screen and (max-width: 800px) {
    min-height: unset;
    position: fixed;
    bottom: 0;
    width: 100%;
    border: none;
    max-width: 100% !important;
    background: var(--white);
    padding: 0 24px;
    border-top: 1px solid var(--border);
    z-index: 1000;
  }
  @media only screen and (max-width: 370px) {
    padding: 0 20px;
  }
`;
const StyledAsideWeb = styled(StyledDiv)<{ $isOpen: boolean }>`
  width: 100%;
  display: block !important;

  @media only screen and (max-width: 800px) {
    /* display: none !important; */
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')} !important;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    max-width: 270px;
    padding: 40px 24px;
  }
`;
const StyledOverlay = styled.div<{ $isOpen: boolean }>`
  display: none !important;
  @media only screen and (max-width: 800px) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')} !important;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: var(--overlay);
  }
`;
const StyledAsideFlex = styled(StyledFlex)``;
const StyledLayout = styled(StyledFlex)`
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const StyledMain = styled(StyledFlexItem)`
  /* padding: 32px; */
  background: var(--background-primary_3);
  overflow-y: scroll;
  height: 100vh;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  @media only screen and (max-width: 800px) {
    padding-bottom: 100px;
    z-index: 0;
    flex-basis: 1000px;
  }
`;
