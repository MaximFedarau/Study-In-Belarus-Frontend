//Types
import { DEFAULT_SIZES } from 'constants/types/enum';

//MUI
import { styled, Box } from '@mui/material';

//Constants
import { TRUE_BLUE } from '../../../constants/constants/colors';
import { BUBBLES_TEXT_STYLING } from 'constants/constants/styles';

//Components
import { DefaultText } from '../Text/Text.styles';

export const BubbleWrapper = styled(Box)(
  ({
    width,
    height,
    type = DEFAULT_SIZES.MEDIUM,
  }: {
    width?: string;
    height?: string;
    type?: DEFAULT_SIZES;
  }) => ({
    width,
    height,
    ...BUBBLES_TEXT_STYLING[type].container,
  }),
);

export const BubbleContainer = styled(Box)(
  ({
    width,
    height,
    type = DEFAULT_SIZES.MEDIUM,
  }: {
    width?: string;
    height?: string;
    type?: DEFAULT_SIZES;
  }) => ({
    display: 'flex',
    background: 'white',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
    borderRadius: '50%',
    justifyContent: 'center',
    width: width,
    height: height,
    alignItems: 'center',
    flexDirection: 'column',
    ...BUBBLES_TEXT_STYLING[type].container,
    ':hover': {
      '*': {
        color: TRUE_BLUE,
      },
    },
  }),
);

export const BubbleText = styled(DefaultText)(
  ({
    isActive,
    type = DEFAULT_SIZES.MEDIUM,
  }: {
    isActive?: boolean;
    type?: DEFAULT_SIZES;
  }) => ({
    fontFamily: 'Roboto Regular',
    fontWeight: 700,
    fontSize: '2em',
    color: isActive ? TRUE_BLUE : 'black',
    ...BUBBLES_TEXT_STYLING[type].mainText,
  }),
);

export const BubbleSubtext = styled(DefaultText)(
  ({
    isActive,
    type = DEFAULT_SIZES.MEDIUM,
  }: {
    isActive?: boolean;
    type?: DEFAULT_SIZES;
  }) => ({
    fontFamily: 'Roboto Regular',
    fontWeight: 400,
    fontSize: '20px',
    textAlign: 'center',
    maxWidth: 150,
    color: isActive ? TRUE_BLUE : 'black',
    textTransform: 'uppercase',
    ...BUBBLES_TEXT_STYLING[type].subtext,
  }),
);
