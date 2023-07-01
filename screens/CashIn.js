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
} from 'react-native';
import { Block, theme } from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from '../components';
import articles from '../constants/articles';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import Images from '../constants/Images';

const { width } = Dimensions.get('screen');

class PayBills extends React.Component {
  goToHomepage = () => {
    const { navigation } = this.props;
    navigation.navigate('Home'); // Replace 'Homepage' with the actual name of your homepage component
  };

  renderArticles = () => {
    const { navigation } = this.props;

    const categories = [
      { name: 'Over the Counter', icon: 'mercury' },
      { name: 'All Bank', icon: 'bank' },
      { name: 'All Cash', icon: 'money' },
      { name: 'Robinson EasyMart', icon: 'shopping-cart' },
      { name: 'Others', icon: 'ellipsis-h' }, // Added "Another Icon"
    ];

    const onlineBankCategories = [
        { name: 'BPI', icon: 'university' },
        { name: 'UnionBank', icon: 'users' },
        { name: 'AUB', icon: 'briefcase' },
        { name: 'Bank of China', icon: 'bank' }, // Changed the icon to 'bank'
        { name: 'LandBank', icon: 'building' },
      { name: 'Others', icon: 'ellipsis-h' }, // Added "Another Icon"
      // Add more categories for "Online Bank" section
    ];

    const columns = 3;
    const rows = Math.ceil(categories.length / columns);
    const onlineBankRows = Math.ceil(onlineBankCategories.length / columns);
    const columnWidth = (width - 40) / columns;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <View style={styles.balance}>
            <Image source={Images.LogoOnboarding} style={styles.logo} />
            <Text style={styles.balanceText}></Text>
          </View>
          <TouchableOpacity style={styles.arrowButton} onPress={this.goToHomepage}>
            <Icon name="arrow-left" size={30} color="black" />
          </TouchableOpacity>

          <View style={styles.container}>
            <Text style={styles.categoryTitle}>CashIn</Text>
            <Text style={styles.categoryTitle1}>Over the Counter:</Text>
            <View style={styles.columnsContainer}>
              {Array.from({ length: columns }).map((_, columnIndex) => (
                <View style={styles.column} key={columnIndex}>
                  {categories
                    .slice(columnIndex * rows, columnIndex * rows + rows)
                    .map((category, categoryIndex) => (
                      <TouchableOpacity
                        style={styles.iconContainer}
                        key={categoryIndex}
                      >
                        <Icon name={category.icon} size={30} color="#b700ab" />
                        <Text style={styles.iconText}>{category.name}</Text>
                      </TouchableOpacity>
                    ))}
                </View>
              ))}
            </View>

            <Text style={styles.categoryTitle1}>Online Bank:</Text>
            <View style={styles.columnsContainer}>
              {Array.from({ length: columns }).map((_, columnIndex) => (
                <View style={styles.column} key={columnIndex}>
                  {onlineBankCategories
                    .slice(columnIndex * onlineBankRows, columnIndex * onlineBankRows + onlineBankRows)
                    .map((category, categoryIndex) => (
                      <TouchableOpacity
                        style={styles.iconContainer}
                        key={categoryIndex}
                      >
                        <Icon name={category.icon} size={30} color="#b700ab" />
                        <Text style={styles.iconText}>{category.name}</Text>
                      </TouchableOpacity>
                    ))}
                </View>
              ))}
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
  categoryTitle: {
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryTitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
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
    marginTop: 26,
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  column: {
    flex: 1,
    marginHorizontal: 10,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
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

export default PayBills;
