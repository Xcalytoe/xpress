import { ReactElement, ReactNode, useEffect } from 'react';
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
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Close mobile menu

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   // Attach the resize event listener
  //   window.addEventListener('resize', handleResize);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []); // Empty dependency array to run the effect only once on mount

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
            <StyledAsideWeb>
              <DashSideBar />
            </StyledAsideWeb>
          </StyledAsideFlex>
        </StyledAside>

        <StyledMain as="main" $grow="true" $basis="400px">
          <DashNavBar title={title} />
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
const StyledAsideWeb = styled(StyledDiv)`
  width: 100%;
  @media only screen and (max-width: 800px) {
    display: none !important;
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
