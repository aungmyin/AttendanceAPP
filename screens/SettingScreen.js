import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

const SettingScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Screen is here</Text>
        <Button
          title='Go to Profile'
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    )
}

export default SettingScreen;