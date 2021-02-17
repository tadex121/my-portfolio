import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/myNavbar'
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom'
import About from './components/about'
import Home from './components/home'
import Projects from './components/projects'
import ContactMe from './components/contactMe'

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Home />

        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={ContactMe} />
      </HashRouter>
    </>
  )
}

export default App
