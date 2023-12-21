/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, ImageBackground, TextInput, StyleSheet} from 'react-native';

const DictionaryPage = () => {
  const [wor, setWord] = useState('');
  const [result, setResult] = useState('');
  const [meaning, setMeaning] = useState('');
  const Validate = (wors: string) => {
    if (wors.trim() === '') {
      setResult('');
      setMeaning('');
      return false;
    } else {
      return true;
    }
  };
  const handleSearch = async (words: string) => {
    if (Validate(words)) {
      try {
        const response = await axios(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`,
        );
        if (response.data?.title === 'No definitions Found') {
          setResult(response.data.title);
          setMeaning('');
        } else {
          setResult(response.data[0].word);
          setMeaning(response.data[0].meanings[0].definitions[0].definition);
        }
      } catch (error) {
        console.log(error);
        setResult('No Definitions Found');
        setMeaning('');
      }
    }
  };
  return (
    <ImageBackground
      source={require('./Images/Dictionary.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Dictionary App</Text>
        <TextInput
          style={styles.input}
          onChangeText={newText => setWord(newText)}
          placeholder="Enter a word"
          placeholderTextColor="gray"
          value={wor}
          onSubmitEditing={() => {
            handleSearch(wor);
          }}
        />
        {meaning ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{result}</Text>
            <Text style={styles.resultText}>{meaning}</Text>
          </View>
        ) : (
          <View style={styles.resultContainer1}>
            <Text style={styles.resultText1}>Word Not Found</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    color: 'black',
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  resultContainer: {
    marginTop: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10,
  },
  resultText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  resultContainer1: {
    marginTop: 100,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText1: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
});

export default DictionaryPage;
