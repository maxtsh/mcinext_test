import styled from "styled-components";
import type { ContainerProps, StyledImageProps } from "./Image.types";

export const Container = styled.div<ContainerProps>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IMG = styled.img<StyledImageProps>`
  display: ${(p) => (p.loaded ? "block" : "none")};
`;

export default IMG;
