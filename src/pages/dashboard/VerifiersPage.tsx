import React, { useEffect } from 'react';
import Layout from '../../__layouts/Dashboard';
import { StyledFlex } from '../../components/__styles/ui-block.style';
import {
  HeadingText,
  ParagraphText,
} from '../../components/__styles/global.style';
import { styled } from 'styled-components';
import VerifiersView from '../../components/VerifiersView';
import { Dispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

const Verifiers = () => {
  const dispatch = useDispatch<Dispatch>();
  const { verifiers } = useSelector((root: RootState) => root.generalModel);
  const verifiersCount = verifiers ? verifiers.length : '0';

  //   Fetch verifiers if it does not exixt
  useEffect(() => {
    !verifiers && dispatch.generalModel.getVerifiers();
  }, [dispatch.generalModel, verifiers]);

  const title = (
    <StyledFlex $cg="8px" $align="center">
      <HeadingText
        $fsize="24px"
        $lh="20px"
        $fw="700"
        $color="var(--primary-text)"
      >
        Verifiers
      </HeadingText>
      <StyledCount
        $fsize="12px"
        $lh="137.988%"
        $fw="400"
        $color="var(--background-primary)"
      >
        {verifiersCount}
      </StyledCount>
    </StyledFlex>
  );
  return (
    <Layout title={title}>
      <VerifiersView />
    </Layout>
  );
};

export default Verifiers;
const StyledCount = styled(ParagraphText)`
  background: var(--btn-text-hover);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  border-radius: 50%;
  height: 28px;
  width: 28px;
`;
