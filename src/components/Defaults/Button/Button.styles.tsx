//MUI
import { styled, Button } from '@mui/material';

//Constants
import { TRUE_BLUE } from '../../../constants/colors';

export const DefaultButton = styled(Button)({
  display: 'flex',
  backgroundColor: 'white',
  color: 'black',
});

export const DrawerButton = styled(DefaultButton)({
  textTransform: 'uppercase',
  border: `1px solid ${TRUE_BLUE}`,
  borderRadius: '30px',
  color: TRUE_BLUE,
  fontWeight: 700,
  fontSize: '15px',
  lineHeight: '23px',
  textAlign: 'center',
  padding: '0 24px',
  fontFamily: 'Cera Pro Bold',
});
