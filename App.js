import React from 'react';
import {COLORS} from './src/constants/theme';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Navigator from './src/navigation/navigation';


const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: COLORS.black,
      accent: COLORS.white,
    },
  };
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
