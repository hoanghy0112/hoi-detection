import React from 'react';

import {StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SCREEN_NAMES from '../constants/screens';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PredictionScreen from '../screens/PredictionScreen/PredictionScreen';
import StatisticScreen from '../screens/StatisticScreen/StatisticScreen';
import DownloadScreen from '../screens/DownloadScreen/DownloadScreen';
import FONT_FAMILY from '../constants/fonts';
import COLORS from '../constants/colors';
import DrawingScreen from '../screens/DrawingScreen/DrawingScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={SCREEN_NAMES.HOME_SCREEN}
            component={HomeScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.PREDICTION_SCREEN}
            component={PredictionScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.STATISTIC_SCREEN}
            component={StatisticScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.DOWNLOAD_SCREEN}
            component={DownloadScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.DRAWING_SCREEN}
            component={DrawingScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    fontFamily: FONT_FAMILY.POPPINS['Poppins-Medium'],
  },
});

export default RootNavigator;
