import './App.css'
import {Routes, Route} from  'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import Project from './pages/Project';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Project' element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
