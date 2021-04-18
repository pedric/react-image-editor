import styled from "styled-components";

export const Input = styled.input`
  display: block;
  width: 90%;
  margin: 32px auto;
  background: transparent;
  appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: #000;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    // border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
    margin-top: -8px;
  }

  &::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: #5f5f5f;
    border-radius: 1.3px;
    border: none;
  }

  &::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: #5f5f5f;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
`;

export const LabelWrapper = styled.div`
  padding: 8px 0;
  font-family: sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  width: 90%;
  margin: 4px auto;
  border-bottom: 1px solid var(--color);
`;
