//Types
import { STYLING_SIZES } from 'types/enum';
import { MEDIA_QUERIES_STYLES } from 'types/types';

export function largeMobileCSS(styles: MEDIA_QUERIES_STYLES) {
  return {
    [`@media screen and (max-width: ${STYLING_SIZES.LARGE_PHONE})`]: styles,
  };
}
