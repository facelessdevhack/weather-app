import './App.css';
import Routes from './components/routes/routes';
import Sidebar from './components/sidebar/sidebar';
import {  BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './api/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Sidebar />
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
