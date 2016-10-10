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
    TouchableHighlight,
    Modal,
    TextInput
} from 'react-native';
var Smooch = require('react-native-smooch');

class Button extends React.Component {
    state = {
        active: false,
    };

    _onHighlight = () => {
        this.setState({active: true});
    };

    _onUnhighlight = () => {
        this.setState({active: false});
    };

    render() {
        var colorStyle = {
            color: this.state.active ? '#fff' : '#000',
        };
        return (
            <TouchableHighlight
                onHideUnderlay={this._onUnhighlight}
                onPress={this.props.onPress}
                onShowUnderlay={this._onHighlight}
                style={[styles.button, this.props.style]}
                underlayColor="#a9d9d4">
                <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
            </TouchableHighlight>
        );
    }
}

class Splash extends Component {

    constructor(props) {
        super(props);

        this.state = {modalVisible: false, guestName: ''};
        Smooch.setFirstName('KHAAAANNNNN');
        Smooch.setLastName('XXXXXXXX');
        Smooch.setEmail("kurt@ralphgraciesf.com");
        Smooch.show();
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }


    setName(){
        Smooch.setFirstName('KHAAAANNNNN');
        this.setModalVisible(false);
    }

    render() {
        let conciergeActionButton = <Text>Concierge</Text>;
        let setNameActionButton = <Text>Set Name</Text>;


        var modalBackgroundStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        };
        var innerContainerTransparentStyle = {backgroundColor: '#fff', padding: 20};

        let setNameModal = <Modal

            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                alert("Modal has been closed.")
            }}
        >
            <View style={[styles.container, modalBackgroundStyle]}>
                <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                    <Text>Please set your screen name</Text>
                    <TextInput
                        style={{flex:1, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({guestName:text})}
                        value={this.state.guestName}
                    />
                    <Button
                        onPress={this.setName.bind(this,null)}
                        style={styles.modalButton}>
                        OK
                    </Button>
                    <Button
                        onPress={this.setModalVisible.bind(this, false)}
                        style={styles.modalButton}>
                        Cancel
                    </Button>
                </View>
            </View>

        </Modal>;
        return (
            <View style={styles.imageContainer}>
                <Image source={require('../images/splash.png')} style={styles.image}>
                    {setNameModal}
                    <ActionButton
                        buttonColor="rgba(66,134,244,1)"
                        onPress={() => {
                            Smooch.show();
                        }}
                        icon={conciergeActionButton}
                    >
                    </ActionButton>

                    <ActionButton
                        buttonColor="rgba(66,134,244,1)"
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                        incon={setNameActionButton}
                        position="center"
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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    row: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    rowTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 5,
        flex: 1,
        height: 44,
        alignSelf: 'stretch',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        fontSize: 18,
        margin: 5,
        textAlign: 'center',
    },
    modalButton: {
        marginTop: 10,
    },
    pickerItem: {
        fontSize: 16,
    },
});

export default Splash;