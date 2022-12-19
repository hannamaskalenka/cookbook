/* eslint-disable import/prefer-default-export */
import { styled } from '@mui/material/styles';
import { Button as MUIButton } from '@mui/material';

export const StyledButton = styled(MUIButton)`
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.9rem 3.5rem;
  cursor: pointer;
`;
