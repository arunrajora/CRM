import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Customer from './src/screens/Customer';
import CustomerList from './src/screens/CustomerList';
import EditCustomer from './src/screens/EditCustomer';
import RegionList from './src/screens/RegionList';
import Welcome from './src/screens/Welcome';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

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
        <Stack.Screen
          name='CustomerList'
          component={CustomerList}
          options={({ route }) => ({
            title: ` ${route.params.name} Customers`,
          })}
        />
        <Stack.Screen
          name='CustomerDetails'
          component={Customer}
          options={({ route, navigation }) => {
            return {
              headerTitle: () => (
                <Text>Customer Details: {route.params.firstName}</Text>
              ),
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('CustomerEdit')}
                  title='Edit'
                  color='#00cc00'
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name='CustomerEdit'
          component={EditCustomer}
          options={({ route, navigation }) => {
            return {
              headerTitle: () => <Text>Edit Customer Details</Text>,
              headerRight: () => (
                <Button
                  onPress={() => alert('save details')}
                  title='Save'
                  color='#00cc00'
                />
              ),
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
