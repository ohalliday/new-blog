import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import AdCodeFund from '../components/AdCodeFund';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
          <AdCodeFund></AdCodeFund>
            <div className="post-content">
              <p>
                Hey there! I'm Owen, a passionate software developer from the city of Sunderland, in England.
                I'm currently a student studying for a Level 3 Diploma in Information Technology at East Durham College.
                I started developing a few years ago, back when I first discovered HTML and CSS. I really loved having 
                the ability to design and develop websites, and I always thought it was really fun. My real passion is in mobile development,
                and I'm currently working with Google's UI framework Flutter.
              </p>
              <p>
                On this blog I'd like to help aspriring developers by providing guides and tutorials for frameworks such as Flutter, React, 
                GatsbyJS and more. I love sharing information about native mobile app development, but I also love subjects such as Cyber Security,
                Web Design, UI / UX Design, and how to overall be more productive.
              </p>
              <p>
                I'm open for any kind of projects that you may have, so feel free to contact me <a href="mailto:owenhalliday1@gmail.com?Subject=Hello!" target="_top">via email</a>.
                Also, if you would like to ask me anything, don't be afraid to contact me via Twitter <a href="https://twitter.com/owenhalliday1" target="_top">@owenhalliday1</a>. 
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
