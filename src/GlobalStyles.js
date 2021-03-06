import styled, { createGlobalStyle, css } from "styled-components";

const ResetDefault = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    border: 0;
    vertical-align: baseline;
  }

  /**
  * 1. Correct text resizing oddly in IE 6/7 when body font-size is set using
  *    em units.
  * 2. Prevent iOS text size adjust after orientation change, without disabling
  *    user zoom.
  */

  html {
    height: 100%;
    font-size: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -ms-text-size-adjust: 100%; /* 2 */
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    font-weight: 700;
    /* &:first-letter {
      text-transform: uppercase;
    } */
  }

  i {
    vertical-align: middle;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
    transition: color 200ms ease-in-out;

    &:focus {
      outline: none;
      transition: color 200ms ease-in-out;
    }
    &:active,
    &:hover {
      outline: 0;
      transition: color 200ms ease-in-out;
    }
  }

  svg {
    transition: transform 200ms ease-in-out;

    path,
    circle {
      transition: stroke 200ms ease-in-out, fill 200ms ease-in-out;
    }
    &:hover {
      transition: transform 200ms ease-in-out;
      path,
      circle {
        transition: stroke 200ms ease-in-out, fill 200ms ease-in-out;
      }
    }
    &:active {
      transition: transform 200ms ease-in-out;
    }
  }

  input,
  textarea:focus {
    outline: 0;
  }

  button:focus {
    cursor: pointer;
    outline: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  /**
  * Remove most spacing between table cells.
  */

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input[type="search"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
  }

  /**
  * 1. Remove border when inside a element in IE 6/7/8/9 and Firefox 3.
  * 2. Improve image quality when scaled in IE 7.
  */

   img {
    border: 0; /* 1 */
    -ms-interpolation-mode: bicubic; /* 2 */
    /* max-width: 100%; */
  }

  /**
  * 1. Correct font size not being inherited in all browsers.
  * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,
  *    and Chrome.
  * 3. Improve appearance and consistency in all browsers.
  */

  button,
  input,
  select,
  textarea {
    font-size: 100%; /* 1 */
    margin: 0; /* 2 */
    vertical-align: baseline; /* 3 */
    *vertical-align: middle; /* 3 */
  }

  /**
  * Address Firefox 3+ setting line-height on input using !important in
  * the UA stylesheet.
  */

  button,
  input {
    line-height: normal;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /**
  * 1. Remove default vertical scrollbar in IE 6/7/8/9.
  * 2. Improve readability and alignment in all browsers.
  */

  textarea {
    overflow: auto; /* 1 */
    vertical-align: top; /* 2 */
  }
`;
const Typography = css`
  body {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) =>theme.fontSize.sm};
    font-family: "Poppins Regular";
    font-style: normal;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: normal;
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins Medium";
    font-weight: 700;
    line-height: 1.2;
    /* &::first-letter {
      text-transform: uppercase;
    } */
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSize.re};
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
  


  p {
    font-family: "Poppins Regular";
    font-weight: 400;
    font-size: 23px;
    /* &::first-letter {
      text-transform: uppercase;
    } */
  }

  @media screen and (max-width: 1300px) {
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xll};
  }
  h4 {
    font-size: ${({ theme }) => theme.fontSize.re};
  }
  p {
      font-size: ${({ theme }) => theme.fontSize.re};
    }
}
  @media screen and (max-width: 768px) {
    p {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
}

  button,
  .btn,
  a {
    line-height: 100%;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 48px;
  width: 100%;
  max-width: 1320px;
  @media screen and (max-width: 766px) {
    padding: 0 16px;
  }
  @media screen and (max-width: 1024px) {
  }

`
export const ButtonStarted = styled.button`
    color: ${({theme}) => theme.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.color.primary};
    padding: 12px 16px;
    font-family: 'Poppins Medium';
    border-radius: 2px;
`

export const GlobalStyles = createGlobalStyle`
  ${ResetDefault}
  ${Typography}
`;
