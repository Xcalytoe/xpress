import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  background: var(--white);
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid var(--border_5);
  margin-top: 32px;
  overflow-x: auto;
`;
export const StyledTd = styled.td`
  text-align: left;
  padding: 21px 0;
  color: var(--primary-text);
  font-family: var(--Primary-font);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid var(--border_5);
`;
// const StyledTbody = styled.tbody`
//   padding: 0 24px;
// `;
export const StyledSpan = styled.span<{
  $bg?: string;
  $color?: string;
  $p?: string;
}>`
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  padding: ${({ $p }) => $p};
  border-radius: 8px;
  display: inline-block;
`;
export const StyledTh = styled.th`
  text-align: left;
  padding: 16px 0;
  color: var(--primary-text);
  font-family: var(--Primary-font);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid var(--border_5);
`;
export const StyledTable = styled.table`
  width: 100%;
`;
