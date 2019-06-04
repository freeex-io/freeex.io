import React, { Component } from 'react';

import { ShowIntro, HideIntro, ShowContent, HideContent } from '../utils/LoadHome';

class Aside extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: 0
    }
  }

  changePage(page) {
    if (this.state.currentNav !== page) {
      if (page !== 0 && this.state.currentNav === 0) {
        HideIntro();
        setTimeout(() => ShowContent(), 500);
      }

      if (page === 0 && this.state.currentNav !== 0) {
        HideContent();
        setTimeout(() => ShowIntro(), 500);
      }

      this.setState({
        currentNav: page
      });

      if (page !== 0) {
        const current = page - 1;
        
        const side = document.getElementsByClassName('side')[0];
        const divLength = side.getElementsByTagName('div').length;
        for (let i = 0; i < divLength; i++) {
          const ele = side.getElementsByTagName('div')[i].getElementsByTagName('p')[0]
          ele.style.removeProperty('visibility');
          ele.style.removeProperty('opacity');
          ele.style.removeProperty('transform');
        }
        const currentEle = side.getElementsByTagName('div')[current].getElementsByTagName('p')[0]
        currentEle.style.visibility = 'inherit';
        currentEle.style.opacity = 1;
        currentEle.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';

        const back = document.getElementsByClassName('back')[0];
        const backLength = back.getElementsByClassName('back-img').length;
        for (let i = 0; i < backLength; i++) {
          const ele = back.getElementsByClassName('back-img')[i];
          ele.style.opacity = 0;
        }
        const currentBack = back.getElementsByClassName('back-img')[current];
        currentBack.style.opacity = 1;

        const center = document.getElementsByClassName('center')[0];
        const centerLength = center.getElementsByClassName('center-img').length;
        for (let i = 0; i < centerLength; i++) {
          const ele = center.getElementsByClassName('center-img')[i];
          ele.classList.remove('is-active');
        }
        const currentCenter = center.getElementsByClassName('center-img')[current];
        currentCenter.classList.add('is-active');

        const front = document.getElementsByClassName('front-info')[0];
        setTimeout(()=> {
          front.style.opacity = 1;
        }, 1000);
        const frontLength = front.getElementsByClassName('front-item').length;
        for (let i = 0; i < frontLength; i++) {
          const ele = front.getElementsByClassName('front-item')[i];
          ele.classList.remove('is-active');
        }
        const currentFront = front.getElementsByClassName('front-item')[current];
        currentFront.classList.add('is-active');
      }
    }
  }

  render() {
    return (
      <aside className="nav">
        <ul>
          <li
            className={(this.state.currentNav === 0) ? 'active' : ''}
            onClick={() => this.changePage(0)}
          >
            <p>Intro</p>
          </li>
          <li
            className={(this.state.currentNav === 1) ? 'active' : ''}
            onClick={() => this.changePage(1)}
          >
            <p>Incubating</p>
          </li>
          <li
            className={(this.state.currentNav === 2) ? 'active' : ''}
            onClick={() => this.changePage(2)}
          >
            <p>Accelerating</p>
          </li>
          <li
            className={(this.state.currentNav === 3) ? 'active' : ''}
            onClick={() => this.changePage(3)}
          >
            <p>EX Operating</p>
          </li>
          <li
            className={(this.state.currentNav === 4) ? 'active' : ''}
            onClick={() => this.changePage(4)}
          >
            <p>Marketing</p>
          </li>
          <li
            className={(this.state.currentNav === 5) ? 'active' : ''}
            onClick={() => this.changePage(5)}
          >
            <p>Assets Management</p>
          </li>
        </ul>
      </aside>
    );
  }
}

export default Aside;