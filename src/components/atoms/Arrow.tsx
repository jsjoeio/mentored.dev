import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  path {
    fill: ${props => (props.color ? props.theme[props.color].main : props.theme.primary.main)};
  }
`;

const Arrow: React.FC<{ color: string; direction: string }> = ({ color, direction }) => (
  <SVG color={color} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    {direction === "right" && (
      <path d="M22.7958 9.79582C23.2353 9.3563 23.2353 8.6437 22.7958 8.20418L15.6334 1.04178C15.1939 0.602255 14.4813 0.602255 14.0418 1.04178C13.6023 1.4813 13.6023 2.1939 14.0418 2.63342L20.4084 9L14.0418 15.3666C13.6023 15.8061 13.6023 16.5187 14.0418 16.9582C14.4813 17.3977 15.1939 17.3977 15.6334 16.9582L22.7958 9.79582ZM0 10.1255L22 10.1255V7.87454L0 7.87454L0 10.1255Z" />
    )}
    {direction === "left" && (
      <path d="M1.20418 8.20418C0.764657 8.6437 0.764657 9.3563 1.20418 9.79582L8.36658 16.9582C8.8061 17.3977 9.5187 17.3977 9.95822 16.9582C10.3977 16.5187 10.3977 15.8061 9.95822 15.3666L3.59164 9L9.95822 2.63342C10.3977 2.1939 10.3977 1.48129 9.95823 1.04177C9.5187 0.602254 8.8061 0.602254 8.36658 1.04177L1.20418 8.20418ZM24 7.87454L2 7.87454L2 10.1255L24 10.1255L24 7.87454Z" />
    )}
  </SVG>
);

export default Arrow;
