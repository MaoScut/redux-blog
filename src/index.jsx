// import ReactDOM from 'react-dom';
// import React from 'react';
// import configureStore from './redux/configureStore';
// import {Provider} from 'react-redux';
// import {syncHistoryWhitStore} from 'react-router-redux';
// import routes from './routes/index';
// import {browserHistory} from 'react-router';

// const store = configureStore();
// const history = syncHistoryWhitStore(browserHistory, store);

// ReactDOM.render(<Provider>
// 	{routes(history)}
// 	</Provider>, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(<AppContainer>
    <Provider store={store}>
      <Component />
    </Provider>
  </AppContainer>,
    document.getElementById('root')
  );
};
// const render = (Component) => {
//   ReactDOM.render(<AppContainer>
//       <Component />
//   </AppContainer>,
//     document.getElementById('root')
//   );
// };

render(RootApp);


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => { render(RootApp) })
}


