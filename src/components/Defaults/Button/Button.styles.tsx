//MUI
import { styled, Button } from '@mui/material';

//Constants
import { BUTTON_VARIANT_STYLING, BUTTON_SIZE_STYLING } from 'constants/styles';
import { DEFAULT_SIZES, BUTTON_VARIANT } from 'types/enum';

export const ButtonShell = styled(Button)(
  ({
    shellSize: size = DEFAULT_SIZES.MEDIUM,
    shellVariant: variant = BUTTON_VARIANT.OUTLINED,
  }: {
    shellSize?: DEFAULT_SIZES;
    shellVariant?: BUTTON_VARIANT;
  }) => ({
    ...BUTTON_VARIANT_STYLING[variant],
    ...BUTTON_SIZE_STYLING[size],
    borderRadius: '30px',
    textAlign: 'center',
  }),
);
