import React from 'react'
import imagenfooter from '../imagenes/imagenfooter.jpg'

const CompFooter = () => {
  return (
    <div className='card-body'>
        <h5 className='card-title'>Dirección Calle 12 a 89 b 76 - Bogotá</h5>
        <p className='card-text'>Correo: catalina@hotmail.com - Telefono 34565478 - Celular 345677896</p>
        <img src={imagenfooter} className='App-logo1' alt='logo'/>
    </div>

    // <div className='card-footer text-muted'>
    //     <p>© 2021 Catalina</p>
    // </div>
  )
}

export default CompFooter;