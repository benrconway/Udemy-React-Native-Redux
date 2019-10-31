import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';
class LibraryList extends Component {

  renderItem(library) {
    return (
      <ListItem library={library}/>
    );
  };

  render() {
    return (
      <>
        <FlatList
          data={this.props.libraries}
          keyExtractor={item => `${item.id}`}
          renderItem={this.renderItem}
        />
      </>
    )
  }
}

// deconstructed libraries from state to change make the return more lean
const mapStateToProps = ({ libraries }) => {
  return { libraries }
};

export default connect(mapStateToProps)(LibraryList);