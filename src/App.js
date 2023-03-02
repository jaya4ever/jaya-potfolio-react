import { Route, Switch } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'




function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>

          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact' >
            <Contact />
          </Route>
          <Route path='/resume' >
            <Resume />
          </Route>
          <Route path='/'>
            <About />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>

  );
}

export default App;
