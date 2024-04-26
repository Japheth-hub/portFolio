import React from 'react'
import './carrousel.css'
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dwnrrsxq9'
  }
})

export default function Carrousel({image}) {

  const filmTools = ['JavaScript', 'React', 'NextJs', 'Node', 'Express', 'Postgres', 'sequelize']
  const filmDescription = 'Aplicacion de compra de peliculas, con la finalidad de que usuarios puedan disfrutar de una amplia variedad de contenido, ademas de que usuarios independientes podran subir sus propias peliculas y recibir una pago cada vez que se venda contenido de su propiedad. Lo mas destacado es el panel de Admin, ya que cuenta con un dashboard muy completo en donde el usuario administrador podra borrar y restaurar peliculas de la plataforma, bannear a los usuarios en caso de comportamiento inapropiado, puede crear codigos promocionales que tendran descuentos en ciertas peliculas o generos, ademas de llevar el control de las ventas y un resumen con graficas muy intuitivos'

  const countriesTools = ['JavaScript', 'React', 'Redux', 'Node', 'Express', 'Postgres', 'sequelize']
  const countriesDescription = 'Countries app es una SPA que nos proporciona cierta informacion sobre todos los paises en el mundo, como poblacion, capital, su area, continente en el que se encuentra, etc. La pagina cuenta con un paginado para que la busqueda y visualizacion sea mas agradable, el usuario podra buscar paises mediante los diferentes tipos de filtros y ordenamientos que tenemos. Al hacer click en cada pais nos llevara a conocer su detalles ademas de poder crear una actividad mediante su formulario. En el inicio podemos encontrar un boton que nos llevara a la tabla de actividades, en donde se veran todas las actividades creadas de todos los paises'

  const pokeTools = ['JavaScript', 'HTML', 'CSS', 'Pokeapi']
  const pokeDescription = 'Esta pagina se creo con la finalidad de poner en practica mis conociemintos cuando apenas estaba comenzando en el mundo de la programacion, creada tan solo con HTML, CSS y JavaScript. En esta aplicacion utiizamos la API de pokemon utilizando peticiones HTTP con el metodo "fetch" para poder obtener toda la informacion de cada uno de los personajes y poder mostar su contenido con una interfaz de usuario bastante amigable, este proyecto cuenta con un filtrado que se encuntra en la parte superior de la pagina, en donde podras dar click en uno de los botones y automaticamnete te traera todos los persoanjes de ese tipo'

  return (
    <div className='slide'>
          <div className='infoProyects'>
            <a href='https://filmflow.chekogarcia.com.mx/' target='_blank'>
              <AdvancedImage className='gif' cldImg={cld.image('portfolio/filmflow')} />
            </a>
            <h3>FilmFlow</h3>
            <div className='tools'>
              {filmTools.map((tool, index) => <span className='badges' key={index}>{tool}</span>)}
            </div>
            <p className='descriptionProyect'>{filmDescription}</p>
          </div>

          <div className='infoProyects'>
            <a href='https://mycountries.vercel.app/home' target='_blank'>
              <AdvancedImage className='gif' cldImg={cld.image('portfolio/countries')} />
            </a>
            <h3>CountriesApp</h3>
            <div className='tools'>
              {countriesTools.map((tool, index) => <span className='badges' key={index}>{tool}</span>)}
            </div>
            <p className='descriptionProyect'>{countriesDescription}</p>
          </div>

          <div className='infoProyects'>
            <a href='https://pokeangel.netlify.app/' target='_blank'>
              <AdvancedImage className='gif' cldImg={cld.image('portfolio/pokeangel')} />
            </a>
            <h3>Pokeangel</h3>
            <div className='tools'>
              {pokeTools.map((tool, index) => <span className='badges' key={index}>{tool}</span>)}
            </div>
            <p className='descriptionProyect'>{pokeDescription}</p>
          </div>

    </div>
  )
}
