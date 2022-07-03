//MUI
import { styled, Box } from '@mui/material';

//Constants
import { TRUE_BLUE } from 'constants/colors';
import { BUBBLES_TEXT_STYLING } from 'constants/constants';
import { DEFAULT_SIZES } from 'constants/enum';

//Components
import { DefaultText } from '../Text/Text.styles';

export const Wrapper = styled(Box)(
  ({
    width,
    height,
    type,
  }: {
    width?: string;
    height?: string;
    type?: DEFAULT_SIZES;
  }) => ({
    ...(type ? BUBBLES_TEXT_STYLING[type].container : {}),
    display: 'flex',
    flexDirection: 'row',
    width,
    height,
    alignItems: 'center',
    gap: 16,
    ':hover': {
      '> p': {
        color: 'white',
      },
      '> div': {
        '*': {
          color: TRUE_BLUE,
        },
      },
    },
  }),
);

export const MainText = styled(DefaultText)(
  ({ reverse, type }: { reverse?: boolean; type?: DEFAULT_SIZES }) => ({
    fontWeight: 400,
    fontFamily: 'Roboto Regular',
    fontSize: 24,
    maxWidth: 210,
    textTransform: 'uppercase',
    order: reverse ? 2 : 0,
    ...(type ? BUBBLES_TEXT_STYLING[type].subtext : {}),
  }),
);
