import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, Linking, Alert } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Text, View } from '../../components/Themed';
import { SocialMediaType } from 'react-native-elements/dist/social/SocialIcon';

export default function SocialModalScreen() {
  const linkedin:SocialMediaType = 'linkedin',
        github:SocialMediaType = 'github',
        instagram:SocialMediaType = 'instagram';

  const icons = [
    {
      type: linkedin,
      url: 'https://www.linkedin.com/in/spencer-berg-ab5210123/'
    },
    {
      type: github,
      url: 'https://github.com/sbd367'
    },
    {
      type: instagram,
      url: 'https://www.instagram.com/f3two/'
    }
  ];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>You can find me here.</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {/* Use a light status bar on iOS to account for the black space above the modal */}
      </View>
      <View style={styles.iconsContainer}>
      {
        icons.map((icon, ind) => (
          <View key={ind}>
            <SocialIcon
              type={icon.type}
              iconSize={60}
              style={styles.icon}
              onPress={async () => {
                const link = icon.url,
                      supported = await Linking.canOpenURL(link);

                return supported ? Linking.openURL(link) : Alert.alert('I\'m not sure what to do here...')
              }}
            />
          </View>
        ))
      }
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 80,
    width: 80,
    borderRadius: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
