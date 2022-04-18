import React, { useState, memo, useCallback} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [age, setAge] = useState(99);
  const handleClick = () => setAge(age + 1);
  const someValue = "someValue"
  const doSomething = useCallback(() => {
    return someValue
  })

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen is here</Text>
        <Age age={age} handleClick={handleClick} />
        {/* <Instructions doSomething={doSomething} /> */}
        <Instructions doSomething={useCallback(() => {
          return someValue
        }, [someValue])} />
        <Button
          title='Go to Profile'
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    )
}

export default HomeScreen;

const Age = ({age, handleClick}) => {
  return (
    <View style={{ width: '90%', marginBottom: 30 }}>
      <Text> Today I am {age} Years of Age</Text>
      <Text>click the button below 👇</Text>
      <Button onPress={() => handleClick()} title="Get older!" />
    </View>
    
  )
}

const Instructions = memo((props) => {
  return(
    <View style={{ backgroundColor: 'black', paddingHorizontal: 20, paddingVertical: 20, marginBottom: 30}}>
      <Text style={{ color: 'yellow' }}>Follow the instructions above as closely as possible {props.someValue}</Text>
    </View>
  )
})