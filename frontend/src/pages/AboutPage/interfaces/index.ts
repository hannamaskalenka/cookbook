export interface CardProps {
  name: string;
  content: string;
  picture?: React.ReactNode;
  interests: string[];
  isAlternative: boolean;
}
