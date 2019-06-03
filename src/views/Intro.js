import React, { Component } from 'react';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.onLoad = this.onLoad.bind(this);
  }

  onLoad() {
    setTimeout(() => this.props.onLoad(), 2500);
  }

  componentDidMount() {
    this.onLoad();
  }

  render() {
    return(
      <div className="intro-title">
        <h1>FREEEX</h1>
      </div>
    );
  }
}

export default Intro;