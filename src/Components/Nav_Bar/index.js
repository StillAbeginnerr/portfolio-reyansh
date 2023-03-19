import React from 'react'
import './Nav.css'

function NaviBar() {
  return (
    <>
    <div className='Nav_bar'>
        
    <ul className='Nav'>
    <h1 className='title'><a href='/' style={{textDecoration:'none',color:'black'}}>PORTFOLIO</a></h1>
        <li className='Nav-items'><a href='/Personal_Data'>Personal Data</a></li>
        <li className='Nav-items'><a href='/Academic_Credentials'>Academic Credentials</a></li>
        <li className='Nav-items'><a href='/Academic_Work_Experience'>Academic Work Experience</a></li>
        <li className='Nav-items'><a href='/Summary'>Professional Summary</a></li>
    </ul>
    </div>
    </>
  )
}

export default NaviBar