import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Carousel from 'react-native-anchor-carousel';
import { Text, View } from './Themed';

export default function TabTwo() {
    const carouselRef = React.useRef(null);
    const {width: windowWidth} = Dimensions.get('window');
    const projects = [
        {
            projectName: 'Discord Music Bot',
            projectDescription: 'This is a music bot that I wrote that takes either YouTube URLs, or search strings, and plays that audio to a voice channel',
            repoUrl: 'https://github.com/sbd367/DiscordMusicApp'
        },
        {
            projectName: 'React Native App (you\'re lookn at it)',
            projectDescription: 'This is a React IOS application that I made using the tool expo',
            repoUrl: 'https://github.com/sbd367/IOSNativeApp'
        },
        {
            projectName: 'ZapInfo',
            projectDescription: 'This application took up a good chunk of my time and was the launching point for my career as a software developer',
            repoUrl: 'https://www.zapinfo.com/'
        },
    ]
    const renderItem = ({item, index}:{item:Object, index:Number}) => {
        console.log(item)
     return (
             <TouchableOpacity
                style={styles.item}
                onPress={() => {
                    carouselRef.current.scrollToIndex(index);
                }}>
              <View style={styles.headerText}>
                <Text>{item.projectName}</Text>
              </View>
              <View style={styles.descriptionText}>
                <Text>{item.projectDescription}</Text>
              </View>
             </TouchableOpacity>
     );
    }
    return (
        <View style={styles.baseContainer}>
            <Carousel
                ref={carouselRef}
                data={projects}
                renderItem={renderItem}
                style={styles.carousel}
                itemWidth={windowWidth - 50}
                containerWidth={windowWidth - 50}
                separatorWidth={1}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    headerText: {
        display: 'flex',
        alignItems: 'center'
    },
    descriptionText: {
        backgroundColor: 'black',
        position: 'relative',
        top: 50,
        width: 200,
        marginRight: 60 
    },
    baseContainer: {
        backgroundColor: 'transparent',
        bottom: 100
    },
    carousel: {
        flexGrow: 0,
        height: 300,
        top: 150,
        backgroundColor: 'rgba(37, 37, 37, 0.5)',
        borderRadius: 5
    },
    item: {
        position: 'relative',
        bottom: 100,
        marginHorizontal: 90,
        backgroundColor: 'rgba(17, 17, 17, 0.7)'
    } 
});