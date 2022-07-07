//Types
import { STYLING_SIZES } from 'types/enum';
import { MEDIA_QUERIES_STYLES } from 'types/types';

export function smallMobileCSS(styles: MEDIA_QUERIES_STYLES) {
  return {
    [`@media screen and (max-width: ${STYLING_SIZES.SMALL_PHONE})`]: styles,
  };
}
