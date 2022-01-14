import Customer from '../screens/Customer';
import CustomerList from '../screens/CustomerList';
import EditCustomer from '../screens/EditCustomer';
import RegionList from '../screens/RegionList';
import Welcome from '../screens/Welcome';
import { Text, Button, Icon } from '@ui-kitten/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

function NavigationScreens(props) {
  const regions = useSelector(({ regions }) => regions);

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
        options={({ route, navigation }) => {
          return {
            title: 'Region List',
            headerRight: () => (
              <Button
                appearance='ghost'
                accessoryLeft={<Icon name='edit' />}
                onPress={() => navigation.navigate('CustomerEdit')}
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name='CustomerList'
        component={CustomerList}
        options={({ route }) => ({
          title: ` ${
            regions.find(({ id }) => id === route.params.id)?.name
          } Customers`,
        })}
      />
      <Stack.Screen
        name='CustomerDetails'
        component={Customer}
        options={({ route, navigation }) => {
          return {
            title: 'Customer Details',
            headerRight: () => (
              <Button
                appearance='ghost'
                accessoryLeft={<Icon name='edit' />}
                onPress={() =>
                  navigation.navigate('CustomerEdit', { id: route.params.id })
                }
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name='CustomerEdit'
        component={EditCustomer}
        options={{ title: 'Edit Customer' }}
      />
    </Stack.Navigator>
  );
}

export default NavigationScreens;
