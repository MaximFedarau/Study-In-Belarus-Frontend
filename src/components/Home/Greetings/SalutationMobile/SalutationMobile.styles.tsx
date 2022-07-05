//MUI
import { styled } from '@mui/material';

export const ColouredText = styled('a')({
  cursor: 'pointer',
  ':hover': {
    backgroundImage: 'linear-gradient(90deg, white, #CA4246, #8B9862)',
    backgroundRepeat: 'repeat',
    backgroundSize: '100%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'rainbow-text-simple-animation-rev 0.5s ease-in forwards',
  },
  '@keyframes rainbow-text-simple-animation-rev': {
    '0%': {
      backgroundSize: '450%',
    },
    '40%': {
      backgroundSize: '450%',
    },
    '100%': {
      backgroundSize: '100%',
    },
  },
});
