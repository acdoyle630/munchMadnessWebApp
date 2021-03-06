import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducers  from './reducers';
import App from './containers/App';
import finalFork from './containers/App/finalFork';
import championDish from './containers/App/championDish';
import winner from './containers/App/winner';
import chooseContenders from './containers/App/chooseContenders';
import './index.css';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path = "/" component={App}/>
        <Route path = '/chooseContenders' component = {chooseContenders}/>
        <Route path = "/finalFork" component={finalFork}/>
        <Route path = '/championDish' component ={championDish} />
        <Route path = '/winner' component = {winner} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);