import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './form.css'

export default function Form() {

  const form = useRef();
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  function validacion(email, text){
    const regexEmail = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/
    const regexText = /^[A-Za-z0-9.,!? -]+$/
    if (!regexEmail.test(email) || email === ""){
      return alert('Email no es valido')
    }
    if(!regexText.test(text)){
      return alert('Tu mensaje contiene caracteres invalidos')
    }
    return true
  }

  function handleEmail(e){
    setEmail(e.target.value)
  }
  function handleText(e){
    setText(e.target.value)
  }
  async function handleSubmit(e){
    e.preventDefault()
    if (validacion(email, text)){
      try {
        await emailjs.sendForm('service_5ta4ax8', 'template_ybaxvmk', form.current, {
          publicKey: 'WQ_IENeTOQSMA9MVb',
        })
        alert('MESSAGE SENT SUCCESS!');
        setEmail("")
        setText("")
      } catch (error) {
        console.log('FAILED...', error.text);
      }
    }
  }

  return (
    <div className="form-container">
      <span className='spanForm'>You can leave me a message and your email to get in touch with you.</span>
      <form className="form" ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Company Email</label>
          <input name="user_name" id="email" type="text" onChange={handleEmail} value={email}/>
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea cols="50" rows="10" id="textarea" value={text} onChange={handleText} name="message"></textarea>
        </div>
        <button type="submit" className="form-submit-btn">Submit</button>
      </form>
    </div>
  )
}
