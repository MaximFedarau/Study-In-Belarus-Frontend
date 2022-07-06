//Types
import React from 'react';
import { STYLING_SIZES } from 'types/enum';
import { StyledOptions } from '@emotion/styled';
import { MuiStyledOptions, MUIStyledCommonProps } from '@mui/system';

export function mobileCSS(
  breakpoint: STYLING_SIZES,
  styles:
    | React.CSSProperties
    | StyledOptions<React.Component>
    | MuiStyledOptions
    | MUIStyledCommonProps
    | { [key: string]: any },
) {
  return {
    [`@media screen and (max-width: ${breakpoint})`]: styles,
  };
}
