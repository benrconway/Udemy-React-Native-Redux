import React, { Component } from 'react';
import { 
  Text, 
  TouchableWithoutFeedback, 
  View, 
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  componentDidUpdate(){
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    const { library, expanded } = this.props
    if (expanded) {
      return (
        <CardSection>
          <Text>{library.item.description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    const { id, title } = this.props.library.item;
    return (
      <TouchableWithoutFeedback
      onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

const mapStateToProps = ({ selectedLibraryId }, ownProps) => {
  const expanded = ownProps.library.item.id === selectedLibraryId;
  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem);