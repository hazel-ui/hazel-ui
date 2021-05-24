import styled from "styled-components";
import { Color, MediaQuery, Theme } from "../../foundation";

// <table>
export const TableContainer = styled.table`
  /* enable scroll on small width */
  display: block;
  overflow: auto;
  border-collapse: collapse;

  /* width */
  ::-webkit-scrollbar {
    height: 0.6rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${Color.gray5};
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: ${Color.gray20};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${Color.gray30};
  }
`;

export const Th = styled.th`
  font-family: ${Theme.font.sansSerif};
  font-weight: ${Theme.fontWeight.bold};
  line-height: 1.29;

  height: 100px;
  min-width: 142px;
  padding: 0px 27px;
  background-color: ${Color.gray40};
  border-bottom: 1px solid rgba(230, 230, 250, 0.7);

  font-size: 0.9rem;
  text-align: right;

  &:nth-of-type(1) {
    font-size: 1.125rem;
    text-align: left;

    /* make first column header sticky */
    left: 0;
    position: sticky;
  }

  ${MediaQuery.maxWidth.mobile} {
    &:nth-of-type(1) {
      box-shadow: 6px 0px 25px 0px ${Color.gray10};
    }
  }
`;

export const Td = styled.td`
  font-family: ${Theme.font.sansSerif};
  padding: 20px 27px;

  font-weight: ${Theme.fontWeight.regular};
  text-align: right;

  &:nth-of-type(1) {
    font-weight: ${Theme.fontWeight.bold};
    text-align: left;

    /* make first column body sticky */
    left: 0;
    position: sticky;
  }

  ${MediaQuery.maxWidth.mobile} {
    &:nth-of-type(1) {
      box-shadow: 6px 0px 25px 0px ${Color.gray10};
      clip-path: inset(0px -30px 0px 0px);
    }
  }
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) td {
    background-color: ${Color.gray10};
  }

  &:nth-of-type(even) td {
    background-color: ${Color.gray20};
  }
`;

export const TrHead = styled.tr`
  padding: 0px 27px;
`;
