/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Dimensions, ImageBackground, Text, View, TextInput} from 'react-native';
const {width, height} = Dimensions.get('screen');
const DictionaryPage = () => {
  const [word, setWord] = useState('');
  return (
    <View>
      <ImageBackground
        source={require('./Images/Dictionary.png')}
        resizeMode="cover"
        style={{height: height}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 30,
                color: 'white',
                fontWeight: 'bold',
                padding: 27,
              }}>
              Welcome to Dictionary
            </Text>
            <View style={{flex: 1, alignContent: 'center',padding:50}}>
              <TextInput
                placeholder="Search..."
                onChangeText={newText => setWord(newText)}
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  width: width * 0.81,
                  borderRadius: 5,
                }}
                placeholderTextColor="gray"
                value={word}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DictionaryPage;
