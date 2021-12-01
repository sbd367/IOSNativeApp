import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions, Image, Linking, Alert } from "react-native";
import Carousel from 'react-native-anchor-carousel';
import discordBotSS from '../assets/images/discord.png';
import zapInfoPhoto from '../assets/images/zapindeed.png';
import NativeApp from '../assets/images/NativeApp.png';
import { Text, View } from './Themed';
import { Project } from "../types";
import { Button } from "react-native-elements";

export default function TabTwo() {
    const carouselRef = React.useRef(null);
    const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
    const projects = [
        {
            projectName: 'ZapInfo',
            projectDescription: [
                'This application was the launching point for my career as a software developer.',
                'This was an Chrome extension based IaaS platform used for recruiting/sourcing task automation.'
            ],
            repoUrl: 'https://www.zapinfo.com/',
            backgroundPhoto: zapInfoPhoto
        },
        {
            projectName: 'Discord Music Bot',
            projectDescription: [
                'This is a music bot that I wrote, it takes accepts either YouTube URLs, or search strings, then plays that audio to a voice channel.',
                'This Projects was created is JS and interacts with Discord\'s API via Discord.js'
            ],
            repoUrl: 'https://github.com/sbd367/DiscordMusicApp',
            backgroundPhoto: discordBotSS
        },
        {
            projectName: 'React Native App (you\'re lookn at it)',
            projectDescription: ['This is a React IOS application that I made using tooling provided by expo, this application was written with TypeScript and React/Native'],
            repoUrl: 'https://github.com/sbd367/IOSNativeApp',
            backgroundPhoto: NativeApp
        }
    ]
    const renderItem = ({item, index}:{item:Project, index:Number}) => {
     return (
        <View style={styles.itemContainer}>
            <TouchableOpacity
            onPress={() => {
                carouselRef.current.scrollToIndex(index);
            }}>
            <View style={styles.headerText}>
                <Text style={styles.titleText}>{item.projectName}</Text>
            </View>
            <View style={styles.projectPhoto}>
                <Image style={styles.actualPhoto} source={item.backgroundPhoto}/>
            </View>
            <View style={styles.descriptionText}>
                {
                    item.projectDescription.map((descLine, ind) => (
                        <Text key={ind} style={styles.descriptionInnerText}>{descLine}</Text>
                    ))
                }
            </View>
            <View style={styles.bottomButtons}>
              <Button 
                title='See More'
                type='outline'
                onPress={async () => {
                    let supported = await Linking.canOpenURL(item.repoUrl);
                return supported ? Linking.openURL(item.repoUrl) : Alert.alert('I\'m not sure what to do here...');
              }}/>
            </View>
            </TouchableOpacity>
        </View>
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
        bottom: 1
    },
    headerText: {
        display: 'flex',
        flex: 0,
        padding: 20,
        top: 30,
        width: 250,
        left: 55,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'rgba(17, 17, 17, 0.7)'
    },
    projectPhoto: {
        display: 'flex',
        flex: 0,
        backgroundColor: 'transparent',
        alignItems: 'center',
        top: 60
    },
    actualPhoto: {
        borderRadius: 7
    },
    descriptionInnerText: {
        color: 'white',
        fontSize: 16,
        marginTop: 7,
        overflow: 'scroll'
    },
    titleText: {
        color: 'white',
        fontFamily: 'monst_italic',
        fontSize: 19
    },
    descriptionText: {
        display: 'flex',
        flex: 0,
        position: 'relative',
        alignItems:'center',
        backgroundColor: 'rgba(17, 17, 17, 0.7)',
        top: 50,
        borderRadius: 6,
        padding: 15,
        width: 250,
        left: 60,
        marginVertical: 25
    },
    itemContainer: {
        display: 'flex',
        backgroundColor: 'transparent',
        flex: 0,
        height: 600,
        bottom: 0,
        alignContent: 'center'
    },
    baseContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        bottom: 70
    },
    carousel: {
        flexGrow: 0,
        height: 550,
        top: 60,
        bottom: 100,
        backgroundColor: 'rgba(37, 37, 37, 0.5)',
        borderRadius: 5
    },
    bottomButton: {
        color:'black'
    },
    bottomButtons: {
        display: 'flex',
        flex: 0,
        top: 70,
        left: 75,
        width: 200,
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    item: {
        color: 'white'
    } 
});