import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {icons} from '../constants';
import CustomButton from '../components/CustomButton';

import NotchResponsive from '../components/NotchResponsive';

const Profile = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <NotchResponsive />

      <View style={styles.topBar}>
        <Image
          source={icons.arrowleftIcon}
          style={styles.arrowLeft}
          resizeMode={'contain'}
        />
        <Text style={styles.text}>Profile</Text>
        <Image
          source={icons.mailIcon}
          style={styles.arrowLeft}
          resizeMode={'contain'}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <View style={styles.topBox}>
            <Image
              style={styles.ImagePic}
              source={icons.image}
              resizeMode={'cover'}
            />
            <View style={styles.rightBox}>
              <Text style={styles.name}>Seun Olumide</Text>
              <Text style={styles.profession}>Nurse</Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  resizeMode="cover"
                  style={{width: SIZES.font2, height: SIZES.font2}}
                  source={icons.groupIcon}
                />
                <View style={{marginLeft: SIZES.font10}}>
                  <Text
                    style={{...FONTS.body9, color: COLORS.black, opacity: 0.7}}>
                    Patients
                  </Text>
                  <Text style={{...FONTS.h9, color: COLORS.black}}>345+</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.middleRow}>
            <View style={{alignItems: 'center'}}>
              <Text style={{...FONTS.h6, color: COLORS.black}}>275</Text>
              <Text style={styles.articles}>Articles</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={{...FONTS.h6, color: COLORS.black}}>234</Text>
              <Text style={styles.articles}>Following</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={{...FONTS.h6, color: COLORS.black}}>125</Text>
              <Text style={styles.articles}>Followers</Text>
            </View>
          </View>

          <View style={styles.buttonBox}>
            <CustomButton
              containerStyle={{
                width: SIZES.width * 0.42,
              }}
              label={'Follow'}
            />
            <CustomButton
              containerStyle={{
                width: SIZES.width * 0.42,
                backgroundColor: COLORS.white,
              }}
              textStyle={{
                color: COLORS.primary,
              }}
              label={'Message'}
            />
          </View>

          <View style={styles.bottomInfo}>
            <View style={styles.ratingBox}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image
                  source={icons.ratingStar}
                  style={{width: SIZES.font1 * 1.3, height: SIZES.font1 * 1.3}}
                  resizeMode={'cover'}
                />
                <View style={{marginLeft: SIZES.font10 - 5}}>
                  <Text
                    style={{...FONTS.body9, color: COLORS.black, opacity: 0.7}}>
                    Rating
                  </Text>
                  <Text style={{...FONTS.h8, color: COLORS.black}}>
                    4.78 out of 5
                  </Text>
                </View>
              </View>
              <CustomButton
                iconRight
                containerStyle={{
                  width: SIZES.width * 0.3,
                  height: SIZES.font1 * 1.3,
                  borderRadius: 30,
                }}
                label={'See all'}
              />
            </View>
            <View style={styles.divider} />

            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: SIZES.font1, height: SIZES.font1}}
                resizeMode={'contain'}
                source={icons.questionMark}
              />
              <View style={{width: '90%', marginLeft: SIZES.font10}}>
                <Text style={{...FONTS.h7, color: COLORS.black}}>
                  Anonymous feedback
                </Text>
                <Text tyle={{...FONTS.body8, color: COLORS.black}}>
                  Very competent specialist. I am very happy that there are such
                  professional doctors. My baby is in safe hands. My child's
                  health is above all
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: SIZES.font1, height: SIZES.font1}}
                resizeMode={'contain'}
                source={icons.profilePic}
              />
              <View style={{width: '85%', marginLeft: SIZES.font10}}>
                <Text style={{...FONTS.h7, color: COLORS.black}}>
                  Erika Lhee
                </Text>
                <Text
                  tyle={{...FONTS.body8, color: COLORS.black, width: '80%'}}>
                  Just a wonderful doctor, very happy that she is leading our
                  child, competent, very smart, nice.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomButtonBox}>
            <CustomButton onPress={()=>navigation.navigate("Appointment")} iconLeft label={'Make an appointmnet'} />
          </View>
          <View style={{marginBottom: SIZES.height * 0.2}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.font10,
  },
  divider: {
    height: 0.5,
    width: '95%',
    backgroundColor: COLORS.grey,
    alignSelf: 'center',
    marginVertical: 10,
  },
  ratingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: SIZES.height * 0.07,
    alignItems: 'center',
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.font1,
    paddingHorizontal: SIZES.font10,
  },
  articles: {
    ...FONTS.body7,
    color: COLORS.black,
    opacity: 0.7,
  },
  text: {
    color: COLORS.black,
    ...FONTS.h6,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: SIZES.font10,
    height: SIZES.height * 0.05,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.font10,
  },
  arrowLeft: {
    width: SIZES.font5,
    height: SIZES.font5,
  },
  topBox: {
    backgroundColor: 'white',
    height: SIZES.height * 0.2,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: SIZES.font5,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  ImagePic: {
    height: '70%',
    width: SIZES.width * 0.25,
  },
  rightBox: {
    height: '70%',
    width: SIZES.width * 0.5,
    paddingLeft: SIZES.font8,
    justifyContent: 'space-between',
  },
  name: {
    ...FONTS.body6,
    fontWeight: '600',
    color: COLORS.black,
  },
  profession: {
    ...FONTS.body8,
    color: COLORS.black,
    opacity: 0.7,
    bottom: SIZES.font10 - 5,
  },
  buttonBox: {
    marginTop: SIZES.font4,
    flexDirection: 'row',
    paddingHorizontal: SIZES.font10,
    justifyContent: 'space-between',
  },
  bottomInfo: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: SIZES.font4,
    paddingVertical: SIZES.font9,
    paddingHorizontal: SIZES.font5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 5,
  },
  anon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'red',
    height: SIZES.height * 0.07,
    alignItems: 'center',
  },
  bottomButtonBox: {
    backgroundColor: 'white',
    height: SIZES.height * 0.09,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
});
