import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles/LandingStyles';

// : React.FC<StackScreenProps<any>> = ({ navigation }) =>
const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LandingScreen</Text>
    </View>
  );
};

export default LandingScreen;
