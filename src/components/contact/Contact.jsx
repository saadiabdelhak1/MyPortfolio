import React from 'react';
import './Contact.scss';
import {motion, animate} from 'framer-motion';

const Contact = () => {


  return (
    <div className='contact'>
        <motion.div className="text_container" >
            <h1>Let's Work Together</h1>
            <div className="item">
                <h2>Email</h2>
                <p>hardyhar06@gmail.com</p>
            </div>
            <div className="item">
                <h2>Address</h2>
                <p>Chicago, IL</p>
            </div>
            <div className="item">
                <h2>Phone Number</h2>
                <p>+1 773-750-6480</p>
            </div>

        </motion.div>
        <motion.div className="form_container" initial={{opacity:0, y:-300}} 
                                               whileInView={{opacity:1, y:0}} 
                                               transition={{duration:0.8}}>
            <form action="">
                <input type="text" required placeholder='Name'/>
                <input type="email" required placeholder='Email' />
                <textarea  rows={8} placeholder='message'></textarea>
                <button>Submit</button>
            </form>

        </motion.div>

    </div>
  )
}

export default Contact