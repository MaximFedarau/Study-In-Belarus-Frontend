//MUI
import { styled } from '@mui/material';

//Constants
import { largeTabletCSS } from 'utils/styles/largeTabletCSS';

export const IconWrapper = styled('div')({
  width: '100%',
  height: '100%',
  maxWidth: 133,
  maxHeight: 133,
  ...largeTabletCSS({
    background: 'white',
    borderRadius: '50%',
    padding: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform .5s ease-in, box-shadow .5s ease-in',
  }),
  '@media screen and (max-width: 319px)': {
    maxWidth: 50,
    maxHeight: 50,
  },
});
