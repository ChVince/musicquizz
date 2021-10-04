import React, {lazy, Suspense} from 'react';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Start from "./components/Start/Start";
import Categories from "./components/Categories";
import Finish from "./components/Finish";
import {APP_PREFIX, ROUTE_URLS} from "./utils/routeConsts";


//Create separate ll bundle for Game component
const Game = lazy(() => import('./components/Game/Game'))

function App() {
    return (
        <div className="App">
            <Router>

                <Suspense fallback={<div>Loading...</div>}>
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
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
