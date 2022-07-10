//Types
import { ReactElement } from 'react';
import { ButtonProps as MUIButtonProps } from '@mui/material';

//Constants
import { DEFAULT_SIZES, BUTTON_VARIANT } from 'types/enum';

//Components
import { ButtonShell } from './Button.styles';

//Interface for Props
interface ButtonProps extends MUIButtonProps {
  children: string;
  shellVariant?: BUTTON_VARIANT;
  shellSize?: DEFAULT_SIZES;
}

export default function Button({
  children,
  ...otherProps
}: ButtonProps): ReactElement {
  return <ButtonShell {...otherProps}>{children}</ButtonShell>;
}
