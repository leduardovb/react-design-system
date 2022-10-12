import { ReactNode } from 'react';

export interface HeadingProps {
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}
