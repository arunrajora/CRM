import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import NavigationScreens from './src/navigation';

import { store } from './src/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationScreens />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
