import * as React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import fishingPic from '../assets/images/IMG_0662.jpg';

export default function TabTwoScreen() {
  return (
    <ImageBackground source={fishingPic} resizeMode="cover" style={styles.backgroundImg}>
      <View style={styles.container}>
        <Text style={styles.title}>Here's a list of projects I've worked on.</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo type='tabTwo'/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
    bottom: 100
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
