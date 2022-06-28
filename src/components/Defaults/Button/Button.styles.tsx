//MUI
import { styled, Button } from '@mui/material';

//Constants
import {
  BUTTON_VARIANT_STYLING,
  BUTTON_SIZE_STYLING,
} from 'constants/constants';
import { BUTTON_SIZE, BUTTON_VARIANT } from 'constants/enum';

export const ButtonShell = styled(Button)(
  ({
    shellSize: size = BUTTON_SIZE.MEDIUM,
    shellVariant: variant = BUTTON_VARIANT.OUTLINED,
  }: {
    shellSize?: BUTTON_SIZE;
    shellVariant?: BUTTON_VARIANT;
  }) => ({
    ...BUTTON_VARIANT_STYLING[variant],
    ...BUTTON_SIZE_STYLING[size],
    borderRadius: '30px',
    textAlign: 'center',
  }),
);
