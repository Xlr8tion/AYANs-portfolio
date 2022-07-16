import React from 'react';
import styled from 'styled-components';
import AboutInfoItem from './AboutInfoItem';

const ServicesItemsStyles = styled.div`
  padding: 0 0 0 10rem;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="about__info__items">
        <div className="about__info__item">
          <h1 className="about__info__heading">Education</h1>

          <AboutInfoItem
            title="School"
            items={['Guru Gobind Singh Public school']}
          />
          <AboutInfoItem title="Collage" items={['HSC']} />
          <AboutInfoItem
            title="Varsity"
            items={['N.D.M.V.P Sharadchandra Pawarji College of Architecture']}
          />
        </div>
        <div className="about__info__item">
          <h1 className="about__info__heading">My Skills</h1>

          <AboutInfoItem title="Sketching" items={[]} />
          <AboutInfoItem title="Photography" items={[]} />
          <AboutInfoItem
            title="Softwares"
            items={[
              'Photoshop',
              'Illustrator',
              'CorelDraw',
              'Sketchup',
              'figma',
              'After Effects',
            ]}
          />
        </div>
        <div className="about__info__item">
          <h1 className="about__info__heading">Experiences</h1>

          <AboutInfoItem
            title="2010-2012"
            items={['junior developer at web Cifar']}
          />
          <AboutInfoItem
            title="2012-2016"
            items={['Front end developer at web Cifar ']}
          />
          <AboutInfoItem title="2016-" items={['Freelance web Developer']} />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
