import React from 'react';
import Route from './navigation/Route';
import { StatusBar } from 'expo-status-bar';
import useCachedResources from './hooks/useCachedResources';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <Route />
      </>
    );
  }
}
export default App;