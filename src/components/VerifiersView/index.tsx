import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import {
  StyledButton,
  StyledFlex,
  StyledFlexItem,
} from '../__styles/ui-block.style';
import SelectInput from '../shared/form/Select';
import SearchInput from '../shared/form/SearchInput';
import plusIcon from '../../assets/images/plus-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../redux/store';
import VerifiersTable from '../tables/Verifiers';

const VerifiersView = () => {
  const dispatch = useDispatch<Dispatch>();

  const { verifiers } = useSelector((root: RootState) => root.generalModel);

  //   const isLoading = useSelector(
  //     (root: RootState) => root.loading.effects.generalModel.getVerifiers
  //   );

  //   Fetch verifiers if it does not exixt
  useEffect(() => {
    !verifiers && dispatch.generalModel.getVerifiers();
  }, [dispatch.generalModel, verifiers]);

  return (
    <StyledContainer>
      <StyledHeader
        $cg="16px"
        $rg="16px"
        $flexW="wrap"
        $justify="space-between"
      >
        <StyledFlexItem $mwidth="212px" $basis="147px" $grow="1">
          <SelectInput
            isClearable={false}
            defaultVal={options[0]}
            name="state"
            options={options}
            onChange={(event: any) => {
              const val = event?.value;
              console.log(val);
            }}
          />
        </StyledFlexItem>
        <StyledFlexItem $grow="1" $mwidth="424px" $basis="338px">
          <StyledFlex $cg="16px" $rg="16px" $flexW="wrap" $align="center">
            <StyledFlexItem $mwidth="240px" $basis="160px" $grow="1">
              <SearchInput />
            </StyledFlexItem>
            <StyledBtn
              $bg="var(--background-primary) !important"
              $color=" var(--white) !important"
            >
              <img src={plusIcon} alt="plus" />
              Add New Verifier
            </StyledBtn>
          </StyledFlex>
        </StyledFlexItem>
      </StyledHeader>
      {/* Table section  */}
      <VerifiersTable />
    </StyledContainer>
  );
};

export default VerifiersView;

const StyledBtn = styled(StyledButton)`
  display: inline-flex;
  align-items: center;
  column-gap: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 4px;
  padding: 12px;
`;
const StyledHeader = styled(StyledFlex)`
  .select {
    &__control {
      cursor: pointer;
    }
    &__indicator-separator {
      display: none;
    }
  }
`;
export const StyledContainer = styled.div`
  padding: 32px;
`;

const options = [
  { value: '', label: 'All' },
  { value: 'active-verifiers', label: 'Active Verifiers' },
  { value: 'pending-verifiers', label: 'Pending Verifiers' },
  { value: 'deactivated-erifiers', label: 'Deactivated Verifiers' },
];