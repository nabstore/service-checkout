import styled from "styled-components";

const Title = styled.h1`
  font-size: 96px;
  font-weight: 800;
  line-height: 128px;
  color: #2f2f2f;
  font-family: Open Sans;
`;

const Subtitle = styled.h2`
  font-family: Open Sans;
  font-size: 89px;
  font-style: normal;
  font-weight: 600;
  line-height: 119px;
  letter-spacing: -0.04em;
  text-align: left;
  color: #585757;
`;
const Button = styled.button`
  font-family: Open Sans;
  margin-top: 100px;
  height: 54px;
  width: 462px;
  left: 245px;
  top: 692px;
  border-radius: 9px;
  border: 2px solid #212223;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #212223;
    color: #ffffff;
    border: none;
    transition: 0.5s;
  }
`;

const Text = styled.p`
  font-family: Open Sans;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.04em;
  text-align: left;
  color: #585757;
`;

export { Button, Subtitle, Text, Title };
