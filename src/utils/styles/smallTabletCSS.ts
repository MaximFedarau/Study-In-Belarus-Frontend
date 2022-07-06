//Types
import { STYLING_SIZES } from 'types/enum';
import { MEDIA_QUERIES_STYLES } from 'types/types';

export function smallTabletCSS(styles: MEDIA_QUERIES_STYLES) {
  return {
    [`@media screen and (max-width: ${STYLING_SIZES.SMALL_TABLET})`]: styles,
  };
}
