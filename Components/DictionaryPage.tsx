/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
const DictionaryPage = () => {
  const [word, setWord] = useState('');
  return (
    <ScrollView>
      <ImageBackground
        source={require('./Images/Dictionary.png')}
        resizeMode="cover"
        style={{height: height}}>
        <View style={{flex: 1, rowGap: height * 0.1}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Image source={require('./Images/Logo.png')} />
            <Text style={{fontSize: 50, color: 'white', fontWeight: 'bold'}}>
              Welcome to Dictionary
            </Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TextInput
            placeholder="Search the word"
            onChangeText={newText => setWord(newText)}
            style={{color: 'white', width: width * 0.5}}
            placeholderTextColor="gray"
            value={word}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default DictionaryPage;
