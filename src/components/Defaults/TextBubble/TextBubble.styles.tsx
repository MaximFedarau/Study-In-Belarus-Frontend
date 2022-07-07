//MUI
import { styled, Box } from '@mui/material';

//Constants
import { TRUE_BLUE } from 'constants/colors';
import { BUBBLES_TEXT_STYLING } from 'constants/styles';
import { DEFAULT_SIZES } from 'types/enum';

//Components
import { DefaultText } from '../Text/Text.styles';

export const Wrapper = styled(Box)(
  ({
    width,
    height,
    type = DEFAULT_SIZES.MEDIUM,
  }: {
    width?: string;
    height?: string;
    type?: DEFAULT_SIZES;
  }) => ({
    ...BUBBLES_TEXT_STYLING[type].container,
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
  ({
    reverse,
    type = DEFAULT_SIZES.MEDIUM,
  }: {
    reverse?: boolean;
    type?: DEFAULT_SIZES;
  }) => ({
    fontWeight: 100,
    fontFamily: 'Cera Pro Light',
    fontSize: 24,
    textTransform: 'uppercase',
    order: reverse ? 2 : 0,
    ...BUBBLES_TEXT_STYLING[type].subtext,
  }),
);
