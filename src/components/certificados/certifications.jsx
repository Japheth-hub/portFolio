import React, { useEffect } from 'react'
import './certifications.css'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './certifications.css'

export default function Certifications() {

  const docs = [
    {
      label: 'Full Stack',
      src: '/despacho.jpg'
    },
    {
      label: 'JavaScript',
      src: '/fccJavascript.png'
    },
    {
      label: 'Web Responsive',
      src: '/fccResponsive.png'
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
            {selectedDoc ? <img className='imgCertificate' src={selectedDoc.src} alt={selectedDoc.label} />  : "Selecciona un Certificado"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
