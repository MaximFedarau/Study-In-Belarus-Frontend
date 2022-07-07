//MUI
import { styled } from '@mui/material';

//Constants
import { largeTabletCSS } from 'utils/styles/largeTabletCSS';
import { smallMobileCSS } from 'utils/styles/smallMobileCSS';

export const IconWrapper = styled('div')({
  width: '100%',
  height: '100%',
  maxWidth: 133,
  maxHeight: 133,
  ...largeTabletCSS({
    maxHeight: '13vw',
    maxWidth: '13vw',
    background: 'white',
    borderRadius: '50%',
    padding: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform .5s ease-in, box-shadow .5s ease-in',
  }),
  ...smallMobileCSS({
    maxWidth: 50,
    maxHeight: 50,
  }),
});
