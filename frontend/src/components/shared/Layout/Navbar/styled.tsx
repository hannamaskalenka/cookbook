/* eslint-disable import/prefer-default-export */
import { styled } from '@mui/material/styles';
import {
  AppBar as MUIAppbar,
  Button as MUIButton,
  Box as MUIBox,
} from '@mui/material';

export const Navigation = styled(MUIAppbar)`
  display: flex;
  justify-content: start;
  align-items: start;
  padding-inline-end: 3rem;
  padding-block: 0.75rem;
  width: 100%;
  background-color: transparent;
  box-shadow: none;
`;
export const Button = styled(MUIButton)`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.typography.regular.fontFamily};
  color: ${({ theme }) => theme.palette.common.white};
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.background.paper};
  }
`;
export const DropdownWrapper = styled(MUIBox)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Dot = styled(MUIBox)`
  width: 0.65rem;
  height: 0.65rem;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 50rem;
`;
export const LinkContainer = styled(MUIBox)`
  border: 2px solid red;
`;
