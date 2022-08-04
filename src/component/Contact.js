import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
<div class="contact">
<a href="https://www.instagram.com/" target="_blank">
   <BsInstagram className='cont' color='#0ab581' style={{ fontSize: 20}}/>
  </a>
  <a href="https://www.facebook.com/" target="_blank" >
   <FaFacebook className='cont1' color='#0ab581' style={{ fontSize: 20 }} />
   </a>
   <a href="https://twitter.com/?lang=fr" target="_blank">
   <FaTwitter className='cont2' color='#0ab581' style={{ fontSize: 20 }} />
   </a>
</div>
  )
}
