//Types
import { ReactElement } from 'react';

//Interface for Props
interface OptimizedImageProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}

export default function OptimizedImage(
  props: OptimizedImageProps,
): ReactElement {
  return <img {...props} loading="lazy" />;
}
