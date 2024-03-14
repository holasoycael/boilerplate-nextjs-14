import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const statusModifiers = {
  disabled: css`
    & ~ label::after {
      background-color: #ddd;
    }
  `,
  default: css`
    & ~ label::after {
      background-color: #aebcca;
    }
  `
}

type StatusProps = {
  isDisabled: boolean
}

export const Status = styled.input<StatusProps>`
  ${({ isDisabled }) => css`
    ${isDisabled ? statusModifiers.disabled : statusModifiers.default}

    &:checked ~ label::before {
      color: #fff;
      border-color: rgba(25, 145, 107, 0.3);
      background-color: rgba(25, 145, 107, 0.6);
    }

    &:checked ~ label::after {
      background-color: #fff;
      transform: translateX(1.75rem);
    }

    & ~ label::after {
      border-radius: 1.5rem;
      -webkit-transition:
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out,
        -webkit-transform 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
      transition:
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out,
        -webkit-transform 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
      transition:
        transform 0.15s ease-in-out,
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
      transition:
        transform 0.15s ease-in-out,
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out,
        -webkit-transform 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
    }

    &:not(:disabled):active ~ label::before {
      color: #fff;
      border-color: #75e7c3;
      background-color: #75e7c3;
    }

    &:focus:not(:checked) ~ label::before {
      border-color: #4ae0b0;
    }

    &:focus ~ label::before {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(25, 145, 107, 0.25);
      box-shadow: 0 0 0 0.2rem rgba(25, 145, 107, 0.25);
    }
  `}
`

const labelModifiers = {
  disabled: css`
    &::before {
      background-color: #f3f3f3;
      border: #ddd solid 1px;
    }
  `,
  default: css`
    &::before {
      background-color: #fff;
      border: #aebcca solid 1px;
    }
  `
}

type LabelProps = {
  useMargin: boolean
  isDisabled: boolean
}

export const Label = styled.label<LabelProps>`
  ${({ isDisabled, useMargin }) => css`
    color: rgba(0, 0, 0, 0.65);
    font-weight: 700;
    font-size: 1.25rem;
    font-family: var(--font-lato);
    font-style: italic;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    float: left;

    ${isDisabled ? labelModifiers.disabled : labelModifiers.default}

    &::before {
      pointer-events: all;
      border-radius: 1.8rem;
      margin-right: ${useMargin && '1.2rem'};
      float: left;
    }

    &::before {
      -webkit-transition:
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
      transition:
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
      transition:
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
      transition:
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
    }

    &::before {
      display: block;
      width: 4rem;
      height: 2rem;
      pointer-events: none;
      content: '';
    }

    &::after {
      content: '';
      position: absolute;
      top: 0.3rem;
      left: 0.3rem;
      display: block;
      width: 1.6rem;
      height: 1.4rem;
      background: no-repeat 50% / 50% 50%;
    }
  `}
`
