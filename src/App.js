import { useState } from 'react';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'




function App() {
  const [currentPage, setCurrentPage] = useState('about')

  const renderPage = () => {
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    return <Resume />;
  };
  
  return (
   <div> 
    <Header navigate={setCurrentPage} currentPage={currentPage}/>
<main>
    {renderPage()}
   
    </main>
    <Footer/>
   </div> 

    );
}

export default App;
