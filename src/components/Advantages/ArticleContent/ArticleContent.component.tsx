//Types
import { ReactElement } from 'react';

//Constants
import { ADVANTAGES_IMAGE_SIZES } from 'constants/constants/styles';

//Components
import { ArticleTextContainer } from 'components/Defaults/Article/Article.styles';
import { SubarticleContainer } from 'components/Defaults/Section/Section.styles';
import {
  ArticleHeaderText,
  ArticleText,
  SubarticleText,
} from 'components/Defaults/Text/Text.styles';

//Icons
import { ReactComponent as EducationEndSVG } from 'assets/images/advantages/education_end.svg';
import { ReactComponent as BooksSVG } from 'assets/images/advantages/books.svg';

export default function ArticleContent(): ReactElement {
  return (
    <ArticleTextContainer>
      <ArticleHeaderText>Advantages of Studying in Belarus</ArticleHeaderText>
      <SubarticleContainer>
        <SubarticleText>
          A lot of higher education institutions and educational programs
        </SubarticleText>
        <div>
          {/* div is for Safari */}
          <EducationEndSVG {...ADVANTAGES_IMAGE_SIZES} />
        </div>
        <ArticleText>
          <strong>51</strong> higher education institutions (universities,
          academies, institutes), including 9 private institutions
        </ArticleText>
        <ArticleText>
          <strong>15</strong> educational fields ranging from technical and
          natural sciences to acting.
        </ArticleText>
        <ArticleText>
          <strong>382</strong> higher education specialties of the first cycle
          and 331 specialties of the second cycle.
        </ArticleText>
      </SubarticleContainer>
      <SubarticleContainer>
        <SubarticleText>
          The Fundamentality of University Education
        </SubarticleText>
        <div>
          {/* div is for Safari */}
          <BooksSVG {...ADVANTAGES_IMAGE_SIZES} />
        </div>
        <ArticleText>
          In the Republic of Belarus you can acquire fundamental knowledge in
          all fields, but the country is mostly known for its strong scientific
          schools in the field of physics, mathematics and natural science.
        </ArticleText>
      </SubarticleContainer>
    </ArticleTextContainer>
  );
}
