import React from 'react';

import Navbar from '../components/Navbar';
import ViewWrapper from '../components/ViewWraper';
import UserWrapper from '../context/NewFlowContext';
import Routes from '../routes';

function App() {
  return (
    <UserWrapper>
      <ViewWrapper>
        <Navbar />
        <Routes />
      </ViewWrapper>
    </UserWrapper>
  );
}

export default App;
