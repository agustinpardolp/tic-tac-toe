import React from 'react';

import Navbar from '../components/Navbar';
import ViewWrapper from '../components/ViewWraper';
import Routes from '../routes';

function App() {
  return (
    <ViewWrapper>
      <Navbar />
      <Routes />
    </ViewWrapper>
  );
}

export default App;
