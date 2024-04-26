import { useState } from 'react'
import './App.css'
import Slider from './components/slider'
import Navbar from './components/navbar/navbar'
import Aboutme from './components/aboutme/aboutme'
import Carrousel from './components/carrousel/carrousel'
import Certifications from './components/certificados/certifications'
import Form from './components/form/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='divPrincipal'>
      <Navbar/>
      <div className='slider'>
        <Slider/>
      </div>
      <div id='aboutMe' className='aboutMe'>
        <Aboutme/>
      </div>
      <div id='proyects' className='seccions'>
        <hr />
        <h3 className='title'>Proyects</h3>
        <Carrousel />
      </div>
      <div id='certifications' className='seccions'>
        <hr />
        <h3 className='title'>Certifications</h3>
        <Certifications/>
      </div>
      <div className='seccions'>
        <Form/>
      </div>
    </div>
  )
}

export default App
