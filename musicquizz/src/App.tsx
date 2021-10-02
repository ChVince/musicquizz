import React from 'react';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Start from "./components/Start";
import Categories from "./components/Categories";
import Finish from "./components/Finish";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              {/*DZ how redirect ?*/}

              <Route exact path='/'>
                  <Redirect to='/quizz'/>
              </Route>

              <Route exact path='/quizz'>
                  <Redirect to='/quizz/start'/>
              </Route>

              <Route path='/quizz/start' component={Start}/>
              <Route path='/quizz/categories' component={Categories}/>
              <Route path='/quizz/step/:step' component={Game}/>
              <Route path='/quizz/finish' component={Finish}/>


          </Switch>
      </Router>
    </div>
  );
}

export default App;
