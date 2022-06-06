import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {SIZES, COLORS, icons} from '../constants';
import CustomHeader from '../components/CustomHeader';
import {FONTS} from '../constants/theme';
import {ArrowDown} from '../assets/svgs/svg';
import CustomButton from '../components/CustomButton';
import {Paystack} from 'react-native-paystack-webview';

import LottieView from 'lottie-react-native';

const Payment = ({navigation}) => {
  const [successful, setSucessful] = useState(false);

  const paystackRef = useRef(null);

  const [type, setType] = useState('Credit');
  const [open, setOpen] = useState(false);

  return successful ? (
    <View style={styles.lottieBox}>
      <LottieView
        source={require('../assets/icons/checkMark.json')}
        autoPlay
        loop={false}
        style={{width: 268, height: 263, marginTop: SIZES.font1}}
      />

      <Text style={{...FONTS.h3, color: COLORS.black}}>Done</Text>

      <Pressable
        onPress={() => {
          navigation.navigate('AppointmentList');
          setSucessful(false)

        }}
        style={[styles.discountBox, {marginTop: SIZES.font1 * 6}]}>
        <Text style={{...FONTS.body6, color: COLORS.black}}>
          View Appointments
        </Text>
      </Pressable>
    </View>
  ) : (
    <ScrollView>
      <View style={styles.root}>
        <CustomHeader />
        <View style={styles.body}>
          <Text style={styles.heading}>Payment method</Text>

          <View>
            <View style={styles.cardContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={icons.debitCard}
                  resizeMode={'contain'}
                  style={styles.debitCard}
                />
                <Text style={styles.creditCard}>{type} Card </Text>
              </View>

              <View>
                <Pressable onPress={() => setOpen(prev => !prev)}>
                  <ArrowDown />
                </Pressable>
              </View>
            </View>
            {open && (
              <View style={styles.dropdown}>
                <Pressable
                  onPress={() => {
                    setType('Credit'), setOpen(false);
                  }}
                  style={{
                    height: SIZES.font1 * 1.5,
                    // backgroundColor: 'red',
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                  }}>
                  <Text
                    style={{
                      ...FONTS.body6,
                      paddingLeft: SIZES.font10,
                      color: COLORS.black,
                    }}>
                    Credit card
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setType('Debit'), setOpen(false);
                  }}
                  style={{
                    height: SIZES.font1 * 1.5,
                    // backgroundColor: 'yellow',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      ...FONTS.body6,
                      paddingLeft: SIZES.font10,
                      color: COLORS.black,
                    }}>
                    Debit card
                  </Text>
                </Pressable>
              </View>
            )}
          </View>

          <View style={styles.orderRow}>
            <Text style={{...FONTS.h5, color: COLORS.black}}>Order</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={icons.editButton}
                style={styles.editButton}
              />
              <Text
                style={{
                  ...FONTS.body5,
                  fontWeight: '400',
                  color: COLORS.primary,
                  marginLeft: SIZES.font10 - 5,
                }}>
                Edit
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: SIZES.font9,
            }}>
            <Text style={{...FONTS.body5, color: COLORS.black, opacity: 0.7}}>
              Nurse
            </Text>
            <Text style={{...FONTS.body5, color: COLORS.black, opacity: 0.7}}>
              Quantity
            </Text>
          </View>
          <View style={styles.divider} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: SIZES.font9,
              marginBottom: SIZES.font1,
            }}>
            <View>
              <Text style={{...FONTS.body6, color: COLORS.black, opacity: 0.7}}>
                Seun Olumide
              </Text>
              <Text style={{...FONTS.body6, color: COLORS.black, opacity: 0.7}}>
                $250
              </Text>
            </View>
            <Text style={{...FONTS.body6, color: COLORS.black, opacity: 0.7}}>
              1
            </Text>
          </View>

          <View style={styles.divider} />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: SIZES.font9,
            }}>
            <Text style={{...FONTS.h5, color: COLORS.black}}>Total</Text>
            <Text style={{...FONTS.h5, color: COLORS.black}}>$250</Text>
          </View>

          <View style={styles.discountBox}>
            <Text style={{...FONTS.body6, color: COLORS.black}}>
              Discount code
            </Text>
          </View>

          <CustomButton
            containerStyle={{
              marginTop: SIZES.font1 * 1.4,
              height: SIZES.height * 0.08,
              alignSelf: 'center',
            }}
            label={'PAY'}
            onPress={() => {
              paystackRef.current.startTransaction();
            }}
          />
        </View>

        <View style={{marginBottom: SIZES.height * 0.2}} />

        <Paystack
          ref={paystackRef}
          paystackKey="pk_test_1209d1988dbab555c9e0af890a1c7bcd93b658ac"
          amount={'250'}
          billingEmail="email@loxservices.com"
          activityIndicatorColor="green"
          onCancel={e => {
            console.log(e);
            // handle response here
          }}
          onSuccess={res => {
            res.status && setSucessful(true);
          }}
          autoStart={false}
        />
      </View>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: SIZES.font10,
    backgroundColor: COLORS.white,
  },
  lottieBox: {
    flex: 1,
    paddingHorizontal: SIZES.font7,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  creditCard: {
    ...FONTS.body6,
    fontWeight: '500',
    color: COLORS.black,
  },
  heading: {
    ...FONTS.body6,
    fontWeight: '600',
    color: COLORS.black,
    marginVertical: SIZES.font10,
  },
  body: {
    marginHorizontal: SIZES.font8,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.font9,
    backgroundColor: '#F2F2F2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 5,
    width: '100%',
    paddingVertical: SIZES.font7,
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  debitCard: {
    width: SIZES.font1,
    height: SIZES.font3,
    marginRight: SIZES.font10,
  },
  dropdown: {
    height: SIZES.font1 * 3,
    width: '100%',
    backgroundColor: '#f1f1f1',
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.font1 * 2,
  },
  editButton: {
    width: SIZES.font6,
    height: SIZES.font6,
  },
  divider: {
    height: 0.5,
    width: '100%',
    backgroundColor: COLORS.grey,
    alignSelf: 'center',
    marginVertical: 10,
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
