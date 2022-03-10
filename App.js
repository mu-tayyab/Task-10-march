import React from 'react';
import {Provider} from 'react-redux';

import {store} from './src/redux/configureStore';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
