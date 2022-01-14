import { useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function Picker({ value, onChange }) {
  const [show, setShow] = useState(Platform.OS === 'ios');
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || value;
    setShow(false);
    //setReminderTime(currentDate);
  };
  const onTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || value;
  };

  const showDatepicker = () => {
    setShow(true);
  };
  return (
    <Layout style={styles.container}>
      <Text category='h5'>{JSON.stringify(value)}</Text>
      <Button appearance='ghost' onPress={showDatepicker}>
        Update Reminder Time
      </Button>
      {show && (
        <>
          <DateTimePicker
            value={value}
            mode='date'
            is24Hour={false}
            display='calendar'
            onChange={onChangeDate}
          />
          <DateTimePicker
            value={value}
            mode='time'
            is24Hour={false}
            display='clock'
            onChange={onTimeChange}
          />
        </>
      )}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default Picker;
