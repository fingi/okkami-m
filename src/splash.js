/**
 * Created by KHAN on 10/9/2016.
 */

import React, {Component} from 'react';
import ActionButton from 'react-native-action-button';
import {
    Dimensions,
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';
var Smooch = require('react-native-smooch');

class Splash extends Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            Smooch.show();
        }, 3500);
    }

    render() {
        let icon = <Text> Talk! </Text>;
        return (
            <View style={styles.imageContainer}>
                <Image source={require('../images/splash.png')} style={styles.image}>
                    <ActionButton
                        buttonColor="rgba(66,134,244,1)"
                        onPress={() => {
                            Smooch.show();
                        }}
                        icon={icon}
                    >
                    </ActionButton>
                </Image>

            </View>
        );
    }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    imageContainer: {},
    image: {
        width: windowWidth,
        height: windowHeight
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
});

export default Splash;