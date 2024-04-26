import React, { useState } from 'react'
import { motion } from "framer-motion"
import '../components/slider.css'
import Li from './list/li'

const variants = {
  open: {opacity: 1, x: '-10px'},
  closed: {opacity: 0, x: '-100%'}
}

export default function Slider() {

  const [isOpen, setIsOpen] = useState(false)

  return (<div className='divSlider'>
    <motion.div 
      className='box'
      initial={{ opacity: 0}}
      transition={{ duration: 0.4 }}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <Li/>
    </motion.div>
    <label className="burger" htmlFor="burger" >
      <input onClick={() => { setIsOpen(!isOpen) }} type="checkbox" id="burger" />
        <span></span>
        <span></span>
        <span></span>
    </label>
  </div>)
}
