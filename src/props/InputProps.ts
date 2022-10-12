import { InputHTMLAttributes, ReactNode } from "react";

export interface InputContainerProps {
  children: ReactNode;
}

export interface InputIconProps {
  children: ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
