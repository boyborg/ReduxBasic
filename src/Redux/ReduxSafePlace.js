import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import ListItem from './component/listItem';
import {connect} from 'react-redux';
import {addPlace} from './actions';

class ReduxSafePlace extends Component {
  state = {
    placeName: '',
    places: [],
  };
  placesSubmitHandler = () => {
    this.props.add(this.state.addPlace);
  };

  placeNameChangeHandler = value => {
    this.setState({
      placeName: value,
    });
  };

  placesOutput = () => {
    return (
      <FlatList
        style={styles.ListContainer}
        data={this.props.places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => <ListItem placeName={info.item.value} />}
      />
    );
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="search places"
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            title="add"
            style={styles.placeButton}
            onPress={this.placesSubmitHandler}
          />
        </View>
        <View style={styles.ListContainer}>{this.placesOutput()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
  ListContainer: {
    width: '100%',
  },
});

const mapStateProps = state => {
  return {
    place: state.places.places,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: name => {
      dispatch(addPlace(name)); //dispatch menghubungkan action menuju reducer
    },
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps,
)(ReduxSafePlace);
