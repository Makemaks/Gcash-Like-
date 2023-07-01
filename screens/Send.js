import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { Block, theme } from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from '../components';
import articles from '../constants/articles';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import Images from '../constants/Images';

const { width } = Dimensions.get('screen');

class Send extends React.Component {
  goToHomepage = () => {
    const { navigation } = this.props;
    navigation.navigate('Home'); // Replace 'Homepage' with the actual name of your homepage component
  };

  renderArticles = () => {
    const { navigation } = this.props;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <View style={styles.balance}>
            <Image
              source={Images.LogoOnboarding}
              style={styles.logo}
            />
            <Text style={styles.balanceText}></Text>
          </View>
          <TouchableOpacity style={styles.arrowButton} onPress={this.goToHomepage}>
            <Icon name="arrow-left" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.balanceText}>Amount:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter amount"
              placeholderTextColor="#999"
              keyboardType="numeric"
              textAlign="center"
            />
          </View>
          <Text style={styles.balanceText}>Number:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Number"
              placeholderTextColor="#999"
              keyboardType="numeric"
              textAlign="center"
            />
          </View>
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.iconContainer}>
                <Icon name="bank" size={30} color="#b700ab" />
                <Text style={styles.iconText}>Bank</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <Icon name="credit-card" size={30} color="#b700ab" />
                <Text style={styles.iconText}>Credit</Text>
              </TouchableOpacity>
              {/* Add more icon containers as needed */}
            </View>
          </View>
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.send}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  send: {
    width: width,
  },
  arrowButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balance: {
    backgroundColor: '#b700ab',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    marginTop: 40,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 80,
  },
  barWrapper: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 10,
    paddingBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 3,
    width: 80,
    height: 50,
    marginBottom: 20,
  },
  iconContainer1: {
    alignItems: 'center',
    width: 150,
    height: 50,
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  iconText: {
    fontSize: 10,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  labelContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
  },
  featureButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#b700ab',
  },
  inputContainer: {
    marginTop: 0,
    paddingHorizontal: 20,
  },
  input: {
    height: 60,
    width: '100%',
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#b700ab',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  sendButton: {
    marginTop: 20,
    backgroundColor: '#b700ab',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Send;
