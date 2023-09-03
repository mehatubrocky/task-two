import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Deshboard from '../components/deshboard';
import Settings from '../components/settings';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from '../components/tabs';
import {s} from 'react-native-wind';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const MainScreen = ({navigation, route}: NativeStackScreenProps<any>) => {
  const [selectedComponent, setSelectedComponent] = useState('Deshboard');

  const showDashboard = () => {
    setSelectedComponent('Deshboard');
  };

  const showSettings = () => {
    setSelectedComponent('Settings');
  };
  return (
    <SafeAreaView>
      <View style={s`m-5`}>
        <View style={s`relative flex flex-row items-center`}>
          <View style={s`left-0 bg-gray-600 w-6 h-6 rounded-full items-center`}>
            <Icon
              name="chevron-left"
              size={16}
              style={s`text-yellow-400  mt-1`}
            />
          </View>
          <Text style={s`text-center ml-28 text-yellow-400 text-lg font-bold`}>
            Firewall
          </Text>
        </View>
        <View
          style={s`bg-gray-600 h-10 rounded-full mt-5 p-2 flex flex-row items-center justify-between`}>
          <TouchableOpacity onPress={showDashboard}>
            <Text
              style={s`h-8 bg-gray-900 rounded-full p-1 w-40 text-center mr-1 text-yellow-400`}>
              Deshboard
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={showSettings}>
            <Text
              style={s`h-8 rounded-full p-1 w-40 text-center `}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* {selectedComponent === 'Deshboard' && <Deshboard navigation={navigation} route={route} />}
      {selectedComponent === 'Settings' && <Settings navigation={navigation} route={route} />} */}
    </SafeAreaView>
  );
};

export default MainScreen;
