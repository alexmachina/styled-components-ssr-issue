import styled from "styled-components";
import { useState, useEffect } from "react";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ color }) => color};
`;

export default function Home() {
  const computedColor = process.browser ? "green" : "red";
  const [color, setColor] = useState(computedColor);

  useEffect(() => {
    setColor(computedColor);
  }, []);

  return <Title color={color}>I'm expecting to be {color}</Title>;
}
