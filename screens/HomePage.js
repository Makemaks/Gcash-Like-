import React, { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView, View, Text, TouchableOpacity, Modal } from 'react-native';
import { Block, theme } from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';

const { width } = Dimensions.get('screen');

const HomePage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderArticles = () => {
    const data = [
      { quarter: 'M', earnings: 605 },
      { quarter: 'T', earnings: 456 },
      { quarter: 'W', earnings: 200 },
      { quarter: 'TH', earnings: 550 },
      { quarter: 'F', earnings: 320 },
    ];

    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.articles}>
        <Block flex>
          <View style={styles.balance}>
            <Text style={styles.balanceText}>Your Balance:</Text>
            <Text style={styles.balanceText}>P0.00</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.iconsContainer}>
              <View style={styles.iconContainer1}>
                <TouchableOpacity
                  style={styles.featureButton}
                  onPress={() => navigation.navigate('Send')}
                >
                  <Icon name="retweet" size={40} color="black" />
                  <Text style={styles.iconText}>TRANSFER</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconContainer1}>
                <TouchableOpacity
                  style={styles.featureButton}
                  onPress={() => navigation.navigate('CashIn')}
                >
                  <Icon name="plus-circle" size={40} color="black" />
                  <Text style={styles.iconText}>CASH IN</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                 <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'left', fontSize: 16 }}>Your Expenses</Text>
                 </View>
            <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TransactionHistory')}
            >
              <Text style={{ textAlign: 'right', fontSize: 16, color: '#b700ab' }}>
                See More
              </Text>
            </TouchableOpacity>
              </View>
            </View>



            <View style={styles.barContainer}>
                <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 30 }}>
                  <VictoryAxis dependentAxis tickFormat={(tick) => `${tick}`} />
                  <VictoryBar
                    data={data}
                    x="quarter"
                    y="earnings"
                    cornerRadius={{ topLeft: 5, topRight: 5 }}
                    style={{
                      data: { fill: '#b700ab' },
                    }}
                  />
                </VictoryChart>
            </View>
            <View style={styles.iconsContainer}>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={styles.featureButton}
                  onPress={() => navigation.navigate('Send')}
                >
                  <Icon name="send" size={24} color="black" />
                  <Text style={styles.iconText}>SEND</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={styles.featureButton}
                  onPress={() => navigation.navigate('PayBills')}
                >
                  <Icon name="money" size={24} color="black" />
                  <Text style={styles.iconText}>PBills</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={styles.featureButton}
                  onPress={() => navigation.navigate('Psave')}
                >
                  <Icon name="ticket" size={24} color="black" />
                  <Text style={styles.iconText}>PSave</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconContainer}>
              <TouchableOpacity
                  style={styles.featureButton}
                  onPress={() => setModalVisible(true)}
                >
                  <Icon name="get-pocket" size={24} color="black" />
                  <Text style={styles.iconText}>Budget</Text>
                  <Text style={styles.newLabel}>New</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.iconsContainer}>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={styles.featureButton}
                  onPress={() => navigation.navigate('Load')}
                >
                  <Icon name="globe" size={24} color="black" />
                  <Text style={styles.iconText}>Load</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconContainer}>
              <TouchableOpacity
                  style={styles.featureButton}
                  onPress={() => setModalVisible(true)}
                >
                  <Icon name="bank" size={24} color="black" />
                  <Text style={styles.iconText}>Bank</Text>
                  <Text style={styles.newLabel}>New</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={styles.featureButton}
                  onPress={() => setModalVisible(true)}
                >
                  <Icon name="shopping-cart" size={24} color="black" />
                  <Text style={styles.iconText}>Shop</Text>
                  <Text style={styles.newLabel}>New</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={styles.featureButton}
                  onPress={() => console.log('Feature 1 button pressed')}
                >
                  <Icon name="th-list" size={24} color="black" />
                  <Text style={styles.iconText}></Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Block>
      </ScrollView>
    );
  };

  return (
    <Block flex center style={styles.home}>
      {renderArticles()}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Sorry, This Feature is Under Construction.</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Block>
  );
};

const styles = StyleSheet.create({
  home: {
    width: width,
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
    width: 70,
    height: 50,
    marginBottom: 20,
  },
  iconContainer1: {
    alignItems: 'center',
    width: 150,
    height: 50,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#b700ab',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  newLabel: {
    backgroundColor: '#b700ab',
    color: 'white',
    fontSize: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  
});

export default HomePage;
