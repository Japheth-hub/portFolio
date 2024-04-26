import '../App.css'
import Slider from './slider'
import Navbar from './navbar/navbar'
import Aboutme from './aboutme/aboutme'
import Carrousel from './carrousel/carrousel'
import Certifications from './certificados/certifications'
import Form from './form/form'

function Root() {

  return (
    <>
      <Navbar />
      <div className='slider'>
        <Slider />
      </div>
      <div id='aboutMe' className='aboutMe'>
        <Aboutme />
      </div>
      <div id='proyects' className='seccions'>
        <hr />
        <h3 className='title'>Proyects</h3>
        <Carrousel />
      </div>
      <div id='certifications' className='seccions'>
        <hr />
        <h3 className='title'>Certifications</h3>
        <Certifications />
      </div>
      <div className='seccions'>
        <Form />
      </div>
    </>
  )
}

export default Root
