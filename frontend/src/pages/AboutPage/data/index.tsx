import AnnaImg from 'shared/assets/images/anna';
import HannaImg from 'shared/assets/images/hanna';

export const CardsData = [
  {
    id: 1,
    name: 'Hanna Maskalenka',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    picture: <HannaImg width="100%" />,
    interests: {
      first: 'cooking',
      second: 'reading',
      third: 'music',
    },
  },
  {
    id: 2,
    name: 'Anna Kawecka',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    picture: <AnnaImg width="100%" />,
    interests: {
      first: 'cooking',
      second: 'podcasts',
      third: 'reading',
    },
  },
];
