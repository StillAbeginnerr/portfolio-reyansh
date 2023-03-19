import React from 'react'
import './Personal_data.css'
import resume from '../../assets/images/Resume.png'

function Personaldata() {
  return (
    <>
    <div className='Resume'>
        <img className='resume_img' src={resume} alt='abc'></img>
        
    </div>
    <button className="btn" style={{position:'relative',left:'50%'}}><i className="fa fa-download"></i> Download</button>
    <h1 style={{marginLeft:'30px'}}>Cover letter</h1>
    <div className='cover_letter'>
Reyansh Srivastava
<br></br>
222 Elm Street
<br></br>
Toronto, ON, M5T1K5
<br></br>
reyansh.srivastava@georgebrown.ca
<br></br>
March 13, 2023
<br></br>
<br></br>
The Hiring Manager
<br></br>
Meta
<br></br>
230 King St
<br></br>
Toronto, On M5V 3B2
<br></br><br></br>
Dear sir/ma'am,
<br></br><br></br>
I am excited to apply for the Data Engineer position at Meta as a recent graduate in computer science.<br></br>I am eager to start my career in the field of data engineering, and I believe that this position offers an excellent opportunity to learn and grow in this field.<br></br>

Although I am a fresher, I have completed several data science courses and have hands-on experience working with Python, SQL, and data analysis tools like Excel and Tableau.<br></br> I am also familiar with database management systems, data modeling, and data warehousing. During my academic projects,I have worked with data processing frameworks like Apache Spark and have also gained exposure<br></br> to cloud computing platforms like AWS and Azure.

As a highly motivated and detail-oriented individual, I am confident that I can apply my skills to this role and learn quickly on the job. I am excited about the opportunity to <br></br>work with a team of experienced professionals and contribute to the company's success.

Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.
<br></br>
<br></br>
Sincerely,
<br></br>
<br></br>
[Your Name]




    </div>
    <footer style={{backgroundColor:'black',color:'white',textAlign:'center',height:'120px',position:'relative',bottom:'0px',width:'100%'}}>
  <p style={{position:'relative',top:'32%'}}>Made with ❤️ By Reyansh Shrivastava</p>
</footer>
    </>
  )
}

export default Personaldata