import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../components';
import {colors} from '../../utils/colors';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground style={styles.page} source={ILGetStarted}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={15} width={0} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.white,
    marginTop: 150,
    // fontFamily: 'Nunito-SemiBold',
  },
});
