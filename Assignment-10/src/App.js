import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import About from './component/About/about';
import Contuct from './component/Contuct/contuct';
import Error from './component/Error/Error';
import Details from './component/Home/Home/Details/Details';
import Footer from './component/Home/Home/Footer/Footer';
import Home from './component/Home/Home/Home';
import NavBar from './component/Home/NavBar/NavBar';
import Login from './component/Login/Login';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';
import Services from './component/Services/services';
import Signup from './component/Signup/Signup';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <BrowserRouter>
          <NavBar/>
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route  path="/home">
              <Home/>
            </Route>

            <Route path="/services">
              <Services/>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contuct">
              <Contuct></Contuct>
            </Route>

            <Route path="/log">
              <Login/>
            </Route>

            <Route path="/sign">
              <Signup/>
            </Route>
            <Route path="*">
              <Error/>
            </Route>

            <PrivetRoute path="/details/:Id">
              <Details/>
            </PrivetRoute>

          </Switch>
          <Footer/>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
