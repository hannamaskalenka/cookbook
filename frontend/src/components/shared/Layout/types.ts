import { ReactNode } from 'react';

export interface LayoutProps {
  children?: ReactNode;
}

export interface MatchMediaProps {
  media: string;
}

export interface ChildrenCallback {
  children: (arg?: any) => ReactNode;
}
