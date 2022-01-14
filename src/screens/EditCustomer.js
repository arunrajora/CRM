import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Layout, Text, Input, Toggle } from '@ui-kitten/components';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '../components/DateTimePicker';
import { useSelector } from 'react-redux';

function EditCustomer({ navigation, route }) {
  const customer = useSelector(({ customers }) =>
    customers.find(({ id }) => id === route.params?.id)
  );
  const regions = useSelector(({ regions }) => regions);

  const [firstName, setFirstName] = useState(customer?.firstName ?? '');
  const [lastName, setLastName] = useState(customer?.lastName ?? '');
  const [isActive, setIsActive] = useState(customer?.active ?? false);
  const [region, setRegion] = useState(customer?.region ?? 0);
  const [reminderTime, setReminderTime] = useState(new Date()); //customer?.reminderTime);

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
        <Text category='p2'>Set Reminder at-</Text>
        <DateTimePicker value={reminderTime} onChange={setReminderTime} />
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
});

export default EditCustomer;
