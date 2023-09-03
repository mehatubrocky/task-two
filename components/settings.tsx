import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import {s} from 'react-native-wind';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = ({navigation}: NativeStackScreenProps<any>) => {
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchToggle = () => {
    setSwitchValue(!switchValue);
  };
  return (
    <View style={s`pr-2`}>
      <View style={s`bg-gray-800 w-full mt-5 ml-1 rounded-lg mb-40 p-5`}>
        <View style={s`flex flex-col`}>
          <View style={s`flex flex-col border-b-1 boder-yellow-400`}>
            <View style={s`flex flex-row items-center justify-between`}>
              <View style={s`flex flex-row`}>
                <Icon name="repeat" size={30} style={s`text-yellow-400`} />
                <Text style={s`text-yellow-400 text-lg ml-2`}>
                  Monitor Connection
                </Text>
              </View>
              <View>
                <Switch
                  value={switchValue}
                  onValueChange={handleSwitchToggle}
                  thumbColor={switchValue ? 'yellow' : 'white'}
                />
              </View>
            </View>
            <View style={s`mt-2 mb-5`}>
              <Text style={s`text-gray-500`}>Real-time Monitoring</Text>
            </View>
          </View>
          <View style={s`flex flex-col`}>
            <View style={s`flex flex-row items-center justify-between`}>
              <View style={s`flex flex-row`}>
                <Icon
                  name="snow-outline"
                  size={30}
                  style={s`text-yellow-400`}
                />
                <Text style={s`text-yellow-400 text-lg ml-2`}>
                  Malicious Website Blocker
                </Text>
              </View>
              <View>
                <Switch
                  value={switchValue}
                  onValueChange={handleSwitchToggle}
                  thumbColor={switchValue ? 'yellow' : 'white'}
                />
              </View>
            </View>
            <View style={s`mt-2 mb-5`}>
              <Text style={s`text-gray-500`}>Real-time Monitoring</Text>
            </View>
          </View>

          <View style={s`flex flex-col`}>
            <View style={s`flex flex-row items-center justify-between`}>
              <View style={s`flex flex-row`}>
                <Icon name="ban" size={30} style={s`text-yellow-400`} />
                <Text style={s`text-yellow-400 text-lg ml-2`}>Ad Blocker</Text>
              </View>
              <View>
                <Switch
                  value={switchValue}
                  onValueChange={handleSwitchToggle}
                  thumbColor={switchValue ? 'yellow' : 'white'}
                />
              </View>
            </View>
            <View style={s`mt-2 mb-5`}>
              <Text style={s`text-gray-500`}>Real-time Monitoring</Text>
            </View>
          </View>

          <View style={s`flex flex-col`}>
            <View style={s`flex flex-row items-center justify-between`}>
              <View style={s`flex flex-row`}>
                <Icon
                  name="hand-right-outline"
                  size={30}
                  style={s`text-yellow-400`}
                />
                <Text style={s`text-yellow-400 text-lg ml-2`}>
                  Block Persistant
                </Text>
              </View>
              <View>
                <Switch
                  value={switchValue}
                  onValueChange={handleSwitchToggle}
                  thumbColor={switchValue ? 'yellow' : 'white'}
                />
              </View>
            </View>
            <View style={s`mt-2 mb-5`}>
              <Text style={s`text-gray-500`}>Real-time Monitoring</Text>
            </View>
          </View>

          <View style={s`flex flex-col`}>
            <View style={s`flex flex-row items-center justify-between`}>
              <View style={s`flex flex-row`}>
                <Icon
                  name="skull-outline"
                  size={30}
                  style={s`text-yellow-400`}
                />
                <Text style={s`text-yellow-400 text-lg ml-2`}>
                  Phishing/Scam Detection
                </Text>
              </View>
              <View>
                <Switch
                  value={switchValue}
                  onValueChange={handleSwitchToggle}
                  thumbColor={switchValue ? 'yellow' : 'white'}
                />
              </View>
            </View>
            <View style={s`mt-2 mb-5`}>
              <Text style={s`text-gray-500`}>Real-time Monitoring</Text>
            </View>
          </View>

          <View style={s`flex flex-col`}>
            <View style={s`flex flex-row items-center justify-between`}>
              <View style={s`flex flex-row`}>
                <Icon name="scan" size={30} style={s`text-yellow-400`} />
                <Text style={s`text-yellow-400 text-lg ml-2`}>
                  QR Code Scanner
                </Text>
              </View>
              <View>
                <Switch
                  value={switchValue}
                  onValueChange={handleSwitchToggle}
                  thumbColor={switchValue ? 'yellow' : 'white'}
                />
              </View>
            </View>
            <View style={s`mt-2`}>
              <Text style={s`text-gray-500`}>Real-time Monitoring</Text>
            </View>
          </View>
          <View style={s`flex flex-row items-cente justify-center mt-2`}>
            <Icon
              name="alert-circle-outline"
              size={40}
              style={s`text-yellow-400 mt-2 mr-2 ml-5`}
            />
            <Text style={s`text-yellow-400 mr-2`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              et dolores, delectus nemo sapiente provident quas repellat
              cupiditate. Iste, molestiae?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
