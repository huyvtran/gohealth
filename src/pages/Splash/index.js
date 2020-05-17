import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
const Splash = () => {
  return (
    <View style={styles.pages}>
      <ILLogo />
      <Text style={styles.title}>GOHEALTH</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  pages: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#112340',
    marginTop: 20,
  },
});
