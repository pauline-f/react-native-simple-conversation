import React, { useState, useRef } from 'react';
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
    {id: '9', text: 'I live in Stockholm! And you?', position: 'right'},
    {id: '10', text: 'I live in Paris!', position: 'left'},
    {id: '11', text: 'Great!', position: 'right'},
    {id: '12', text: 'See you soon!', position: 'left'},
    {id: '13', text: 'Bye bye!', position: 'right'},
  ]);
  const [index, setIndex] = useState(0);
  const [currentSentences, setCurrentSentences] = useState([]);
  const flatList = useRef(null);

  function clickScreen() {
    let currSentences = [...currentSentences];
    currSentences.push(sentences[index]);
    setCurrentSentences(currSentences);
    setIndex(index + 1);

    if (index >= sentences.length) {
      setIndex(0);
      setCurrentSentences([]);
    }
    setTimeout(() => {
      flatList.current.scrollToEnd({ animated: true});
    }, 50);
  }

  const renderSentences = (sentence) => (<Sentence style={styles.item} sentence={sentence.item.text} position={sentence.item.position}/>);


  return (
      
    <TouchableWithoutFeedback onPress={clickScreen}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) =>item.id}
          data={currentSentences}
          renderItem={renderSentences}
          ref={flatList}
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
