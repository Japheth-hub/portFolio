import React, { useEffect } from 'react'
import './certifications.css'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './certifications.css'
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dwnrrsxq9'
  }
})

export default function Certifications() {

  const docs = [
    {
      label: 'Full Stack',
      src: 'henry',
      link: 'https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=ab1f1c8313ebcd7291e8f219e28f5152f9e456ac9b25cb0032d637d87819e874'
    },
    {
      label: 'JavaScript',
      src: 'fccjavascript',
      link: 'https://www.freecodecamp.org/certification/fccbacba418-7b31-4cb8-802b-a102702db02b/javascript-algorithms-and-data-structures'
    },
    {
      label: 'Web Responsive',
      src: 'fccresponsive',
      link: 'https://www.freecodecamp.org/certification/fccbacba418-7b31-4cb8-802b-a102702db02b/responsive-web-design'
    }
  ]

  const [selectedDoc, setSelectedDoc] = useState(docs[0]);

  useEffect(()=>{
    setSelectedDoc(docs[0])
  }, [])

  return (
    <div className='window'>
      <nav className='nav'>
        <ul className='ul'>
          {docs.map((item) => (
            <li
              key={item.label}
              className={`${item.label === selectedDoc.label ? 'selected' : ""} list`}
              onClick={() => setSelectedDoc(item)}
            >
              {`${item.label}`}
              {item === selectedDoc ? (
                <motion.div className='underline' layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className='main'>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDoc ? selectedDoc.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedDoc ? <a href={selectedDoc.link} target='_blank'><AdvancedImage className='imgCertificate' alt={selectedDoc.name} cldImg={cld.image(`portfolio/${selectedDoc.src}`)} /></a>   : "Selecciona un Certificado"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}