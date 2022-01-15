import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {
  Layout,
  Text,
  Input,
  Toggle,
  Button,
  Icon,
} from '@ui-kitten/components';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '../components/DateTimePicker';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useDispatch } from 'react-redux';

function EditCustomer({ navigation, route }) {
  const customer = useSelector(({ customers }) =>
    customers.find(({ id }) => id === route.params?.id)
  );
  const regions = useSelector(({ regions }) => regions);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(customer?.firstName ?? '');
  const [lastName, setLastName] = useState(customer?.lastName ?? '');
  const [isActive, setIsActive] = useState(customer?.active ?? false);
  const [region, setRegion] = useState(customer?.region ?? regions[0].id);
  const [reminderTime, setReminderTime] = useState(
    customer?.reminderTime
      ? new Date(customer.reminderTime)
      : moment().add(5, 'minute').toDate()
  );
  const [isReminderActive, setIsReminderActive] = useState(
    customer?.reminderTime !== null && customer?.reminderTime !== undefined
  );

  const isDateValid = isReminderActive
    ? moment(reminderTime).diff(moment()) > 0
    : true;

  const saveCustomerDetails = useCallback(() => {
    if (firstName.length === 0) {
      alert('First name should not be empty.');
    } else if (lastName.length === 0) {
      alert('Last name should not be empty.');
    } else if (isReminderActive && moment(reminderTime).diff(moment()) <= 0) {
      alert('Date is in the past.');
    } else {
      const user = {
        id: route.params?.id ?? null,
        firstName,
        lastName,
        region,
        active: isActive,
        reminderTime: isReminderActive ? reminderTime.toISOString() : null,
        notificationId: customer?.notificationId,
      };
      dispatch({ type: 'SAVE_CUSTOMER', customer: user });
      navigation.goBack();
    }
  }, [firstName, lastName, isReminderActive, reminderTime, region, isActive]);
  useEffect(() => {
    navigation.setOptions({
      title: 'Edit Customer',
      headerRight: () => (
        <Button
          appearance='ghost'
          accessoryLeft={<Icon name='save' />}
          onPress={saveCustomerDetails}
        />
      ),
    });
  }, [navigation, saveCustomerDetails]);

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Input
          size='large'
          label='First Name'
          style={styles.input}
          value={firstName}
          maxLength={50}
          placeholder='First Name'
          onChangeText={setFirstName}
        />
        <Input
          size='large'
          label='Last Name'
          style={styles.input}
          defaultValue={lastName}
          maxLength={50}
          placeholder='Last Name'
          onChangeText={setLastName}
        />
        <Toggle checked={isActive} onChange={setIsActive}>
          {isActive ? 'Active' : 'Inactive'}
        </Toggle>
        <Text category='p2'>Region:</Text>
        <Picker selectedValue={region} onValueChange={setRegion}>
          {regions.map(({ id, name }) => (
            <Picker.Item key={id} label={name} value={id} />
          ))}
        </Picker>
        <Toggle
          status={isDateValid ? 'primary' : 'danger'}
          checked={isReminderActive}
          onChange={setIsReminderActive}
        >
          {!isDateValid && 'Invalid date from past'}
          {isReminderActive &&
            isDateValid &&
            `Remind ${moment(reminderTime).fromNow()}`}
          {!isReminderActive && 'No reminder active'}
        </Toggle>
        {isReminderActive && (
          <>
            <Text style={styles.text} category='h5'>
              {moment(reminderTime).format('llll')}
            </Text>
            <DateTimePicker
              value={reminderTime}
              onChange={(date, skip_diff) => {
                const diff = moment(date).diff(moment());
                if (!skip_diff && diff <= 0) {
                  alert('Reminder can only be set for future date and time');
                }
                setReminderTime(date);
              }}
            />
          </>
        )}
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  input: {
    marginVertical: 12,
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default EditCustomer;
