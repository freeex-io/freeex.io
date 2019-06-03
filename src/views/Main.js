import React from 'react';

import { LoadHome } from '../utils/LoadHome';
import Aside from './Aside';
import Intro from './Intro';

import incubating from '../assets/incubating.jpg';

const Main = () => {
  return (
    <section className="page">
      <Aside />
      <div className="overlay"></div>
      <div className="underlay"></div>
      <div className="intro">
        <Intro 
          onLoad={LoadHome}
        />
        <div className="row">
          <div className="half bold-text">
            <div className="since">
              <span></span>
              <p>
                FREEEX
              </p>
            </div>
            <div className="intro-text">
              <div>
                <h4>We're the exchange-specialized</h4>
              </div>
              <div>
                <h4>consulting team that challenges</h4>
              </div>
              <div>
                <h4>the new cryptocurrency ecosystem.</h4>
              </div>
              <div>
                <h4>Never default. Never dull.</h4>
              </div>
            </div>
          </div>
          <div className="half thin-text">
            <p className="intro-subtext">
              As a successful partner in the cryptocurrency<br />
              exchange and blockchain project,<br />
              you'll see the best results.
            </p>
            <div className="intro-sublink">
              <span>FREEEX COMMUNITY</span>
            </div>
          </div>
        </div>
      </div>
      <div className="business">
        <div className="banner">
          <div className="banner-overlay"></div>
          <div className="banner-background" style={{backgroundImage: `url(${incubating})`}}></div>
        </div>
        <div className="content">
          <div className="back">
            <div className="back-img"></div>
            <div className="back-img"></div>
            <div className="back-img"></div>
            <div className="back-img"></div>
            <div className="back-img"></div>
          </div>
          <div className="center">
            <div className="center-img"></div>
            <div className="center-img"></div>
            <div className="center-img"></div>
            <div className="center-img"></div>
            <div className="center-img"></div>
          </div>
          <div className="front">
            <div className="front-info">
              <div className="front-item"></div>
              <div className="front-item"></div>
              <div className="front-item"></div>
              <div className="front-item"></div>
              <div className="front-item"></div>
            </div>
          </div>
        </div>
        <div className="side">
          <div className="side-item">
            <p>Incubating</p>
          </div>
          <div className="side-item">
            <p>Accelerating</p>
          </div>
          <div className="side-item">
            <p>Exchange Operating</p>
          </div>
          <div className="side-item">
            <p>Marketing</p>
          </div>
          <div className="side-item">
            <p>Assets Management</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;