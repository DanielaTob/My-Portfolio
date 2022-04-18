import './App.css'
import {Routes, Route} from  'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import Header from './components/Header';
import Landing from './pages/Landing';
import Project from './pages/Project';


function App() {

  return (
    <div className="App">
      <Header />
      <ScrollToTop smooth 
      width="40"
      height='32'
      color='#C85853'
      />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Project' element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
