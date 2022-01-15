import { useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

function getDate(date) {
  return moment(date).format('L');
}

function getTime(date) {
  return moment(date).format('LT');
}

function Picker({ value, onChange }) {
  const [showMode, setShowMode] = useState(null);
  const onChangeDateTime = (event, selectedDate) => {
    const currentDate = selectedDate || value;
    setShowMode(null);
    if (showMode === 'date') {
      const newDateTime = `${getDate(currentDate)} ${getTime(value)}`;
      onChange(moment(newDateTime, 'MM/DD/YYYY h:m a').toDate(), true);
      setShowMode('time');
    } else {
      setShowMode(null);
      const newDateTime = `${getDate(value)} ${getTime(currentDate)}`;
      onChange(moment(newDateTime, 'MM/DD/YYYY h:m a').toDate());
    }
  };

  const showDatepicker = () => {
    setShowMode('date');
  };
  return (
    <Layout style={styles.container}>
      <Button appearance='ghost' onPress={showDatepicker}>
        Change
      </Button>
      {showMode && (
        <>
          <DateTimePicker
            value={value}
            mode={showMode}
            is24Hour={false}
            display={showMode === 'date' ? 'calendar' : 'clock'}
            onChange={onChangeDateTime}
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
