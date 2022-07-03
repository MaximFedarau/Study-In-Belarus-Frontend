//MUI
import { styled } from '@mui/material';

//Constants
import { TRUE_BLUE } from '../../../constants/constants/colors';

//Components
import { Container } from '../Container/Container.styles';

export const IconBubbleContainer = styled(Container)(
  ({ width, height }: { width?: string; height?: string }) => ({
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
    borderRadius: '50%',
    justifyContent: 'center',
    minWidth: width,
    minHeight: height,
    background: 'white',
    color: TRUE_BLUE,
    cursor: 'pointer',
    ':active': {
      background: TRUE_BLUE,
      '*': {
        color: 'white',
      },
    },
  }),
);
