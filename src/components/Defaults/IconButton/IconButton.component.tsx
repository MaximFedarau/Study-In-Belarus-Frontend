//Types
import { ReactElement, ReactNode } from 'react';

//Components
import { MUIIconButton } from './IconButton.styles';

//IconButton Props
interface IconButtonProps {
  children: ReactNode;
  width?: number;
  height?: number;
  onClickHandler?: () => void;
}

export default function IconButton({
  children,
  width,
  height,
  onClickHandler,
}: IconButtonProps): ReactElement {
  return (
    <MUIIconButton width={width} height={height} onClick={onClickHandler}>
      {children}
    </MUIIconButton>
  );
}
