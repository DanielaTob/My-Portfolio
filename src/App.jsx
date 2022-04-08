import './App.css'

import Header from './components/Header';
import Home from './views/Home';
import Skills from './views/Skills';


function App() {

  return (
    <div className="App">
      <Header />
        <Home />
        <Skills />
    </div>
  )
}

export default App
