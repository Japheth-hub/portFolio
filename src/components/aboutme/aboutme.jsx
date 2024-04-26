import React from 'react'
import './aboutme.css'
import {Cloudinary} from '@cloudinary/url-gen'
import {AdvancedImage} from '@cloudinary/react'

const cld = new Cloudinary({
  cloud : {
    cloudName: 'dwnrrsxq9'
  }
})

export default function Aboutme() {
  const skills = [
    {
      name: 'JavaScript',
      img: '/JavaScript.svg'
    },
    {
      name: 'React',
      img: '/React.svg'
    },
    {
      name: 'NextJs',
      img: '/NextJs.svg'
    },
    {
      name: 'Redux',
      img: '/Redux.svg'
    },
    {
      name: 'HTML5',
      img: '/HTML5.svg'
    },
    {
      name: 'CSS3',
      img: '/CSS3.svg'
    },
    {
      name: 'NodeJs',
      img: '/NodeJs.svg'
    },
    {
      name: 'Express',
      img: '/Express.svg'
    },
    {
      name: 'MySql',
      img: '/MySql.svg'
    },
  ];


  return (
    <div className='divAboutme'>
      <div className='aboutImage'>
        <AdvancedImage className='Angel' alt='Angel' cldImg={cld.image('portfolio/angelramirez')} />
        <ul className='skills'>
          {skills && skills.map((skill, index) => {
            return (
              <li key={index}>
                <div className='cardSkill'>
                  <img src={`${skill.img}`} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              </li>
            )
          })}
          <li>
            <div className='cardSkill'>
              <AdvancedImage cldImg={cld.image('portfolio/postgres')} alt='postgres' />
              <span>Postgresql</span>
            </div>
          </li>
          <li>
            <div className='cardSkill'>
              <AdvancedImage cldImg={cld.image('portfolio/sequelize')} alt='sequelize' />
              <span>Sequelize</span>
            </div>
          </li>
        </ul>
      </div>
      <div className='info'>
        <h3>Full Stack Developer</h3>
        <p className='description'>
          Hello, my name is Angel Ramirez<br />
          I am 26 years old and I am from Mexico, currently living in the state of Puebla. <br />
          I am a Full Stack Developer with a focus on both Front-end and Back-end. I am capable of developing complete web projects while always considering their scalability and efficiency. For me, dedicating myself to programming means truly understanding the context of human needs and, at the same time, the purpose of technology, and thus creating solutions that genuinely help people.
        </p>
      </div>
    </div>
  )
}
