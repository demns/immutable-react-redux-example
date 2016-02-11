import store from '../store';
import Todos from './todos';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  document.getElementById('react')
);