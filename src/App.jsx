import './App.css'
import Contact from './Components/Contact'
import Courses from './Components/Courses'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Poster from './Components/Poster'

function App() {

  return (
    <>
    <Header/>
    <Poster/>
    <div style={{overflowX:"hidden"}}>
    <Courses/>
    </div>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
