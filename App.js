import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, FlatList } from 'react-native';
import Sentence from './Components/Sentence';

export default function App() {
  const [sentences, setSentences] = useState([
    {id: '1', text: 'Hello!', position: 'right'},
    {id: '2', text: 'How are you?', position: 'left'},
    {id: '3', text: 'I am fine, and you?', position: 'right'},
    {id: '4', text: 'Great, thanks!', position: 'left'},
    {id: '5', text: 'What are you doing now?', position: 'right'},
    {id: '6', text: 'I work, and you?', position: 'left'},
    {id: '7', text: 'I study', position: 'right'},
    {id: '8', text: 'Where do you live?', position: 'left'},
    {id: '9', text: 'I live in Stockholm!', position: 'right'},
  ]);
  const [index, setIndex] = useState(0);
  const [currentSentences, setCurrentSentences] = useState([]);

  function clickScreen() {
    let currSentences = [...currentSentences];
    currSentences.push(sentences[index]);
    setCurrentSentences(currSentences);
    setIndex(index + 1);

    if (index >= sentences.length) {
      setIndex(0);
      setCurrentSentences([]);
    }
  }

  return (
      
    <TouchableWithoutFeedback onPress={clickScreen}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) =>item.id}
          data={currentSentences}
          renderItem={itemData => (<Sentence style={styles.item} sentence={itemData.item.text} position={itemData.item.position}/>)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  }
});
