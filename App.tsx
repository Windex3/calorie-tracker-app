import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GoalsScreen from './src/screens/GoalsScreen';
import TrackerScreen from './src/screens/TrackerScreen';
import AddEntryScreen from './src/screens/AddEntryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tracker">
        <Stack.Screen name="Tracker" component={TrackerScreen} />
        <Stack.Screen name="Goals" component={GoalsScreen} />
        <Stack.Screen name="AddEntry" component={AddEntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}