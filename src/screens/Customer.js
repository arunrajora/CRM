import { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Layout, Icon, Button, Text, Card } from '@ui-kitten/components';

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
    <Layout>
      <SafeAreaView>
        <Card
          status='info'
          header={
            <Layout>
              <Text category='h3'>
                {customer.firstName} {customer.lastName}
              </Text>
              <Button
                status={customer.active ? 'info' : 'basic'}
                size='tiny'
                category='p2'
                style={styles.button}
              >
                {customer.active ? 'Active' : 'Not Active'}
              </Button>
            </Layout>
          }
        >
          <Text category='h6'>Region: {customerRegion}</Text>
          {customer.reminderTime ? (
            <Text category='h6'>Reminder: {customer.reminderTime}</Text>
          ) : (
            <Text category='h6'>No reminder set</Text>
          )}
        </Card>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    flexWrap: 'wrap',
  },
});

export default Customer;
