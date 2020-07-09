// export default App;
import 'react-native-gesture-handler';
import React from 'react';
import { store,persistor } from "./src/store/store";
import { Provider } from 'react-redux';
import Application from "./src/App";
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  return (
    <Provider store={store}>
      <MenuProvider>
        <Application />
        </MenuProvider>
    </Provider>
  );
}
