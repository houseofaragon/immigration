import React from 'react';
import { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Intro from './intro';

class ImmigrationTool extends Component {
  state = {
  }

  render() {

    return (
      <div className='immigration-tool-container'>
        <Intro />
      </div>
    );
  }
}

ImmigrationTool.propTypes = {

};

// function mapStateToProps(state) {
//   return
// }

// function mapDispatchToProps(dispatch) {
//   return
// }

export default ImmigrationTool;
