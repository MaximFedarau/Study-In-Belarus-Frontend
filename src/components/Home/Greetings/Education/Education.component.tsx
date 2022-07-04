//Types
import { ReactElement } from 'react';

//Components
import Points from '../Points/Points.component';

import {
  MobileWave,
  MobileTitle,
} from 'components/Home/Greetings/Greetings/Greetings.styles';

import {
  GatesContainer,
  TopWaveContainer,
  BottomWaveContainer,
} from 'components/Defaults/Container/Container.styles';
import { EducationContainer } from 'components/Defaults/Section/Section.styles';

//Icons
import { ReactComponent as GatesSVG } from 'assets/images/home/city_gates.svg';

import wave from 'assets/images/footer/blue_wave.svg';

export default function Education(): ReactElement {
  return (
    <>
      <TopWaveContainer>
        <MobileTitle>
          Education in Belarus for <a>foreign</a> citizens
        </MobileTitle>
        <MobileWave src={wave} />
      </TopWaveContainer>
      <EducationContainer>
        <Points />
        <GatesContainer>
          <GatesSVG width="100%" height="100%" />
        </GatesContainer>
      </EducationContainer>
      <BottomWaveContainer>
        <MobileWave reverse src={wave} />
      </BottomWaveContainer>
    </>
  );
}
