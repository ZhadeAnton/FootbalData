import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import MainPage from './Routes/MainPage/MainPage';
import LeaguesContainer from './Containers/LeaguesContainer';
import CompetitionContainer from './Containers/CompetitionContainer';
import MatchesContainer from './Containers/MatchesContainer';
import LeagueShuduleContainer from './Containers/LeagueSheduleContainer';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/leagues' component={LeaguesContainer} />
        <Route exact path='/leagues/:id/matches' component={LeagueShuduleContainer} />
        <Route exact path='/leagues/:id' component={CompetitionContainer} />
        <Route exact path='/matches' component={MatchesContainer} />
      </Switch>
    </>

  );
}

export default App;
