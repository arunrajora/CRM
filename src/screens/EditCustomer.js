import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Switch,
  FlatList,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector } from 'react-redux';
import DatePicker from 'react-native-date-picker';

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
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={firstName}
        maxLength={50}
        placeholder='First Name'
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        defaultValue={lastName}
        maxLength={50}
        placeholder='Last Name'
        onChangeText={setLastName}
      />
      <View>
        <Text>Active:</Text>
        <Switch value={isActive} onValueChange={setIsActive} />
      </View>
      <Text>Region:</Text>
      <Picker
        selectedValue={region}
        onValueChange={setRegion}
        style={{
          alignSelf: 'stretch',
        }}
      >
        {regions.map(({ id, name }) => (
          <Picker.Item key={id} label={name} value={id} />
        ))}
      </Picker>
      <Text>Set Reminder at-</Text>
      {/* <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <DateTimePicker
          style={{
            width: '50%',
          }}
          value={new Date(1598051730000)}
          mode='datetime'
          onChange={(value) => console.log(value)}
        />
        <DateTimePicker
          style={{
            width: '50%',
          }}
          value={new Date(reminderTime)}
          mode='time'
          is24Hour={false}
          onChange={(value, selectedDate) =>
            console.log('new time is', selectedDate)
          }
        />
      </View> */}
      <DatePicker
        date={reminderTime}
        onConfirm={(date) => {}}
        onCancel={() => {}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'stretch',
  },
  button: {
    alignSelf: 'stretch',
    borderWidth: 10,
    borderColor: 'red',
    padding: 50,
    color: 'green',
  },
});

export default EditCustomer;
