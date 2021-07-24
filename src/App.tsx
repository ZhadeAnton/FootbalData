import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import MainPage from './Routes/MainPage/MainPage';
import LeaguesContainer from './Containers/LeaguesContainer';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/leagues' component={LeaguesContainer} />
      </Switch>
    </>

  );
}

export default App;
