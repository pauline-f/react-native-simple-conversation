import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Sentence(props) {
  return (
    <View style={styles.container}>
      <Text style = {props.position === 'left' ? styles.left : styles.right}>{props.sentence}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  left: {
    textAlign:'left',
    fontSize: 30,
    backgroundColor: 'white',
    borderColor: '#525254',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0.8,
    margin: 5,
    padding: 15,
  },
  right: {
    textAlign:'right',
    fontSize: 30,
    backgroundColor: 'lightgreen',
    borderColor: '#525254',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 0.8,
    margin: 5,
    padding: 15,
  },
});

export default Sentence;