import React from 'react';
import {View, TextView, StyleSheet, TouchableOpacity} from 'react-native';
const ListItem = props => {
  return (
    <TouchableOpacity>
      <View style={styles.ListItem}>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ListItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
});

export default ListItem;
