import styled from 'styled-components';

export const InputStyle = styled.div<{
  color?: string;
  height?: string;
  margin?: string;
  padding?: string;
  disabled?: boolean;
}>`
  label,
  & .label {
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: normal;
    color: ${({ color }) => (color ? color : 'var(--primary-text)')};
    margin-bottom: 8px;
  }
  input {
    height: ${({ height }) => (height ? height : '40px')};
    padding: ${({ padding }) => (padding ? padding : '0px 12px')};
    border: 1px solid var(--border);
    border-radius: 6px;
    width: 100%;
    background: ${({ disabled }) =>
      disabled ? 'var(--background-primary_3)' : 'var(--white)'};
    transition: all 0.3s;
    /* box-shadow: var(--shadow_2); */

    &:hover,
    &:focus {
      transition: all 0.2s;
      border: 1px solid
        ${({ disabled }) =>
          !disabled ? 'var(--primary-text)' : 'var(--border)'};
    }
    &::placeholder {
      font-family: var(--Primary-font);
    }
    &:focus {
      outline: none;
      box-shadow: none;
    }
    /* hide number arrow  */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    /* Firefox */
    -moz-appearance: textfield;
  }

  .error {
    &-input {
      border: 1px solid var(--danger);
      border-radius: 4px;
      &:hover,
      &:focus {
        border: 1px solid var(--danger);
      }
    }
  }

  &.button {
    button {
      width: 100%;
      height: 50px;
      border-radius: 5px;
      font-style: normal;
      font-weight: 450;
      font-size: 16px;
      line-height: 20px;
      color: var(--white);
    }
  }
  /* Change autocomplete styles in WebKit */
  input:-webkit-autofill,
/* input:-webkit-autofill:hover, */
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
/* textarea:-webkit-autofill:hover, */
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
/* select:-webkit-autofill:hover, */
select:-webkit-autofill:focus {
    /* border: none !important; */
    -webkit-text-fill-color: unset !important;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
    box-shadow: 0 0 0px 1000px #fff inset !important;
    background-color: #fff !important;
    transition: background-color 5000s ease-in-out 0s !important;
  }
`;
