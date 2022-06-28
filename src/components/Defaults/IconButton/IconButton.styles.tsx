//MUI
import { styled, IconButton } from '@mui/material';

export const MUIIconButton = styled(IconButton)(
  ({ width, height }: { width?: number; height?: number }) => ({
    width,
    height,
    color: 'black',
  }),
);
