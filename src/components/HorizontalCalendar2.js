import React, {useMemo} from 'react';
import {FlatList, StyleSheet, Text, Pressable} from 'react-native';
import {COLORS, SIZES} from '../constants';
import moment from 'moment';
import {FONTS} from '../constants/theme';

const ITEM_WIDTH = SIZES.width * 0.12;
const ITEM_HEIGHT = SIZES.font1 * 2.5;
const ITEM_OFFSET = ITEM_WIDTH + 18;
// interface Props {
//   selectedDate: Date;
//   setSelectedDate: (date: Date) => void;
// }

function dateSubtractDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

function getDayString(date) {
  return date.toString().split(' ')[0];
}

function isSameDay(date1, date2) {
  return date1.getDate() === date2.getDate();
}

function isToday(date) {
  return new Date().getDate() == date.getDate();
}

function generateHorizontalCalendarDates(days) {
  const today = new Date();
  let result = [];
  for (let i = 0; i < days; i++) {
    result[i] = dateSubtractDays(today, i);
  }

  return result.reverse();
}

export default function HorizontalCalendar2({selectedDate, setSelectedDate}) {
  const dates = useMemo(() => {
    return generateHorizontalCalendarDates(14);
  }, []);

  const onDatePress = date => {
    setSelectedDate(date);
  };

  const renderItem = ({item}) => {
    // console.log(moment(item).format("dddd"), "IIIITEM");
    const dayNumber = item.getDate();
    const dayString = getDayString(item);
    const isActive = isSameDay(selectedDate, item);
    return (
      <Pressable
        onPress={() => onDatePress(item)}
        style={[
          styles.item,
          isActive && {
            // backgroundColor: '#EFF1FC',
            borderRadius: 15,
            // width: SIZES.font1 * 2,
            height: ITEM_HEIGHT,
          },
        ]}>
        <Text style={[styles.dayStyle, isActive && styles.activeText]}>
          {isToday(item) ? 'today' : dayString}
        </Text>
        <Text style={[styles.dateOutput, isActive && styles.activeText]}>
          {dayNumber}
        </Text>
        {isActive &&<Text style={{...FONTS.largeTitle, position:"absolute", color:"#0C9359" ,top:SIZES.font1*1.6}}>•</Text>}
      </Pressable>
    );
  };

  return (
    <FlatList
      data={dates}
      renderItem={renderItem}
      keyExtractor={item => item.toDateString()}
      horizontal={true}
      contentContainerStyle={[
        {paddingBottom: 16, paddingLeft: 4, paddingRight: 16},
      ]}
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={dates.length - 8}
      getItemLayout={(_, index) => ({
        length: ITEM_WIDTH,
        offset: ITEM_OFFSET * index,
        index,
      })}
    />
  );
}

const styles = StyleSheet.create({
  dateOutput: {
    ...FONTS.body8,
    color: COLORS.black,
    fontWeight: '900',
  },
  dayStyle: {
    color: COLORS.grey,
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  activeText: {
    color: '#0C9359',
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
});
