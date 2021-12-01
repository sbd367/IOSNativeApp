import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import Carousel from 'react-native-anchor-carousel';
import discordBotSS from '../assets/images/discord.png';
import zapInfoPhoto from '../assets/images/zapindeed.png';
import NativeApp from '../assets/images/NativeApp.png';
import { Text, View } from './Themed';
import { Project } from "../types";

export default function TabTwo() {
    const carouselRef = React.useRef(null);
    const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
    const projects = [
        {
            projectName: 'Discord Music Bot',
            projectDescription: 'This is a music bot that I wrote that takes either YouTube URLs, or search strings, and plays that audio to a voice channel',
            repoUrl: 'https://github.com/sbd367/DiscordMusicApp',
            backgroundPhoto: discordBotSS
        },
        {
            projectName: 'React Native App (you\'re lookn at it)',
            projectDescription: 'This is a React IOS application that I made using tooling provided by expo, this application was written with TypeScript and React/Native',
            repoUrl: 'https://github.com/sbd367/IOSNativeApp',
            backgroundPhoto: NativeApp
        },
        {
            projectName: 'ZapInfo',
            projectDescription: 'This application took up a good chunk of my time and was the launching point for my career as a software developer. Here I learned an incredible amout both working in a startup environment aswell as working within a large corporation.',
            repoUrl: 'https://www.zapinfo.com/',
            backgroundPhoto: zapInfoPhoto
        },
    ]
    const renderItem = ({item, index}:{item:Project, index:Number}) => {
     return (
             <TouchableOpacity
                style={styles.item}
                onPress={() => {
                    carouselRef.current.scrollToIndex(index);
                }}>
                <Image style={styles.projectPhoto} source={item.backgroundPhoto}/>
                <View style={styles.innerCcontent}>
                    <View style={styles.headerText}>
                        <Text style={styles.titleText}>{item.projectName}</Text>
                    </View>
                    <View style={styles.descriptionText}>
                        <Text style={styles.descriptionInnerText}>{item.projectDescription}</Text>
                    </View>
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
                itemHeight={windowHeight}
                containerWidth={windowWidth - 50}
                separatorWidth={1}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    innerCcontent: {
        backgroundColor: 'transparent',
        position: "relative",
        bottom: 130
    },
    headerText: {
        display: 'flex',
        alignItems: 'center',
        bottom: 120,
        right: 30,
        padding: 10,
        width: 250,
        backgroundColor: 'rgba(17, 17, 17, 0.7)'
    },
    projectPhoto: {
        display: "flex",
        alignItems: 'center',
        top: 80,
        right: 86,
        maxWidth: 350

    },
    descriptionInnerText: {
        color: 'white',
    },
    titleText: {
        color: 'white',
        fontFamily: 'monst_italic',
        fontSize: 19
    },
    descriptionText: {
        position: 'relative',
        display: "flex",
        alignContent:'center',
        backgroundColor: 'transparent',
        top: 150,
        width: 250,
        right: 40,
        marginVertical: 20
    },
    baseContainer: {
        backgroundColor: 'transparent',
        bottom: 100
    },
    carousel: {
        flexGrow: 0,
        height: 500,
        top: 150,
        bottom: 100,
        backgroundColor: 'rgba(37, 37, 37, 0.5)',
        borderRadius: 5
    },
    item: {
        position: 'relative',
        marginHorizontal: 93
    } 
});