import Customer from '../Screens/Customer';
import CustomerList from '../Screens/CustomerList';
import EditCustomer from '../Screens/EditCustomer';
import RegionList from '../Screens/RegionList';
import Welcome from '../Screens/Welcome';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function NavigationScreens(props) {
  return (
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
  );
}

export default NavigationScreens;
