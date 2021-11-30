import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
export default function EditScreenInfo({type} : {type: String}) {
  if(type === 'tabOne'){
    return (
      <TabOne/>
    );
  } else if (type === 'modal'){
    return (
      <View>
        <Text>This is the modal page</Text>
      </View>
    );
  } else if(type === 'tabTwo'){
    return (
      <TabTwo/>
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
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
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
