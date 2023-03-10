export interface CardProps {
  name: string;
  content: string;
  picture?: React.ReactNode;
  interests: { first: string; second: string; third: string };
}
