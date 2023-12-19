/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreens} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type propsType = NativeStackScreenProps<StackScreens, 'MainPage'>;
const {height} = Dimensions.get('screen');
const MainPage = (props: propsType) => {
  const {navigation} = props;
  const goToDictionary = () => {
    navigation.navigate('DictionaryPage');
  };
  return (
    <View>
      <ImageBackground
        source={require('./Images/MainBg.png')}
        resizeMode="cover"
        style={{height: height}}>
        <View style={{flex: 1, rowGap: height * 0.1}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 180,
            }}>
            <Image source={require('./Images/Logo.png')} />
            <Text style={{fontSize: 50, color: 'white', fontWeight: 'bold'}}>
              Dictionary
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'flex-end',
              paddingRight: 50,
            }}>
            <TouchableOpacity onPress={goToDictionary}>
              <Image source={require('./Images/NextArrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MainPage;
