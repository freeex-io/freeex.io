import React from 'react';
import CountUp from 'react-countup';

const countEnd = () => {
  const body = document.getElementById('app-body');
  body.classList.add('loaded');
  body.classList.remove('is-loading');

  const nav = document.getElementsByTagName('aside')[0];
  nav.style.transform = 'translate(0%, -50%) matrix(1, 0, 0, 1, 0, 0)';
  nav.style.opacity = 1;

  const since = document.getElementsByClassName('since')[0];
  since.getElementsByTagName('span')[0].style.width = '3vw';
  since.getElementsByTagName('p')[0].style.opacity = 1;
  since.getElementsByTagName('p')[0].style.left = 0;

  const introText = document.getElementsByClassName('intro-text')[0];
  const divLength = introText.getElementsByTagName('div').length;
  for (let i = 0; i < divLength; i++) {
    const ele = introText.getElementsByTagName('div')[i].getElementsByTagName('h4')[0]
    ele.style.opacity = 1;
  }

  const introSubText = document.getElementsByClassName('intro-subtext')[0];
  introSubText.style.opacity = 1;
}

const Main = () => {
  return (
    <section className="page">
      <aside className="nav">
        <ul>
          <li className="active">
            <p>Intro</p>
          </li>
        </ul>
      </aside>
      <div className="overlay"></div>
      <div className="underlay"></div>
      <div className="intro">
        <CountUp start={1900} end={2019} delay={0} duration={5} onEnd={countEnd}>
          {({ countUpRef }) => (
            <div className="loading-count">
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
        <div className="row">
          <div className="half bold-text">
            <div className="since">
              <span></span>
              <p>EST 2019</p>
            </div>
            <div className="intro-text">
              <div>
                <h4>Hello I’m Britton, I create tailor</h4>
              </div>
              <div>
                <h4>made digital experiences that</h4>
              </div>
              <div>
                <h4>challenge the status quo.</h4>
              </div>
              <div>
                <h4>Never default. Never dull.</h4>
              </div>
            </div>
          </div>
          <div className="half thin-text">
            <p className="intro-subtext">
              Humbly designing digital products until<br />
              robots take my job from me. But for now<br />
              I am living the dream. Beer, music, &amp; design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;