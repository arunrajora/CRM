import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Customer from './src/screens/Customer';
import CustomerList from './src/screens/CustomerList';
import EditCustomer from './src/screens/EditCustomer';
import RegionList from './src/screens/RegionList';
import Welcome from './src/screens/Welcome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Welcome}
          options={{ title: 'Customer Relationship Management' }}
        />
        <Stack.Screen
          name='RegionList'
          component={RegionList}
          options={{ title: 'Region List' }}
        />
        <Stack.Screen name='CustomerList' component={CustomerList} />
        <Stack.Screen name='CustomerDetails' component={Customer} />
        <Stack.Screen
          name='CustomerEdit'
          component={EditCustomer}
          options={({ route }) => ({ title: 'Editing customer' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
