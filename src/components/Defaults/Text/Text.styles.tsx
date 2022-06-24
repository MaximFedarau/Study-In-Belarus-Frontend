//MUI
import { styled, Typography } from '@mui/material';

//Constants
import { TRUE_BLUE } from '../../../constants/colors';

// * Default

export const DefaultText = styled(Typography)({
  color: 'black',
  fontSize: '14px',
});

// * Navigation

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

// * Footer

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

// * 404
export const NotFoundHeader = styled(DefaultText)({
  color: '#0000a3',
  fontFamily: 'Windows Regular',
  fontSize: 18,
  fontWeight: 'bold',
});

export const NotFoundText = styled(DefaultText)({
  color: 'white',
  fontFamily: 'Windows Regular',
  fontWeight: 'bold',
  fontSize: 20,
});

export const NotFoundFooter = styled(DefaultText)({
  color: 'white',
  fontFamily: 'Windows Regular',
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center',
});
