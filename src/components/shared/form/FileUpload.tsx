import React from 'react';
import styled from 'styled-components';
import UploadIcon from '../../../assets/images/upload.svg';
import InputError from './InputError';
import { StyledDiv } from '../../__styles/ui-block.style';
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
  defaultUrl?: string;
  profile?: boolean;
}

const FileUpload = ({
  name,
  height,
  placeholder,
  accept,
  onChange,
  profile,
  errors,
  errId,
  type,
  mWidth,
  value,
  defaultUrl,
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
            <ParagraphText
              $fw="400"
              $fsize="14px"
              $lh="20px"
              $color="var(--secondary-text_2)"
            >
              {value}
            </ParagraphText>
            <StyledDiv $textAlign="center">
              <UploadIcon />
              <ParagraphText
                $fw="600"
                $fsize="16px"
                $lh="20px"
                $color="var(--secondary-text_5)"
                $mt="12px"
                $mb="4px"
              >
                {placeholder}
              </ParagraphText>
              <ParagraphText
                $fw="400"
                $fsize="12px"
                $lh="18px"
                $color="var(--secondary-text_2)"
              >
                {type}
              </ParagraphText>
            </StyledDiv>
          </InpputText>
        </>
      </StyledLabel>
      {errors && <InputError errId={errId} message={errors?.message} />}
    </>
  );
};

export default FileUpload;
const StyledImg = styled.div<{ profile?: string; height?: string }>`
  max-height: ${({ profile, height }) =>
    height ? height : profile === 'true' ? '74px' : '232px'};
  width: ${({ profile }) => profile === 'true' && '74px'};
  margin: ${({ profile }) => profile === 'true' && 'auto'};
  overflow-y: hidden;
  cursor: pointer;
  border-radius: 16px;
  height: ${({ profile }) => profile === 'true' && '74px'};
  position: relative;
  div {
    height: ${({ profile }) => profile === 'true' && '100%'};
    width: 100%;
  }
  img {
    width: 100%;
    height: ${({ profile }) =>
      profile === 'true' ? '100%' : 'auto'} !important;
    border-radius: ${({ profile }) => (profile === 'true' ? '50%' : '16px')};
    object-fit: cover;
  }
`;
const StyledIcon = styled.div<{ profile?: string }>`
  position: absolute !important;
  width: 24px !important;
  height: 24px !important;
  svg {
    scale: ${({ profile }) => profile === 'false' && '1.5'};
  }
  bottom: ${({ profile }) => (profile === 'true' ? '-2px' : '5px')};
  right: ${({ profile }) => (profile === 'true' ? '-5px' : '5px')};
`;

const StyledLabel = styled.label`
  position: relative;
  width: 100%;
  /* height: 78px; */
  /* margin-top: 25px; */
`;

const InpputText = styled(StyledDiv)<{ height?: string; mWidth?: string }>`
  border: 1px dashed var(--dash-1);
  border-radius: 6px;
  min-height: ${({ height }) => (height ? height : '126px')};
  display: flex;
  align-items: center;
  justify-content: center;
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
