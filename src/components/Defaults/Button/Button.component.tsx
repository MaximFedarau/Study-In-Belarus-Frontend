//Types
import { ReactElement } from 'react';
import { ButtonProps as MUIButtonProps } from '@mui/material';

//Constants
import { DEFAULT_SIZES, BUTTON_VARIANT } from 'constants/types/enum';

//Components
import { ButtonShell } from './Button.styles';

//Interface for Props
interface ButtonProps {
  children: string;
  shellVariant?: BUTTON_VARIANT;
  shellSize?: DEFAULT_SIZES;
  additionalProps?: MUIButtonProps;
}

export default function Button({
  children,
  ...otherProps
}: ButtonProps): ReactElement {
  return <ButtonShell {...otherProps}>{children}</ButtonShell>;
}
