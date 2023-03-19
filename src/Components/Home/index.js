import React from 'react'
import './home.css'
import dp from '..//../assets/images/Reyansh_Dp.JPG'

function Home() {
  return (
<>
<p className='hello'><hr></hr>Hello<br></br></p>
<b className='Name'>I am Reyansh Shrivastava</b>
<img className='dp' src={dp} alt='dp'></img>
<p className='description'>Skilled Data Analyst with expertise in data manipulation, visualization, and analysis.</p>
<p className='description-small'>Also, I am a Software Engineer Intern dedicated to improving skills through hands-on learning 
and development work.<br></br> Proficient in mobile and desktop development 
environments. Well organized and collaborative team player <br></br> with strong communication and 
analytical abilities</p>
<footer style={{backgroundColor:'black',color:'white',textAlign:'center',height:'120px',position:'fixed',bottom:'0px',width:'100%'}}>
  <p style={{position:'relative',top:'32%'}}>Made with ❤️ By Reyansh Shrivastava</p>
</footer>
</>
  )
}

export default Home