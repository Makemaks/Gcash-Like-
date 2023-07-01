import React, { Component } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  View,
  TextInput,
  StyleSheet
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

class Pin extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          pin: ''
        };
      }
    
      handleButtonPress = (number) => {
        const { pin } = this.state;
        if (pin.length < 4) {
          this.setState({ pin: pin + number });
          if(pin.length == 3)
          {
            this.props.navigation.navigate('Home');
          }
        }
      };
    
      handleDeletePress = () => {
        const { pin } = this.state;
        if (pin.length > 0) {
          this.setState({ pin: pin.slice(0, -1) });
        }
      };
    

  render() {
    const { navigation } = this.props;
    const { pin } = this.state;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block center>
        <View style={styles.container}>
        <Text style={styles.pinText}>{pin}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => this.handleButtonPress('1')}
          >
            <Text style={styles.numberText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => this.handleButtonPress('2')}
          >
            <Text style={styles.numberText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => this.handleButtonPress('3')}
          >
            <Text style={styles.numberText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => this.handleButtonPress('4')}
          >
            <Text style={styles.numberText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => this.handleButtonPress('5')}
          >
            <Text style={styles.numberText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => this.handleButtonPress('6')}
          >
            <Text style={styles.numberText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => this.handleButtonPress('7')}
          >
            <Text style={styles.numberText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => this.handleButtonPress('8')}
          >
            <Text style={styles.numberText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => this.handleButtonPress('9')}
          >
            <Text style={styles.numberText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={this.handleDeletePress}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => this.handleButtonPress('0')}
          >
            <Text style={styles.numberText}>0</Text>
          </TouchableOpacity>
        </View>
      </View>
        </Block>
      </Block>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    pinText: {
      fontSize: 24,
      marginBottom: 20
    },
    buttonContainer: {
      flexDirection: 'row'
    },
    numberButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      height: 80,
      margin: 10,
      borderRadius: 40,
      backgroundColor: '#DDDDDD'
    },
    numberText: {
      fontSize: 24
    },
    deleteButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      height: 80,
      margin: 10,
      borderRadius: 40,
      backgroundColor: '#FF0000'
    },
    deleteText: {
      fontSize: 18,
      color: '#FFFFFF'
    }
  });

export default Pin;
