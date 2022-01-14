import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as Notifications from 'expo-notifications';
import { useSelector } from 'react-redux';

function Customer({ navigation, route }) {
  const customer = useSelector(({ customers }) =>
    customers.find(({ id }) => id === route.params.id)
  );

  const customerRegion = useSelector(
    ({ regions }) => regions.find(({ id }) => id === customer.region)?.name
  );

  useEffect(async () => {
    // Notifications.setNotificationHandler({
    //   handleNotification: async () => ({
    //     shouldShowAlert: true,
    //     shouldPlaySound: true,
    //     shouldSetBadge: false,
    //   }),
    // });
    // const { status: existingStatus } =
    //   await Notifications.getPermissionsAsync();
    // let finalStatus = existingStatus;
    // if (existingStatus !== 'granted') {
    //   const { status } = await Notifications.requestPermissionsAsync();
    //   finalStatus = status;
    // }
    // if (finalStatus !== 'granted') {
    //   alert('Failed to get push token for push notification!');
    //   return;
    // }
    // alert('10 seconds to go');
    // const result = await Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: 'Talk to customer',
    //     body: `Talk to ${customer.firstName} ${customer.lastName}`,
    //     data: { data: customer },
    //     sound: true,
    //     vibrate: true,
    //     priority: 'high',
    //   },
    //   trigger: new Date().getTime() + 10000,
    // });
    // alert(result);
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        Name: {customer.firstName} {customer.lastName}
      </Text>
      <Text>Region: {customerRegion}</Text>
      <Text>Status: {customer.active ? 'Active' : 'Not Active'}</Text>
      <Text>Reminder for {customer.reminderTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 24,
  },
});

export default Customer;
