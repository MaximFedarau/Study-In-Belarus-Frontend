//MUI
import { styled } from '@mui/material';

//Constants
import { TRUE_BLUE } from 'constants/colors';

import { largeTabletCSS } from 'utils/styles/largeTabletCSS';

export const MobileWave = styled('img')(
  ({ reverse }: { reverse?: boolean }) => ({
    display: 'none',
    ...largeTabletCSS({
      display: 'block',
      transform: reverse ? 'rotate(180deg)' : '',
      width: '100%',
    }),
  }),
);

export const MobileTitle = styled('h1')(
  ({ textColor, sticked }: { sticked?: boolean; textColor?: string }) => ({
    display: 'none',
    ...largeTabletCSS({
      display: 'block',
      textTransform: 'uppercase',
      fontSize: '7vw',
      textAlign: 'center',
      position: sticked ? 'sticky' : 'static',
      top: 80,
      zIndex: -1,
      color: textColor || TRUE_BLUE,
    }),
  }),
);
