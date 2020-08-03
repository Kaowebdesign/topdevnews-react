import rootReducer from '../reducers';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, /*compose*/} from 'redux';
// import { routerMiddleware } from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';



export const history = createBrowserHistory();

export default function configureStore(){

  // const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer(history), 
    composeWithDevTools(
      applyMiddleware(thunk)
    )
    // compose(
    //   applyMiddleware(
    //     routerMiddleware(history),
    //   )
    // )
  );

  return store;

}



