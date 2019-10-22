import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Sentence from './Components/Sentence';

export default function App() {
  const [sentences, setSentences] = useState([
    {id: 1, text: 'Hello!', position: 'right'},
    {id: 2, text: 'How are you?', position: 'left'},
    {id: 3, text: 'I am fine, and you?', position: 'right'},
    {id: 4, text: 'Great, thanks!', position: 'left'}
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
      <TouchableWithoutFeedback onPress={clickScreen}>
        <View style={styles.container} onStartShouldSetResponder={() => true}>
          <ScrollView>
            {currentSentences.map((sentence, index) => <Sentence key={index} sentence={sentence.text} position={sentence.position} />)}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  }
});
