import './App.css';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import CitasPage from './pages/CitasPage';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootswatch/dist/sandstone/bootstrap.min.css";
import PadecimientoPage from './pages/PadecimientoPage';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />       
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/citasReactivas" component={CitasPage} />
              <Route path="/padecimientos" component={PadecimientoPage} />
            </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
