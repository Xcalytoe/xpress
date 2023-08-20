// import Logo from '@/components/shared/Logo';
// import {
//   StyledButton,
//   StyledDiv,
//   StyledFlex,
// } from '@/components/__style/ui-block.style';
// import { CartIcon } from 'constants/svgs';
// import { useDispatch, useSelector } from 'react-redux';
// import styled from 'styled-components';
// import SearchIcon from '../../../public/assets/images/search.svg';
// import { Dispatch, RootState } from '../../../redux/store';

// const DashNavBar = () => {
//   // HANDLE CART TOGGLE
//   const dispatch = useDispatch<Dispatch>();
//   const handleCartTogle = () => {
//     dispatch.cartModel.toggleCart();
//   };
//   // CART DATA
//   const { cart } = useSelector((root: RootState) => root.cartModel);
//   const isCartActive = cart && Object.values(cart).length === 0;

//   return (
//     <StyledHeader as="header" p="16.5px 32px">
//       <StyledFlex justify="space-between" align="center" cg="30px">
//         <Logo />
//         <StyledFlex cg="20px">
//           <StyledButton>
//             <SearchIcon />
//           </StyledButton>
//           <StyledButton onClick={handleCartTogle}>
//             <CartIcon isActive={!isCartActive} />
//           </StyledButton>
//         </StyledFlex>
//       </StyledFlex>
//     </StyledHeader>
//   );
// };

// export default DashNavBar;

// const StyledHeader = styled(StyledDiv)`
//   position: -webkit-sticky;
//   position: sticky;
//   top: 0;
//   z-index: 200;
//   background: var(--white);
//   border-bottom: 1px solid var(--border);
//   @media only screen and (max-width: 375px) {
//     padding: 13px 11px;
//   }
// `;
import React, { ReactNode } from 'react';
import { StyledFlex } from '../../components/__styles/ui-block.style';
import { HeadingText } from '../../components/__styles/global.style';
import { styled } from 'styled-components';

const DashNavBar = ({ title }: { title: ReactNode }) => {
  return (
    <StyledHeader $justify="space-between">
      {title}
      <HeadingText
        $fsize="14px"
        $lh="20px"
        $fw="700"
        $spacing="1px"
        $color="var(--primary-text)"
        $mb="30px"
      ></HeadingText>
    </StyledHeader>
  );
};

export default DashNavBar;
const StyledHeader = styled(StyledFlex)`
  padding: 22px 32px;
  background: var(--white);
  flex-shrink: 0;
`;
