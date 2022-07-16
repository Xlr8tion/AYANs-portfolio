import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Anas Khan</h1>
          <PText>
            My name is Anas Khan I like giving shapes a life as well as recreate
            my stories through a plan. I firmly believe it’s important for me to
            move my expressive energies and experiment with various materials
            and crafts.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Navigation"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 7387061222',
                path: 'tel:+91 7387061222',
              },
              {
                title: 'askanas010@gmailnom',
                path: 'mailto:askanas010@gmail.com',
              },
              {
                title: 'Nashik Maharashtra India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Behance',
                path: 'https://www.behance.net/anaskhan190',
              },
              {
                title: 'linkedIn',
                path: 'https://www.linkedin.com/in/anas1khan/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/that_blurrymind/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2022 - Anas Khan</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
