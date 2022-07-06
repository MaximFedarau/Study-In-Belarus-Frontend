//Types
import { STYLING_SIZES } from 'types/enum';
import { MEDIA_QUERIES_STYLES } from 'types/types';

export function largeTabletCSS(styles: MEDIA_QUERIES_STYLES) {
  return {
    [`@media screen and (max-width: ${STYLING_SIZES.LARGE_TABLET})`]: styles,
  };
}
