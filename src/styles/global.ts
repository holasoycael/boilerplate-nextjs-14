'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
    --font-default: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    border: none;
    text-decoration: none;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  body,
  input,
  button,
  textarea {
    font: 300 1.2rem var(--font-inter);
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input[type='radio'],
  input[type='checkbox'] {
    display: none;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  html.light * {
    --primary-background: #fff;
    --secondary-background: #efefef;
    --scroll-background: rgba(0, 0, 0, 0.15);
  }

  html.dark {
    --primary-background: #1f1f23;
    --secondary-background: #1f1f23;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  button {
    background: transparent;
    font-family: var(--font-inter);
    cursor: pointer;
  }
  body {
    font-family: var(--font-inter);
    font-size: 1.2rem;
    overflow: hidden;
  }

  html.dark [role='tooltip'] {
    color: #000 !important;
    background: #fff !important;
  }

  [role='tooltip'] {
    padding: 6px 10px !important;
    border-radius: 4px !important;
    font-family: var(--font-inter);
    font-weight: 400;
    font-size: 1.1rem;
  }

  .spinner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinner__content {
    width: 40px;
    height: 40px;
    border: 6px solid #0161cd;
    border-radius: 50%;
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: spin 1s infinite;
  }

  @keyframes treo-bouncedelay {
    0%, 80%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg) scale(1.2);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes IGCoreSpinnerSpin12 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes changewidth{0%{left:-100%;opacity:0}10%{left:-100%;opacity:.2}25%{left:100%;opacity:.2}90%{opacity:0;left:100%}100%{left:-100%;opacity:0}}
`

export default GlobalStyles
