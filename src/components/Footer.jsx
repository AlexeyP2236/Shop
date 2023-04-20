import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row border-top'>
          <div className='col mb-3'>
              <img src='img/logo1.jpg' className='bi me-2' width={180} height={110}/>
              <p>
                Shop of masters
              </p>
          </div>

          <div className='col mb-3'></div>
          <div className='col mb-3'></div>
          <div className='col mb-3'></div>
          <div className='col mb-2'>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            all rights not reserved
          </div>
          
        </footer>
    </div>
  )
}

export default Footer