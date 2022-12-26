import { HTMLAttributes } from "react";

export interface ContainerProps {
  width: string;
  height: string;
}

export interface StyledImageProps extends HTMLAttributes<HTMLImageElement> {
  loaded: boolean;
}

export type Status = { loaded: boolean; error: boolean };

export interface Props extends HTMLAttributes<HTMLImageElement> {
  Fallback?: string;
  source?: string;
  altText?: string;
  height?: string;
  width?: string;
  loaderClassName?: string;
}
