import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

// `
//   border-radius: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 0.5rem;
//   padding: 0.9rem 3.5rem;
//   cursor: pointer;
// `;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: '40px',
      padding: '8px',
    },
    label: {
      fontSize: '14px',
      color: theme.palette.text.secondary,
    },
    secondary: {
      color: 'red',
    },
  }),
);

export default useStyles;
