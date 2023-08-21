import React from 'react';
import styled from 'styled-components';
import fileIcon from '../../../assets/images/fileicon.svg';
import uploadIcon from '../../../assets/images/upload.svg';
import InputError from './InputError';
import { StyledDiv, StyledFlex } from '../../__styles/ui-block.style';
import { ParagraphText } from '../../__styles/global.style';

interface IFormInput {
  name: string;
  placeholder: string;
  accept: string;
  errors?: { message?: string };
  errId: string;
  height?: string;
  mWidth?: string;
  onChange: (
    eevent: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  type?: string;
  value: string;
}

const FileUpload = ({
  name,
  height,
  placeholder,
  accept,
  onChange,
  errors,
  errId,
  type,
  mWidth,
  value,
}: IFormInput) => {
  return (
    <>
      <StyledLabel>
        <StyledInput
          onChange={onChange}
          accept={accept}
          id={name}
          type="file"
        />
        <>
          <InpputText height={height} mWidth={mWidth}>
            <StyledDiv $textAlign="center" $mt={value ? '50px' : '0'}>
              <StyledIcon>
                <img src={uploadIcon} alt="Upload Icon" />
              </StyledIcon>
              {value && (
                <ParagraphText
                  $fw="400"
                  $fsize="14px"
                  $lh="20px"
                  $mt="10px"
                  $color="var(--secondary-text_2)"
                >
                  {value}
                </ParagraphText>
              )}
              {/* For empty field  */}
              {!value && (
                <StyledDiv>
                  <ParagraphText
                    $fw="400"
                    $fsize="12px"
                    $ff="var(--Secondary-font)"
                    $lh="148%"
                    $color="var(--primary-dark)"
                    $mt="12px"
                    $mb="22px"
                  >
                    {placeholder}
                  </ParagraphText>
                  <StyledBadge>
                    <img src={fileIcon} alt="file" />
                    Choose file
                  </StyledBadge>
                  <ParagraphText
                    $fw="400"
                    $fsize="14px"
                    $ff="var(--Secondary-font)"
                    $lh="140%"
                    $mt="24px"
                    $color="var(--secondary-text_2)"
                  >
                    {type}
                  </ParagraphText>
                </StyledDiv>
              )}
            </StyledDiv>
          </InpputText>
        </>
      </StyledLabel>
      {errors && <InputError errId={errId} message={errors?.message} />}
    </>
  );
};

export default FileUpload;

const StyledBadge = styled(StyledFlex)`
  column-gap: 8px;
  font-family: var(--Secondary-font);
  color: var(--white);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  border-radius: 4px;
  display: inline-flex;
  padding: 4px 12px;
  background: var(--background-primary);
`;
const StyledIcon = styled.div``;

const StyledLabel = styled.label`
  position: relative;
  width: 100%;
`;

const InpputText = styled(StyledDiv)<{ height?: string; mWidth?: string }>`
  border: 1px dashed var(--border_2);
  border-radius: 4px;
  min-height: ${({ height }) => (height ? height : '126px')};
  cursor: pointer;
  column-gap: 8px;
  min-width: ${({ mWidth }) => (mWidth ? mWidth : '375px')};
  padding-top: 16px;
  padding-bottom: 16px;
  @media only screen and (max-width: 425px) {
    min-width: ${({ mWidth }) => (mWidth ? mWidth : '290px')};
  }
  @media only screen and (max-width: 375px) {
    min-width: ${({ mWidth }) => (mWidth ? mWidth : '230px')};
  }
`;
const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: -2000px;
  opacity: 0;
  width: 100%;
  height: 100%;
`;
