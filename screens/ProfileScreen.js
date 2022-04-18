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

const ProfileScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen is here</Text>
        <Button
          title='Go to Profile'
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    )
}

export default ProfileScreen;