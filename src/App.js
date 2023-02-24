import {Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
   <div> 
    <Header/>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resume' element={<Resume/>}/>
    </Routes>
    <Footer/>
   </div> 

    );
}

export default App;
