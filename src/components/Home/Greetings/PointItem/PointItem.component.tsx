//Types
import React, { ReactElement } from 'react';

//Components
import { PointItemContainer } from 'components/Defaults/Container/Container.styles';
import { PointText } from 'components/Defaults/Text/Text.styles';

// Interface for Props
interface PointItemProps {
  children: string;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

export default function PointItem({
  children,
  Icon,
}: PointItemProps): ReactElement {
  return (
    <PointItemContainer>
      <Icon width={133} height={133} />
      <PointText>{children}</PointText>
    </PointItemContainer>
  );
}
