import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {icons} from '../constants';
import SearchUser from '../components/SearchUser';

const Search = ({navigation}) => {
  return (
    <View style={styles.root}>
      <FlatList
        data={[...Array(8).keys()]}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => <SearchUser onPress={()=>navigation.navigate("Appointment")} index={index} item={item} />}
        ListHeaderComponent={
          <>
            <View style={styles.image}>
              <Image style={styles.image} source={icons.searchImage} />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  {backgroundColor: '#1648CEB0'},
                ]}
              />
            </View>

            <Text
              style={{
                color: '#6A788E',
                ...FONTS.body6,
                marginTop: SIZES.font5,
                marginLeft:SIZES.font5
              }}>
              Hire a nurse
            </Text>
          </>
        }
        ListFooterComponent={<View style={{marginTop: SIZES.font1 * 2.5}} />}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: COLORS.black,
  },
  image: {
    width: SIZES.width,
    height: SIZES.height * 0.3,
  },
});
