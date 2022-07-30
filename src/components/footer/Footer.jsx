import React from 'react'
import './footerstyle.css'
import Img1 from '../../images/app-store.png'
import Img2 from '../../images/goegle.png'

import {VscGlobe} from 'react-icons/vsc'
import {FaAngleDown} from 'react-icons/fa'

import {CgFacebook} from 'react-icons/cg'
import {RiTwitterFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
                <div className="container">
                    <div className="footer-texts">
                        <div className="footer-text">
                          <ul>
                            <h4>ILOVEPDF</h4>
                              <li>Home</li>
                              <li>Features</li>
                              <li>Pricing</li>
                              <li>Tools</li>
                              <li>FAQ</li>
                         </ul>
                        </div>
                        <div className="footer-text">
                          <ul>
                            <h4>PRODUCT</h4>
                              <li>iLovePDF Desktop</li>
                              <li>iLovePDF Mobile</li>
                              <li>Developers</li>
                              <li>Wordpress Plugin</li>
                              <li>iloveimg.com</li>
                         </ul>
                        </div>
                        <div className="footer-text">
                          <ul>
                            <h4>SOLUTIONS</h4>
                              <li>Business</li>
                              <li>Education</li>
                           
                         </ul>
                        </div>
                        <div className="footer-text">
                          <ul>
                            <h4>COMPANY</h4>
                              <li>Our Story</li>
                              <li>Blog</li>
                              <li>Press</li>
                              <li>Legal & Privacy</li>
                              <li>Contact</li>
                         </ul>
                        </div>
                    </div>
                        <div className="footer-img">
                            <div className="img-style1">
                                  <img className='img-footer' src={Img2} alt="" />
                                  <img className='img-footer' src={Img1} alt="" />  
                            </div>
                         
                        </div>
                        <hr className='hr-style' />

                        <div className="copyright-section">
                            <div className="copyright-texts">
                              <div className="copyright-text">
                                <div className="language">
                                  <i className='i-style'><VscGlobe/></i>
                                  <p>English</p>
                                  <i className='style-ii'><FaAngleDown/></i>
                                </div>
                             
                                <div className="media-copyright">
                                  <p>© DarkCoders team 2022 ® - Your PDF Editor</p>
                                  <i className="media-copyright3">
                                    <RiTwitterFill/>
                                  </i>
                                  <i className="media-copyright2">
                                    <CgFacebook/>
                                  </i>
                                </div>
                              </div>
                            </div>
                        </div>
                </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer