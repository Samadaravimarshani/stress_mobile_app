// -----Inbuilt components and modules-----
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';

// -----Custom components and modules-----
import {startReading} from '../utilities/main';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#DEDAD7',
        }}>
        <Text
          style={{
            color: '#7D2613',
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 30,
          }}>
          Stress Detection
        </Text>
        <Image
          style={{width: 150, height: 150, marginBottom: 20}}
          source={require('../imgs/logo.png')}
        />
        <View style={{width: '40%'}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#fff',
              paddingVertical: 20,
              borderRadius: 10,
            }}
            onPress={() =>
              startReading().then(res =>
                res == 'success' ? navigation.navigate('Loading') : null,
              )
            }>
            <Text style={{color: '#000'}}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
