import React from 'react'

export default function Profile(props) {
  return (
    <div className='box'>
  
   <div class="cover-photo"></div>
   <div className='im'>
   <div className='img'>
    <img className='image' src={props.image} />
     </div></div>
     <h2 className='name'> 
     I'm  {props.name}  <br/>  </h2> 
         <h2 className='name1'> a {props.profession} </h2>
         <h2 className='name2'> {props.email}</h2>        
    </div>
   
    )
  
}
