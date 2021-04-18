import styled from "styled-components";

const RadioInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px auto;
  width: 90%;

  label {
    font-family: sans-serif;
    text-transform: uppercase;
    font-size: 11px;
  }

  input {
    &:checked {
      outline: dotted;
    }
  }
`;

export default RadioInput;
