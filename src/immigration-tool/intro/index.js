import React from 'react';
import Spinner from '../spinner';
import Bubbles from '../bubbles';

export default class Intro extends React.PureComponent {
  static propTypes = {
  }

  state = { }

  renderHeader() {
    return (
      <div className='intro-container--header'>
            <h1>Immigration</h1> 
      </div>
    );
  }

  render() {
    return (
      <div className='intro-container'>
       {this.renderHeader()}
       <Bubbles />
      </div>
    );
	}
}
