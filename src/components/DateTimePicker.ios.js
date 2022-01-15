import { useState } from 'react';
import { Button, Layout } from '@ui-kitten/components';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

function Picker({ value, onChange }) {
  console.log('value', value);
  return (
    <Layout>
      <DateTimePicker
        value={value}
        mode='datetime'
        is24Hour={false}
        display='spinner'
        onChange={(event, newDate) => onChange(newDate)}
      />
    </Layout>
  );
}

export default Picker;
