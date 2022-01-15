import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import NavigationScreens from './src/navigation';
import { store } from './src/store';

function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <NavigationScreens />
          </NavigationContainer>
        </ApplicationProvider>
      </Provider>
    </>
  );
}

export default App;
