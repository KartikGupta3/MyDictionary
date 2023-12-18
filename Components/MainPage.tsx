/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const {height} = Dimensions.get('screen');
const MainPage = () => {
  return (
    <ScrollView>
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
            <TouchableOpacity>
              <Image source={require('./Images/NextArrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default MainPage;
