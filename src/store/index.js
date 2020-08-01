import rootReducer from '../reducers';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose} from 'redux';
import { routerMiddleware } from 'connected-react-router'



export const history = createBrowserHistory();

export default function configureStore(initialState){

  // const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer(history), 
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
      )
    )
  );

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer(history));
    });
  }

  return store;

}



