import Customer from '../screens/Customer';
import CustomerList from '../screens/CustomerList';
import EditCustomer from '../screens/EditCustomer';
import RegionList from '../screens/RegionList';
import Welcome from '../screens/Welcome';
import { Button, Icon } from '@ui-kitten/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchInitialDataAction } from '../features/actions';
import {
  homeScreenName,
  regionListScreenName,
  customerListScreenName,
  customerDetailsScreenName,
  customerEditScreenName,
  appTitle,
} from './ScreenNames';

const Stack = createNativeStackNavigator();

function NavigationScreens() {
  const regions = useSelector(({ regions }) => regions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialDataAction());
  }, [dispatch]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={homeScreenName}
        component={Welcome}
        options={{ title: appTitle }}
      />
      <Stack.Screen
        name={regionListScreenName}
        component={RegionList}
        options={({ route, navigation }) => {
          return {
            title: 'Region List',
            headerRight: () => (
              <Button
                appearance='ghost'
                accessoryLeft={<Icon name='edit' />}
                onPress={() => navigation.navigate(customerEditScreenName)}
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name={customerListScreenName}
        component={CustomerList}
        options={({ route }) => ({
          title: ` ${
            regions.find(({ id }) => id === route.params.id)?.name
          } Customers`,
        })}
      />
      <Stack.Screen
        name={customerDetailsScreenName}
        component={Customer}
        options={({ route, navigation }) => {
          return {
            title: 'Customer Details',
            headerRight: () => (
              <Button
                appearance='ghost'
                accessoryLeft={<Icon name='edit' />}
                onPress={() =>
                  navigation.navigate(customerEditScreenName, {
                    id: route.params.id,
                  })
                }
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name={customerEditScreenName}
        component={EditCustomer}
        options={{ title: 'Edit Customer' }}
      />
    </Stack.Navigator>
  );
}

export default NavigationScreens;
