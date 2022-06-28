//Types
import React from 'react';

//Interface for Paper Styles
interface PaperStylesInterface {
  style: React.CSSProperties;
}

export const PaperDefaultStyle: PaperStylesInterface = { style: {} };

export const NavigationPaperStyle: PaperStylesInterface = {
  style: {
    ...PaperDefaultStyle.style,
    paddingLeft: '37px',
    paddingRight: '34px',
  },
};
