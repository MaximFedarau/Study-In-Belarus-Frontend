//Types
import { ReactElement } from 'react';
import { ButtonProps as MUIButtonProps } from '@mui/material';

//Constants
import { BUTTON_SIZE, BUTTON_VARIANT } from 'constants/enum';

//Components
import { ButtonShell } from './Button.styles';

//Interface for Props
interface ButtonProps {
  children: string;
  shellVariant?: BUTTON_VARIANT;
  shellSize?: BUTTON_SIZE;
  additionalProps?: MUIButtonProps;
}

export default function Button({
  children,
  ...otherProps
}: ButtonProps): ReactElement {
  return <ButtonShell {...otherProps}>{children}</ButtonShell>;
}
