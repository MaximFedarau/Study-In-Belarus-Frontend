//Types
import { ReactElement } from 'react';

//Components
import Points from '../Points/Points.component';

import {
  MobileWave,
  MobileTitle,
} from 'components/Home/Greetings/Greetings/Greetings.styles';

import {
  EducationMainImageContainer,
  TopWaveContainer,
  BottomWaveContainer,
} from 'components/Defaults/Container/Container.styles';
import { EducationContainer } from 'components/Defaults/Section/Section.styles';

//Icons
import { ReactComponent as MainImage } from 'assets/images/home/city_gates.svg';

import wave from 'assets/images/footer/blue_wave.svg';

export default function Education(): ReactElement {
  return (
    <>
      <TopWaveContainer>
        <MobileTitle sticked>
          Education in Belarus for <a>foreign</a> citizens
        </MobileTitle>
        <MobileWave loading="lazy" src={wave} />
      </TopWaveContainer>
      <EducationContainer>
        <Points />
        <EducationMainImageContainer>
          <MainImage width="100%" height="100%" />
        </EducationMainImageContainer>
      </EducationContainer>
      <BottomWaveContainer>
        <MobileWave loading="lazy" reverse src={wave} />
      </BottomWaveContainer>
    </>
  );
}
