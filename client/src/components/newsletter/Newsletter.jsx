import React from 'react'
import classes from './newsletter.module.css'
import { FiSend } from 'react-icons/fi'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useSelector } from 'react-redux'



const Newsletter = () => {
  const formRef = useRef();
  const [email, setEmail] = useState();

  const { token, user } = useSelector((state) => state.auth)

  const serviceId = process.env.REACT_APP_SERVICE_ID
  const templateId = process.env.REACT_APP_TEMPLATE_ID
  const publicKey = process.env.REACT_APP_PUBLIC_KEY

  const sendEmail = async (e) => {

    e.preventDefault()

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        // handleCloseForm()
        // setSuccess(true)
        // setTimeout(() => {
        //   setSuccess(false)
        // }, 2500)
        console.log(result);
        alert("email sent");
      }, (error) => {
        console.log(error.text);
      });

    //to clear the form once submitted
    e.target.reset();

  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Want to get the latest offers?</h5>
          <h2>Send us your email and we will do the rest!</h2>
        </div>
        <div className={classes.inputContainer}>
          <form onSubmit={sendEmail} ref={formRef}>
            <input className="disableinput" value={user?.email} type="hidden" placeholder='Type email' name="from_email" />

            <input className="disableinput" value="veerendraforwork@gmail.com" type="hidden" placeholder='Owner email' name="to_email" />

            <input value={user?.email} type="email" placeholder='Desc' name="message" onChange={(e) => setEmail(e.target.value)} />

          </form>
          <FiSend onClick={sendEmail} className={classes.sendIcon} />
        </div>
      </div>
    </div>
  )
}

export default Newsletter