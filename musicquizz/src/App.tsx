import React from 'react';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Start from "./components/Start";
import Categories from "./components/Categories";
import Finish from "./components/Finish";
import Game from "./components/Game/Game";
import {APP_PREFIX, ROUTE_URLS} from "./utils/routeConsts";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              {/*DZ how redirect ?*/}

              <Route exact path='/'>
                  <Redirect to={APP_PREFIX}/>
              </Route>

              <Route exact path={APP_PREFIX}>
                  <Redirect to={ROUTE_URLS.START_PAGE}/>
              </Route>

              <Route path={ROUTE_URLS.START_PAGE} component={Start}/>
              <Route path={ROUTE_URLS.CATEGORIES_PAGE} component={Categories}/>
              <Route path={ROUTE_URLS.GAME_PAGE} component={Game}/>
              <Route path={ROUTE_URLS.FINISH_PAGE} component={Finish}/>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
