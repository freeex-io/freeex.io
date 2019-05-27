import React, { Component } from 'react';

import Nav from './views/Nav';
import Main from './views/Main';

class App extends Component {
  componentDidMount() {
    const body = document.getElementById('app-body');
    body.classList.add('is-loading');
  }

  render() {
    return (
      <div id="app-body">
        <header>
          <Nav />
        </header>
        <main>
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
