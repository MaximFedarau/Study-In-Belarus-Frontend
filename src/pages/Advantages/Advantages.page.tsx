//Types
import React, { ReactElement } from 'react';

//Components
import {
  AdvantagesContainer,
  AdvantagesContentContainer,
  SubarticleContainer,
} from 'components/Defaults/Container/Container.styles';
import {
  ArticlePathText,
  ArticleHeaderText,
  SubarticleText,
  ArticleText,
} from 'components/Defaults/Text/Text.styles';

//Icons
import { ReactComponent as StudentsSVG } from 'assets/images/advantages/students.svg';
import { ReactComponent as EducationEndSVG } from 'assets/images/advantages/education_end.svg';
import { ReactComponent as BooksSVG } from 'assets/images/advantages/books.svg';

export default function Advantages(): ReactElement {
  React.useEffect(() => {
    document.title = 'Advantages';
  }, []);
  return (
    <AdvantagesContainer>
      <StudentsSVG style={{ width: '100%', height: '100%' }} />
      <AdvantagesContentContainer>
        <div>
          <ArticlePathText>
            {'Main > Why Belarus > Advantages of Studying in Belarus'}
          </ArticlePathText>
        </div>
        <div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '38px' }}
          >
            <ArticleHeaderText>
              Advantages of Studying in Belarus
            </ArticleHeaderText>
            <SubarticleContainer>
              <SubarticleText>
                A lot of higher education institutions and educational programs
              </SubarticleText>
              <EducationEndSVG style={{ width: '100%', height: '100%' }} />
              <ArticleText>
                <strong>51</strong> higher education institutions (universities,
                academies, institutes), including 9 private institutions
              </ArticleText>
              <ArticleText>
                <strong>15</strong> educational fields ranging from technical
                and natural sciences to acting.
              </ArticleText>
              <ArticleText>
                <strong>382</strong> higher education specialties of the first
                cycle and 331 specialties of the second cycle.
              </ArticleText>
            </SubarticleContainer>
            <SubarticleContainer>
              <SubarticleText>
                The Fundamentality of University Education
              </SubarticleText>
              <BooksSVG style={{ width: '100%', height: '100%' }} />
              <ArticleText>
                In the Republic of Belarus you can acquire fundamental knowledge
                in all fields, but the country is mostly known for its strong
                scientific schools in the field of physics, mathematics and
                natural science.
              </ArticleText>
            </SubarticleContainer>
          </div>
          <div>{/* circles with navigation */}</div>
        </div>
      </AdvantagesContentContainer>
    </AdvantagesContainer>
  );
}
