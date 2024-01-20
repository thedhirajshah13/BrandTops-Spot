import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-section'>
    <div className='footer'>
    <div className='details'>
        <div className='details-content'>
        <p>ABOUT</p>
        <Link>Contact Us </Link>
        <Link>About us</Link>
        <Link>Career</Link>
        <Link>Flipcart Stories</Link>
        <Link>Press</Link>
        <Link>Flipkart Wholesale</Link>
        <Link>ClearTrip</Link>
        <Link>Firm Information</Link>

        </div>
        <div className='details-content'>
        <p>HELP</p>
        <Link>Payment</Link>
        <Link>Shipping</Link>
        <Link>Cancel & Return</Link>
        <Link>FAQs</Link>
        <Link>Report Fraud</Link>
        
        </div>
        <div className='details-content'>
        <p>CONSUMERS POLICY </p>
        <Link>Cacellation & Return</Link>
        <Link>Terms Of Use</Link>
        <Link>Security</Link>
        <Link>Privacy</Link>
        <Link>Sitemap</Link>
        <Link>Grievance Redressal</Link>
        <Link>EPR Compliance</Link>
        </div>
        <div className='details-content'>
        <p >SOCIAL</p>
        <Link>Twitter</Link>
        <Link>Facebook</Link>
        <Link>youtube</Link>
        
        </div>
    </div>
    <div className='address'>
        <h2>Address</h2>
    </div>
    </div>
    </div>
  )
}

export default Footer