import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Stats from './stats';
import Header from './header';
import About from './Pages/About'
import Profile from './Pages/Profile'
import Home from './Pages/Home'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} />
      <Route path='/profile' component={Profile} />
      <Stats />
    </div>
    </BrowserRouter>
  );
}

export default App;
