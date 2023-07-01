import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Block, theme } from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../constants/Images';

const { width } = Dimensions.get('screen');

class Psave extends React.Component {
  goToHomepage = () => {
    const { navigation } = this.props;
    navigation.navigate('Home'); // Replace 'Homepage' with the actual name of your homepage component
  };

  renderArticles = () => {
    const { navigation } = this.props;

    const categories = [
      { name: 'BPI', icon: 'university', phrase: 'Easiest to save your savings' },
      { name: 'UNO', icon: 'user', phrase: 'High-rate savings, daily interest, & time deposits!' },
      { name: 'MayBank', icon: 'money', phrase: 'Convenient way to save. Plus get a FREE Debit Card!' },
      { name: 'Psave', icon: 'credit-card', phrase: 'High interest rates, no fees, & free insurance' },
    ];

    const columns = 2;
    const rows = Math.ceil(categories.length / columns);
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
            <Text style={styles.categoryTitle}>₱ Save</Text>
            <Text style={styles.categoryTitle1}>Partner Banks:</Text>
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
                        <Icon name={category.icon} size={60} color="#b700ab" />
                        <Text style={styles.iconText}>{category.name}</Text>
                        {category.phrase && (
                          <Text style={styles.iconPhrase}>{category.phrase}</Text>
                        )}
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
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  iconPhrase: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
    textAlign: 'center',
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Psave;
