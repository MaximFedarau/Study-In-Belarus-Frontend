//MUI
import { styled } from '@mui/material';

//Constants
import { TRUE_BLUE } from '../../../constants/colors';

//Components
import { DefaultText } from '../Text/Text.styles';
import { Container } from '../Container/Container.styles';

export const BubbleContainer = styled(Container)(
  ({ width, height }: { width?: string; height?: string }) => ({
    background: 'white',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
    borderRadius: '50%',
    justifyContent: 'center',
    minWidth: width,
    minHeight: height,
    ':hover': {
      '*': {
        color: TRUE_BLUE,
      },
    },
  }),
);

export const BubbleText = styled(DefaultText)(
  ({ isActive }: { isActive?: boolean }) => ({
    fontFamily: 'Roboto Regular',
    fontWeight: 700,
    fontSize: '2em',
    color: isActive ? TRUE_BLUE : 'black',
  }),
);
