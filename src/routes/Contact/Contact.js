import React, { Component } from 'react'
import Footer from '../../components/footer/Footer'
import "./contact.css"
export default class Contact extends Component {
  render() {
    return (
      <div>
        
      <div className='contpage' >
        <div className='headcont'>
            <h1 className='contact'>Contact</h1>
            <p>Contact us and clarify any doubts you have about iLovePDF or report a problem.</p>

            <br/><br/>
            <div className='outputinfo'>
            <div className='label' >Your Name`</div><br/>
            <input className='inpcont inpname' placeholder='Your Name' /><br/>
            <div className='label' >Your Email`</div><br/>
            <input className='inpcont inpname' placeholder='Your Email' /><br/>
            <div className='label' >Subject`</div><br/>
            <select className='inpcont inpselect'>
                <option>Choose a subject</option>
                <option>General information / Contact</option>
                <option>Suggest a feature</option>
                <option>Repost a Problem</option>
                <option>Pricing</option>
                <option>Privacy</option>
                <option>iLovePDF Signature</option>
            </select><br/>
            <div className='label' >Message`</div><br/>
            <textarea className=' writetext' placeholder='Write a message' ></textarea><br/>

            <button className='sentmes' >Sent message</button>
            </div>
        </div>
      </div>
      <Footer/>
      </div>
    )
  }
}
