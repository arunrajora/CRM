import { Button, Layout } from '@ui-kitten/components';
import DateTimePicker from '@react-native-community/datetimepicker';

function Picker({ value, onChange }) {
  return (
    <Layout>
      <DateTimePicker
        value={value}
        mode='datetime'
        is24Hour={false}
        display='spinner'
        onChange={onChange}
      />
      <Button appearance='ghost' onPress={onChange}>
        Update Reminder Time
      </Button>
    </Layout>
  );
}

export default Picker;
