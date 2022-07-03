//MUI
import { styled } from '@mui/material';

export const BubbleWrapper = styled('div')({
  position: 'relative',
  zIndex: 1,
});

export const FirstBubbleWrapper = styled(BubbleWrapper)({
  right: 140,
});

export const SecondBubbleWrapper = styled(BubbleWrapper)({
  zIndex: 2,
});

export const ThirdBubbleWrapper = styled(BubbleWrapper)({
  right: 85,
});

export const FourthBubbleWrapper = styled(BubbleWrapper)({
  bottom: 100,
});

export const FifthBubbleWrapper = styled(BubbleWrapper)({
  zIndex: 2,
  right: 50,
  top: 40,
});
