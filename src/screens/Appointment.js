import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import HorizontalCalendar from '../components/HorizontalCalendar';
import moment from 'moment';
import CustomButton from '../components/CustomButton';
import {icons} from '../constants';
import NotchResponsive from '../components/NotchResponsive';
import RNCalendarEvents from 'react-native-calendar-events';

const Appointment = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());


  useEffect(() => {
    RNCalendarEvents.requestPermissions()
      .then(res => {
        console.log('Permission Response', res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <NotchResponsive />
        <View style={styles.topBox}>
          <View>
            <Text style={styles.date}>
              {moment(selectedDate).format('MMM DD, YYYY ')}
            </Text>
            <Text style={styles.day}>
              {moment(selectedDate).format('dddd')}
            </Text>
          </View>

          <CustomButton
            label={'Add'}
            iconLeft
            icon={icons.plus_icon}
            containerStyle={{
              width: SIZES.width * 0.35,
              borderRadius: 30,
            }}
          />
        </View>

        <View>
          <HorizontalCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </View>

        <Text style={styles.schedule}>
          Schedule {moment(selectedDate).format('dddd')}
        </Text>

        <View style={styles.graph}>
          <View style={styles.graphTimeBox}>
            <Text style={styles.time}>9:00</Text>
            <Text style={styles.time}>10:00</Text>
            <Text style={styles.time}>11:00</Text>
          </View>

          <View style={styles.graphInfo}>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center" }}>
              <View style={{width:10, height:10, borderRadius:10, backgroundColor:COLORS.primary, marginRight:5}}/>
              <View
                style={{
                  width: '90%',
                  height: 4,
                  backgroundColor: COLORS.primary,
                  borderRadius:10
                }}
              />
            </View>
            {selectedDate.getDay() == new Date().getDay() ? (
              <View style={styles.pinkBox}>
                <View>
                  <Text style={{...FONTS.h7, color: COLORS.black}}>
                    Cardiologist
                  </Text>
                  <Text
                    style={{...FONTS.body8, color: COLORS.black, opacity: 0.7}}>
                    Dan Johnson
                  </Text>
                </View>
                <Image
                  resizeMode="contain"
                  style={{width: SIZES.font1, height: SIZES.font1}}
                  source={icons.cardiologist}
                />
              </View>
            ) : (
              <View style={[styles.pinkBox, {backgroundColor: '#0C9359'}]}>
                <View>
                  <Text style={{...FONTS.h7, color: COLORS.black}}>
                    Dentist
                  </Text>
                  <Text
                    style={{...FONTS.body8, color: COLORS.black, opacity: 0.7}}>
                    Yen Mary
                  </Text>
                </View>
                <Image
                  resizeMode="contain"
                  style={{width: SIZES.font1, height: SIZES.font1}}
                  source={icons.image}
                />
              </View>
            )}
          </View>
        </View>
        <Text style={styles.schedule}>Reminder</Text>
        <Text style={{...FONTS.body8, color: '#575A61'}}>
          Dont forget schedule for upcoming appointment
        </Text>

        <View style={styles.bottomBox}>
          <View style={styles.infoBox}>
            <View>
              <Text style={styles.name}>Seun Olumide</Text>
              <Text style={styles.profession}>Nurse</Text>

              <View style={styles.ratingBox}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={icons.ratingStar}
                    style={{
                      width: SIZES.font1 * 1.3,
                      height: SIZES.font1 * 1.3,
                    }}
                    resizeMode={'cover'}
                  />
                  <View style={{marginLeft: SIZES.font10 - 5}}>
                    <Text
                      style={{
                        ...FONTS.body9,
                        color: COLORS.black,
                        opacity: 0.7,
                      }}>
                      Rating
                    </Text>
                    <Text style={{...FONTS.h8, color: COLORS.black}}>
                      4.78 out of 5
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <Image style={styles.ImagePic} source={icons.image} />
          </View>

          <View style={styles.timeContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={icons.calanderIcon}
                style={{width: SIZES.font5, height: SIZES.font5}}
              />
              <Text style={{...FONTS.h8, color: COLORS.black, marginLeft: 10}}>
                {moment(selectedDate).format('dddd MMM, DD')}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={icons.timeIcon}
                style={{width: SIZES.font5, height: SIZES.font5}}
              />
              <Text style={{...FONTS.h8, color: COLORS.black, marginLeft: 10}}>
                12:00-12:30
              </Text>
            </View>
          </View>

          <View style={styles.buttonBox}>
            <CustomButton
              containerStyle={{
                width: SIZES.width * 0.4,
              }}
              label={'Schedule'}
              onPress={() => navigation.navigate('Payment')}
            />

            <CustomButton
              containerStyle={{
                width: SIZES.width * 0.4,
                backgroundColor: 'white',
              }}
              textStyle={{
                color: COLORS.primary,
              }}
              label={'Cancel'}
            />
          </View>
        </View>
        <View style={{marginBottom: SIZES.height * 0.13}} />
      </View>
    </ScrollView>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: SIZES.font10,
  },
  text: {
    color: COLORS.black,
  },
  topBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SIZES.font10,
    alignItems: 'flex-end',
  },
  date: {
    ...FONTS.body6,
    color: '#929CAD',
  },
  day: {
    ...FONTS.h4,
    color: COLORS.black,
  },
  schedule: {
    ...FONTS.body5,
    color: COLORS.black,
    fontWeight: '600',
  },
  graph: {
    width: '100%',
    height: SIZES.height * 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomBox: {
    backgroundColor: 'white',
    marginTop: SIZES.font10,
    height: SIZES.height * 0.4,
    // alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: SIZES.font5,
    // flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  infoBox: {
    // backgroundColor: 'white',
    height: SIZES.height * 0.2,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    // paddingHorizontal: SIZES.font5,
    flexDirection: 'row',
  },
  ImagePic: {
    height: '70%',
    width: SIZES.width * 0.25,
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
  ratingBox: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '100%',
    height: SIZES.height * 0.07,
    // alignItems: 'center',
  },
  timeContainer: {
    backgroundColor: '#F5FAFF',
    height: SIZES.font1 * 1.8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.font8,
  },
  buttonBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.font5,
  },
  graphTimeBox: {
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    height: '100%',
    paddingVertical: SIZES.font10,
    width: '15%',
  },
  time: {...FONTS.body6, color: COLORS.grey},
  graphInfo: {
    // backgroundColor: 'cyan',
    height: '100%',
    width: '80%',
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
  },
  pinkBox: {
    width: '100%',
    backgroundColor: '#FAE9E9',
    height: SIZES.font1 * 2.5,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: SIZES.font10,
    justifyContent: 'space-between',
  },
});
