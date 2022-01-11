import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as Notifications from 'expo-notifications';

function Customer({ navigation }) {
  const customer = {
    id: 1,
    firstName: 'Melissa',
    lastName: 'Morris',
    region: 'North East',
    active: false,
    reminderTime: '20 January 2022, 04:44 PM',
  };

  useEffect(async () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    alert('10 seconds to go');
    const result = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Talk to customer',
        body: `Talk to ${customer.firstName} ${customer.lastName}`,
        data: { data: customer },
        sound: true,
        vibrate: true,
        priority: 'high',
      },
      trigger: new Date().getTime() + 10000,
    });
    alert(result);
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        Name: {customer.firstName} {customer.lastName}
      </Text>
      <Text>Region: {customer.region}</Text>
      <Text>{customer.active ? 'Active' : 'Not Active'}</Text>
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
