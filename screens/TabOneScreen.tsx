import * as React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import CaboPic from '../assets/images/IMG_0667(1).jpg';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const image = CaboPic;
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImg}>
      <View style={styles.container}>
        <Text style={styles.title}>Greetings 👋</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo type='tabOne'/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: -95,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  backgroundImg: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
