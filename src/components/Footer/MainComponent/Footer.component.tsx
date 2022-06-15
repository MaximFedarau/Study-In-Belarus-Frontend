//Types
import { ReactElement } from 'react';

//Interface for Footer Props
interface FooterProps {
  footerColor?: string;
}

export default function Footer({ footerColor }: FooterProps): ReactElement {
  return (
    <div>
      <p style={{ color: footerColor }}>Footer</p>
    </div>
  );
}
