import React from 'react';
import { StyleSheet } from "react-native";
import { Text, View } from './Themed';
export default function TabOne(){
    return(
        <View style={styles.baseContainer}>
            <View style={styles.getStartedContainer}>
                <Text
                    style={styles.introText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)">
                    My name is Spencer Berg{`\n\n`} I'm a 26 year old software developer based out of Minneapolis, MN.
                </Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text
                    style={styles.descriptionText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)">
                    {`\t`}I have a diverse background that allows me to complete tasks in an all encompassing way.
                    {'\n'}Thus... breaking both the laws of instrument, and Murphy. I have over 3 years experience working with JS and it's many libraries.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    baseContainer: {
        backgroundColor: 'transparent'
      },
      bottomButton: {
        display: 'flex',
        flex: 0
      },
      getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 75,
        backgroundColor: 'rgba(239, 235, 234, 0.3)',
        borderRadius: 10,
        position: 'relative',
        paddingVertical: 10,
        top: -4,
        right: 40
      },
      descriptionContainer: {
        alignItems: 'center',
        position: 'relative',
        top: 200,
        padding: 15,
        backgroundColor: 'rgba(239, 235, 234, 0.7)',
        marginHorizontal: 15,
        borderRadius: 5
      },
      introText: {
        fontSize: 17,
        color: 'black',
        opacity: 2,
        lineHeight: 24,
        textAlign: 'center',
      },
      descriptionText: {
        color: 'black',
        fontSize: 17,
        lineHeight: 20
      },
})