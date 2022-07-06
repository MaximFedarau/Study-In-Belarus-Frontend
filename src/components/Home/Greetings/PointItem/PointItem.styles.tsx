//Types
import { STYLING_SIZES } from 'types/enum';

//MUI
import { styled } from '@mui/material';

//Constants
import { mobileCSS } from 'utils/mobileCSS';

export const IconWrapper = styled('div')({
  width: '100%',
  height: '100%',
  maxWidth: 133,
  maxHeight: 133,
  ...mobileCSS(STYLING_SIZES.LARGE_TABLET, {
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
