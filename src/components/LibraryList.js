import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

class LibraryList extends Component {
  render() {
    return (
      <Text>LibraryList</Text>
    )
  }
}

// deconstructed libraries from state to change make the return more lean
const mapStateToProps = ({ libraries }) => {
  return { libraries }
};

export default connect(mapStateToProps)(LibraryList);