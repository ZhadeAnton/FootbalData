import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import MainPage from './Routes/MainPage/MainPage';
import LeaguesContainer from './Containers/LeaguesContainer';
import CompetitionContainer from './Containers/CompetitionContainer';
import MatchesContainer from './Containers/MatchesContainer';
import LeagueShuduleContainer from './Containers/LeagueSheduleContainer';
import MatchByIdContainer from './Containers/MatchByIdContainer';
import LeagueTeamsContainer from './Containers/LeagueTeamsContainer';
import TeamContainer from './Containers/TeamContainer';
import TeamShedulePageContainer from './Containers/TeamShedulePageContainer';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/leagues' component={LeaguesContainer} />
        <Route exact path='/leagues/:id/matches' component={LeagueShuduleContainer} />
        <Route exact path='/leagues/:id/teams' component={LeagueTeamsContainer} />
        <Route exact path='/leagues/:id' component={CompetitionContainer} />
        <Route exact path='/matches' component={MatchesContainer} />
        <Route exact path='/matches/:id' component={MatchByIdContainer} />
        <Route exact path='/team/:id' component={TeamContainer} />
        <Route exact path='/team/:id/shedule' component={TeamShedulePageContainer} />
      </Switch>

      <Footer />
    </>

  );
}

export default App;
