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

class Load extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: 'Philippines',
      showDropdown: false,
    };
  }

  goToHomepage = () => {
    const { navigation } = this.props;
    navigation.navigate('Home'); // Replace 'Homepage' with the actual name of your homepage component
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({ showDropdown: !prevState.showDropdown }));
  };

  selectCountry = (country) => {
    this.setState({ selectedCountry: country, showDropdown: false });
  };

  renderCountryDropdown = () => {
    const { selectedCountry, showDropdown } = this.state;
    const countries = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Australia',
        'Austria',
        'Azerbaijan',
        'The Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Brazil',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cabo Verde',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Colombia',
        'Comoros',
        'Congo, Democratic Republic of the',
        'Congo, Republic of the',
        'Costa Rica',
        'Côte d’Ivoire',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'East Timor (Timor-Leste)',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Eswatini',
        'Ethiopia',
        'Fiji',
        'Finland',
        'France',
        'Gabon',
        'The Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Greece',
        'Grenada',
        'Guatemala',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Korea, North',
        'Korea, South',
        'Kosovo',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Mauritania',
        'Mauritius',
        'Mexico',
        'Micronesia, Federated States of',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Morocco',
        'Mozambique',
        'Myanmar (Burma)',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'North Macedonia',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Qatar',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Sudan, South',
        'Suriname',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Togo',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Vatican City',
        'Venezuela',
        'Vietnam',
        'Yemen',
        'Zambia',
        'Zimbabwe',
      // Add more country options
    ];

    const displayCountries = showDropdown ? countries : countries.slice(0, 5);
  const isShowMoreVisible = countries.length > 5 && !showDropdown;

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity style={styles.dropdownButton} onPress={this.toggleDropdown}>
        <Text style={styles.dropdownButtonText}>{selectedCountry || 'Select Country'}</Text>
        <Icon name={showDropdown ? 'caret-up' : 'caret-down'} size={20} color="black" />
      </TouchableOpacity>
      {showDropdown && (
        <View style={styles.dropdownList}>
          {displayCountries.map((country, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => this.selectCountry(country)}
            >
              <Text style={styles.dropdownItemText}>{country}</Text>
            </TouchableOpacity>
          ))}
          {isShowMoreVisible && (
            <TouchableOpacity
              style={styles.showMoreButton}
              onPress={this.showMoreCountries}
            >
              <Text style={styles.showMoreButtonText}>Show More</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

showMoreCountries = () => {
  this.setState((prevState) => ({
    showDropdown: true,
  }));
};

  renderArticles = () => {
    const { navigation } = this.props;

    const mobileCategories = [
      { name: 'Globe', icon: 'globe', phrase: 'Connect with the world' },
      { name: 'TM', icon: 'users', phrase: 'Enjoy the perks of being TM' },
      { name: 'GOMO', icon: 'rocket', phrase: 'Experience digital lifestyle' },
      { name: 'Cherry', icon: 'phone', phrase: 'Quality mobile devices' },
      { name: 'Smart', icon: 'mobile', phrase: 'Live the Smart Life' },
      { name: 'TNT', icon: 'comments', phrase: 'Unlimited talk and text' },
      { name: 'DITO', icon: 'signal', phrase: 'DITO: Ang Bagong Player!' },
    ];

    const columns = 4;
    const rows = Math.ceil(mobileCategories.length / columns);
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
            <Text style={styles.categoryTitle}>LOAD</Text>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.featureButton}
                onPress={() => navigation.navigate('Load')}
              >
                <Text style={styles.iconText}>Mobile</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.featureButton}
              >
                <Text style={styles.iconText}>BroadBand</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.featureButton}
              >
                <Text style={styles.iconText}>Non Telco</Text>
              </TouchableOpacity>
            </View>

            {this.renderCountryDropdown()}

            <View style={styles.columnsContainer}>
              {Array.from({ length: columns }).map((_, columnIndex) => (
                <View style={styles.column} key={columnIndex}>
                  {mobileCategories
                    .slice(columnIndex * rows, columnIndex * rows + rows)
                    .map((category, categoryIndex) => (
                      <TouchableOpacity
                        style={styles.iconContainer}
                        key={categoryIndex}
                      >
                        <Icon name={category.icon} size={30} color="#b700ab" />
                        <Text style={styles.iconText}>{category.name}</Text>
                        {category.phrase && (
                          <Text style={styles.iconPhrase}>{category.phrase}</Text>
                        )}
                      </TouchableOpacity>
                    ))}
                </View>
              ))}
            </View>

            {/* Add Broadband and Non Telco sections here */}
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
  dropdownContainer: {
    marginTop: 10,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
  },
  dropdownButtonText: {
    fontSize: 16,
    marginRight: 5,
  },
  dropdownList: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  dropdownItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dropdownItemText: {
    fontSize: 14,
  },
  featureButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#b700ab',
    margin: 10,
  },  
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default Load;
