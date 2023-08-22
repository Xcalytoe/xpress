import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import {
  StyledButton,
  StyledDiv,
  StyledFlex,
  StyledFlexItem,
} from '../__styles/ui-block.style';
import SelectInput from '../shared/form/Select';
import SearchInput from '../shared/form/SearchInput';
import plusIcon from '../../assets/images/plus-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../redux/store';
import VerifiersTable from '../tables/Verifiers';
import { HeadingText } from '../__styles/global.style';
import { Verifiers } from '../../types/general';

const VerifiersView = () => {
  const dispatch = useDispatch<Dispatch>();
  const { verifiers } = useSelector((root: RootState) => root.generalModel);

  const [filtered, setFiltered] = useState<Verifiers[]>(() => [...verifiers]);

  //   const isLoading = useSelector(
  //     (root: RootState) => root.loading.effects.generalModel.getVerifiers
  //   );

  // Filter results on select
  const handleFilter = (id: string) => {
    if (verifiers && !!id) {
      const result = verifiers.filter((item: Verifiers) => item?.status === id);
      setFiltered(result);
    } else {
      setFiltered(verifiers);
    }
  };
  //   Fetch verifiers if it does not exixt
  useEffect(() => {
    !verifiers && dispatch.generalModel.getVerifiers();
  }, [dispatch.generalModel, verifiers]);

  //   Fetch results
  const handlePopulate = () => {
    dispatch.generalModel.getVerifiers();
  };

  return (
    <StyledContainer>
      <StyledHeader
        $cg="16px"
        $rg="16px"
        $flexW="wrap"
        $justify="space-between"
      >
        <StyledFlexItem $mwidth="212px" $basis="147px" $grow="1">
          {/* TODO: Update style to fit design  */}
          <SelectInput
            isClearable={false}
            defaultVal={options[0]}
            name="state"
            options={options}
            onChange={(event: any) => {
              const val = event?.value;
              handleFilter(val);
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
      {verifiers && <VerifiersTable filteredData={filtered} />}
      {/* Empty state  */}
      {!verifiers && (
        <StyledDiv $p="100px 0" $textAlign="center">
          <HeadingText
            $fsize="24px"
            $fw="500"
            $pb="40px"
            $color="var(--primary-text)"
          >
            Your table is empty!
          </HeadingText>
          <StyledButton
            onClick={handlePopulate}
            $fsize="20px"
            $color="var(--background-primary)"
          >
            Populate
          </StyledButton>
        </StyledDiv>
      )}
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
  @media only screen and (max-width: 475px) {
    padding: 32px 15px;
  }
`;

const options = [
  { value: '', label: 'All' },
  { value: 'active', label: 'Active Verifiers' },
  { value: 'pending', label: 'Pending Verifiers' },
  { value: 'deactivate', label: 'Deactivated Verifiers' },
];
