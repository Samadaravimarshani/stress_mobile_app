// -----Inbuilt components and modules-----
import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

const Result = ({route, navigation}) => {
  // Get route params
  const {finalData} = route.params;

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
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 30,
          }}>
          {finalData.prediction == '2' ? 'Stress' : 'Not Stress'}
        </Text>
        <Text
          style={{
            color: '#7D2613',
            fontSize: 20,
            marginBottom: 30,
          }}>
          {finalData.prediction == '0' ? 'Happy' : null}
          {finalData.prediction == '1' ? 'Neutral' : null}
          {finalData.prediction == '3' ? 'Meditation' : null}
        </Text>
        <View style={{width: '40%'}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#fff',
              paddingVertical: 20,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{color: '#000'}}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Result;
