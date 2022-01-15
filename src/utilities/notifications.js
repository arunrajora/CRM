import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function AskPermissionForNotification(customer) {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get permission for notifications!');
  }
  return finalStatus;
}

export async function setNotification(customer) {
  const finalStatus = await AskPermissionForNotification(customer);
  if (finalStatus === 'granted') {
    return Notifications.scheduleNotificationAsync({
      content: {
        title: 'Talk to customer',
        body: `Talk to ${customer.firstName} ${customer.lastName}`,
        data: { data: customer },
        sound: true,
        vibrate: true,
        priority: 'high',
      },
      trigger: new Date(customer.reminderTime),
    });
  }
  return null;
}

export async function removeNotification(id) {
  return Notifications.cancelScheduledNotificationAsync(id);
}
