// -----Inbuilt components and modules-----
import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

// -----Custom components and modules-----
import {startReading} from '../utilities/main';
import {getData} from '../services/main';

const Loading = ({navigation}) => {
  // Interval
  const MINUTE_MS = 10000;

  // Run at render
  useEffect(() => {
    // Run every 10s
    const interval = setInterval(async () => {
      try {
        const result = await getData();
        if (result.status == 2) {
          const res = await startReading();
          if (res == 'success') {
            navigation.navigate('Result', {finalData: result});
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, MINUTE_MS);

    // Clear interval
    return () => clearInterval(interval);
  }, []);

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
            marginBottom: 30,
            textAlign: 'center',
          }}>
          Getting Data from the Device...
        </Text>
        <Text
          style={{
            color: '#7D2613',
            fontSize: 20,
            marginBottom: 30,
          }}>
          Wait Couple of Minutes!
        </Text>
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
                res == 'success' ? navigation.navigate('Home') : null,
              )
            }>
            <Text style={{color: '#000'}}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Loading;
