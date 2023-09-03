import React, {useEffect, useRef} from 'react';
import {View, Text, SafeAreaView, Animated, Easing} from 'react-native';
import {s} from 'react-native-wind';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const Deshboard = ({navigation}: NativeStackScreenProps<any>) => {
  const dotOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const intervalId = setInterval(() => {
      Animated.timing(dotOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease),
      }).start(() => {
        Animated.timing(dotOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.ease),
        }).start();
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const data = {
    labels: ['1 May', '2 May', '3 May', '4 May'],
    datasets: [
      {
        label: '369',
        data: [10, 20, 40, 32],
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 1,
      },
      {
        label: '333',
        data: [12, 18, 60, 38],
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  return (
    <View>
      <View style={s`bg-gray-800 m-2 rounded-lg`}>
        <View style={s`flex flex-row items-center justify-between`}>
          <View style={s`flex flex-row`}>
            <Icon name="wifi" size={20} style={s`text-yellow-400 p-2`} />
            <Text style={s`text-yellow-400 text-lg font-bold ml-1 mt-1`}>
              Wifi Connections
            </Text>
          </View>
          <View style={s`flex flex-row items-center`}>
            <Text style={s`mr-1`}>Connected</Text>
            <Animated.View
              style={{
                width: 8,
                height: 8,
                marginRight: 10,
                backgroundColor: 'yellow',
                borderRadius: 5,
                opacity: dotOpacity,
              }}
            />
          </View>
        </View>

        <View style={s`flex flex-row items-center justify-between`}>
          <View style={s`flex flex-row items-center justify-between`}>
            <View style={s`flex flex-col p-2 mt-4`}>
              <View
                style={s`flex flex-row items-center justify-between w-40 mb-2`}>
                <Text style={s`text-gray-400`}>wifi name</Text>
                <Text style={s`text-yellow-400`}>Techforing</Text>
              </View>
              <View
                style={s`flex flex-row items-center justify-between w-40 mb-2`}>
                <Text style={s`text-gray-400`}>Network</Text>
                <Text>Monitoring</Text>
              </View>
              <View style={s`flex flex-row items-center justify-between w-40`}>
                <Text style={s`text-gray-400`}>Firewall</Text>
                <Text>Active</Text>
              </View>
            </View>
          </View>
          <View style={s`bg-yellow-400 w-1 h-full mt-5 shadow-lg rounded-lg`} />
          <View style={s`flex flex-row items-center justify-between`}>
            <View style={s`flex flex-row items-center justify-between`}>
              <View style={s`flex flex-col p-2 mt-4`}>
                <View
                  style={s`flex flex-row items-center justify-between w-40 mb-2`}>
                  <Text style={s`text-gray-400`}>Network Type</Text>
                  <Text style={s`text-yellow-400`}>Public</Text>
                </View>
                <View
                  style={s`flex flex-row items-center justify-between w-40 mb-2`}>
                  <Text style={s`text-gray-400`}>Protocol</Text>
                  <Text>WPA</Text>
                </View>
                <View
                  style={s`flex flex-row items-center justify-between w-40`}>
                  <Text style={s`text-gray-400`}>Protocol</Text>
                  <Text>WPA</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={s`mt-5 ml-2 mb-2`}>
          <BarChart
            data={data}
            width={360}
            height={120}
            yAxisLabel=""
            yAxisSuffix=""
            fromZero={true}
            showBarTops={false}
            chartConfig={{
              backgroundColor: 'black',
              backgroundGradientFrom: 'black',
              backgroundGradientTo: 'gray',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
          />
        </View>
      </View>
      <View style={s`flex flex-col m-2`}>
        <View style={s`flex flex-row items-center justify-around`}>
          <View
            style={s`w-44 h-28 bg-gray-800 rounded-lg flex flex-col items-center justify-center`}>
            <Text style={s`text-4xl text-yellow-400 font-bold`}>0</Text>
            <Text>Malicious Website</Text>
          </View>
          <View
            style={s`w-44 h-28 bg-gray-800 rounded-lg flex flex-col items-center justify-center`}>
            <Text style={s`text-4xl text-yellow-400 font-bold`}>13</Text>
            <Text>Ad Blocked</Text>
          </View>
        </View>
        <View style={s`flex flex-row items-center justify-around mt-5`}>
        <View
            style={s`w-44 h-28 bg-gray-800 rounded-lg flex flex-col items-center justify-center`}>
            <Text style={s`text-4xl text-yellow-400 font-bold`}>6</Text>
            <Text>Unwanted codes of QR</Text>
          </View>
          <View
            style={s`w-44 h-28 bg-gray-800 rounded-lg flex flex-col items-center justify-center`}>
            <Text style={s`text-4xl text-yellow-400 font-bold`}>1</Text>
            <Text>Phishing/Scam</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Deshboard;
