import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DeliveryProgress = ({data}) => {
  if (!data || data.length === 0) return null;


//   const firstItem = data.shift();

  return (
    <View style={{flex: 1}}>
      <View style={styles.verticalLine}></View>
      <View style={styles.verticalWrap}>
        <View style={styles.itemWrap}>
          <View style={styles.firstPoint}></View>
          <View style={{marginLeft: 5, flex: 1}}>
            <Text>{data.title}</Text>
          </View>
        </View>


         
        {data.map((item) => {
          return (
              <View key={item.title} style={styles.itemWrap}>
                <View style={styles.pointWrap}>
                  <Text
                    style={[
                      styles.markerText,
                      item.isCurrent ? styles.currentMarker : null,
                    ]}>
                    {item.letter}
                  </Text>
                </View>
                <View style={{marginLeft: 5, flex: 1}}>
                  <Text style={item.isCurrent ? styles.currentMarker : null}>
                    {item.title}
                  </Text>
                </View>
              </View>
          );
        })}
      </View>
    </View>
  );
};

export default DeliveryProgress;

const styles = StyleSheet.create({
  verticalLine: {
    backgroundColor: 'black',
    width: 2,
    height: '95%',
    position: 'absolute',
    marginLeft: 35,
    marginTop: 20,
  },
  verticalWrap: {
    justifyContent: 'space-between',
    height: '100%',
  },
  itemWrap: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginLeft: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointWrap: {
    backgroundColor: 'black',
    height: 20,
    width: 20,
    marginLeft: 5,
    alignItems: 'center',
  },
  firstPoint: {
    backgroundColor: 'black',
    borderRadius: 20,
    height: 10,
    width: 10,
    marginLeft: 10,
  },
  markerText: {color: 'white'},
  currentMarker: {color: 'green'},
});
