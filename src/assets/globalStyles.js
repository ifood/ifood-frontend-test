import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  html, #root {
    height: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    height: 100%;
    background-color: ${colors.lighter};
    color: ${colors.dark};
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    letter-spacing: -0.1px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  ::-moz-selection {
    color: ${colors.white};
    background: ${colors.primary};
  }

  ::selection {
    color: ${colors.white};
    background: ${colors.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -0.5px;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${colors.primary};
    transition: text-shadow .3s;
  }

  a, button {
    outline: none;
    text-decoration: none;
  }

  button, .button {
    background-color: ${colors.primary};
    color: ${colors.white};
    font-family: 'Inter', sans-serif;
  }

  .button-small {
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.4;
    padding: 4px 11px;
  }

  .button-large {
    border-radius: 28px;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.3;
    padding: 18px 31px;
  }

  button:hover,
  button:focus,
  a:hover,
  a:focus {
    outline: none;
    opacity: 0.85;
  }

  .button:hover {
    -webkit-text-stroke: 0.25px ${colors.white};
  }

  a:hover,
  button:hover,
  button:focus {
    -webkit-transition: all 300ms ease-out;
    -moz-transition: all 300ms ease-out;
    -o-transition: all 300ms ease-out;
    transition: all 300ms ease-out;
  }

  .more::after {
    content: '›';
    padding-left: 4px;
    font-family: 'Inter', sans-serif;
    display: inline-block;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  input {
    width: 100%;
    background: none;
    border: none;
    padding: 14px 12px;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 14px;
    font-weight: 300;
    font-family: 'Inter', sans-serif;
  }

  input, textarea, button, select, a, div {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  input[type=number] {
    -moz-appearance: textfield; /* Firefox */
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  input:read-only { color: #B7B7B7 }

  input::-ms-clear, input::-ms-reveal {
    display: none;
  }

  .select__placeholder {
    font-size: 14px;
    color: #CCCCCC !important;
  }

  .select__option, .select__single-value {
    font-size: 14px !important;
    color: ${colors.dark};
  }

  .select__control {
    box-shadow: none !important;
    border-color: #f1f1f1 !important;
  }

  .select__control--is-focused { border-color: ${colors.primary} !important; }

  .select__indicator-separator { background-color:#f1f1f1 !important; }

  .select__indicator { color: #ddd !important; }

  .select__option--is-focused {
    background-color: ${colors.primary} !important;
    color: ${colors.white} !important;
  }

  .select__option--is-selected {
    background-color: #ffd5da !important;
    color: ${colors.dark} !important;
  }

  .react-datepicker {
    border: 1px solid ${colors.lighter};
  }

  .react-datepicker__triangle { display: none; }

  .react-datepicker__navigation--previous {
    border-right-color: ${colors.primary};
  }

  .react-datepicker__navigation--previous:hover {
    border-right-color: ${colors.primary};
    opacity: 0.8;
  }

  .react-datepicker__navigation--next {
    border-left-color: ${colors.primary};
  }

  .react-datepicker__navigation--next:hover {
    border-left-color: ${colors.primary};
    opacity: 0.8;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${colors.primary} !important;
  }

  .react-datepicker__header {
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.lighter};
  }

  .react-datepicker-time__input > input {
    font-size: 13px;
    border-radius: 4px;
    border: 1px solid #aeaeae;
    line-height: 16px;
    padding: 6px 10px 5px;
  }

  @keyframes autofill {
    to {
      color: #000000;
      background: none;
    }
  }

  input:-webkit-autofill {
    animation-name: autofill;
    animation-fill-mode: both;
  }

  ::-moz-focus-inner { border: 0 }

  ::-webkit-input-placeholder { color: #CCCCCC }

  :-moz-placeholder {
    color: #CCCCCC;
    opacity:  1;
  }

  ::-moz-placeholder {
    color: #CCCCCC;
    opacity:  1;
  }

  :-ms-input-placeholder { color: #CCCCCC }

  ::-ms-input-placeholder { color: #CCCCCC }

  ::placeholder { color: #CCCCCC }

  code { font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace }
`;
