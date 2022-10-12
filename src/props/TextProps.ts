import { ReactNode } from 'react';

export interface TextProps {
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}
