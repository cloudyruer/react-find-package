import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Search For A Package</h1>
      <RepositoriesList />
    </Provider>
  );
};
export default App;
