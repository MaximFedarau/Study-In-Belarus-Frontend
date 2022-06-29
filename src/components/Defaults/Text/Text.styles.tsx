//MUI
import { styled, Typography } from '@mui/material';

//Constants
import { TRUE_BLUE } from '../../../constants/colors';

export const DefaultText = styled(Typography)({
  color: 'black',
  fontSize: '14px',
});

export const SectionText = styled(DefaultText)(
  ({ isSelected }: { isSelected?: boolean }) => ({
    fontFamily: 'Cera Pro Bold',
    fontSize: '18px',
    userSelect: 'none',
    cursor: 'pointer',
    textTransform: 'uppercase',
    color: isSelected ? TRUE_BLUE : 'black',
  }),
);

export const SubsectionText = styled(DefaultText)({
  userSelect: 'none',
  fontFamily: 'Cera Pro Light',
  fontSize: '18px',
  lineHeight: '23px',
  maxWidth: '266px',
});

export const BottomLink = styled(DefaultText)({
  userSelect: 'none',
  fontFamily: 'Cera Pro Bold',
  fontSize: '18px',
  lineHeight: '21px',
  cursor: 'pointer',
  textTransform: 'uppercase',
  textAlign: 'center',
});

export const ContactsText = styled(DefaultText)({
  fontFamily: 'Cera Pro Light',
  fontSize: '18px',
  lineHeight: '21px',
  maxWidth: '250px',
  '@media screen and (max-width: 1180px)': {
    textAlign: 'center',
  },
});
