import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import { BrowserRouter as Router,Switch , Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Sidebar/>
      <Switch>
      <Route component={Content} path="/Content"/>
      <Route component={Dashboard} path="/Dashboard"/>
      <Route component={Report} path="/Report"/>
      </Switch>
      {/*<Content/>*/}
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
