import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

export default function EditScreenInfo({type} : {type: String}) {
  if(type === 'tabOne'){
    return (
      <View style={styles.baseContainer}>
        <View style={styles.getStartedContainer}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            My name is Spencer Berg{`\n`} I'm a 26 year old software developer based out of Minneapolis, MN.
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text
            style={styles.descriptionText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            {`\t`}I enjoy working with full-stack applications built with JavaScript. I have over 3 years experience working with JS and it's many libraries.
          </Text>
        </View>
      </View>
    );
  } else if (type === 'modal'){
    return (
      <View style={styles.baseContainer}>
        <Text>This is the modal page</Text>
      </View>
    );
  } else if(type === 'tabTwo'){
    return (
      <View style={styles.baseContainer}>
        <Text>This is tabTwo</Text>
      </View>
    );
  } else {
    return(
      <View>
        <Text>Cannot acces content</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 70,
    backgroundColor: 'transparent'
  },
  baseContainer: {
    backgroundColor: 'transparent'
  },
  descriptionContainer: {
    alignItems: 'center',
    position: 'relative',
    marginTop: 10,
    padding: 15,
    backgroundColor: '#EFEBEA',
    marginHorizontal: 15,
    borderRadius: 5,
    opacity: .7
  },
  descriptionText: {
    color: 'black',
    fontSize: 17,
    lineHeight: 20
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'black',
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  }
});
