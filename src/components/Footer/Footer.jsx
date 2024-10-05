import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Subhransu</h1>
                <p>As a aspiring devloper, I want to contribute and grow.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your Email' />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>@ 2024 Subhransu jena. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me.</p>
            </div>
        </div>

      
    </div>
  )
}

export default Footer
