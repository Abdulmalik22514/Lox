import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, icons, SIZES} from '../constants';
import CustomHeader from '../components/CustomHeader';
import HorizontalCalendar2 from '../components/HorizontalCalendar2';
import moment from 'moment';
import CustomButton from '../components/CustomButton';
import {FONTS} from '../constants/theme';
import {BlackCheck} from '../assets/svgs/svg';


const VerticalProgress = ({notLast, done}) => {
  return (
    <View>
      <View>
        <View style={styles.progressBox}>
          <View style={styles.ring}>
            <View style={styles.innerCircle} />
          </View>

          <View style={{width: '50%'}}>
            <Text style={styles.progressName}>Seun Olumide</Text>
            <Text style={styles.progressTime}>9:00 AM</Text>
          </View>

          <View>
            <BlackCheck done={done} />
          </View>
        </View>
      </View>

      {notLast ? (
        <View>
          <View style={styles.verticalLine} />
        </View>
      ) : null}
    </View>
  );
};

const AppointmentList = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <ScrollView>
      <View style={styles.root}>
        <CustomHeader />

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
          <HorizontalCalendar2
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </View>

        <View style={{marginTop: SIZES.font1}}>
          <FlatList
            data={['a', 'b', 'c', 'd']}
            renderItem={({item}) => {
              return (
                <>
                  <VerticalProgress
                    done={item !== 'd' && true}
                    notLast={item !== 'd' && true}
                  />
                </>
              );
            }}
          />
        </View>

        <Pressable
          onPress={() => {
            navigation.navigate('Appointment');
          }}
          style={[styles.discountBox]}>
          <Text style={{...FONTS.body6, color: COLORS.black}}>
            View Appointments
          </Text>
        </Pressable>
      </View>
      <View style={{marginTop: SIZES.font1*3}} />
    </ScrollView>
  );
};

export default AppointmentList;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.font7,
    paddingTop: SIZES.font10,
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
  progressBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
  },
  ring: {
    padding: SIZES.font10,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.font7,
    width: SIZES.font7,
    borderRadius: SIZES.font4,
    borderWidth: 4,
    borderColor: '#0C9359',
  },
  innerCircle: {
    height: SIZES.font8,
    width: SIZES.font8,
    backgroundColor: '#0C9359',
    borderRadius: 30,
  },
  progressName: {
    ...FONTS.body6,
    color: COLORS.black,
  },
  progressTime: {
    ...FONTS.body7,
    opacity: 0.7,
  },
  verticalLine: {
    width: 4,
    height: SIZES.font1 * 1.6,
    marginLeft: SIZES.font10,
    backgroundColor: '#0C9359',
  },
  discountBox: {
    width: '100%',
    height: SIZES.font1 * 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderStyle: 'dashed',
    marginTop: SIZES.font1,
  },
});
