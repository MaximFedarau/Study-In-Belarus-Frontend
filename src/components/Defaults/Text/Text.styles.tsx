//MUI
import { styled, Typography } from '@mui/material';

//Constants
import { TRUE_BLUE } from '../../../constants/colors';

export const DefaultText = styled(Typography)({
  color: 'black',
  fontSize: '14px',
});

export const DrawerMainText = styled(DefaultText)(
  ({ isSelected }: { isSelected?: boolean }) => ({
    fontFamily: 'Cera Pro Bold',
    fontSize: '18px',
    userSelect: 'none',
    cursor: 'pointer',
    textTransform: 'uppercase',
    color: isSelected ? TRUE_BLUE : 'black',
  }),
);

export const DrawerText = styled(DefaultText)({
  userSelect: 'none',
  fontFamily: 'Cera Pro Light',
  fontSize: '18px',
  lineHeight: '23px',
  maxWidth: '266px',
});
