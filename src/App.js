import './App.css';
import Routes from './components/routes/routes';
import Sidebar from './components/sidebar/sidebar';
import {  BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './api/store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Sidebar />
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
