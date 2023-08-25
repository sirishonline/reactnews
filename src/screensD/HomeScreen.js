import * as React from 'react';
import {Button, View, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'start'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="My Profile"
          onPress={() => navigation.navigate('ProfileScreen')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
