import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section id='Education'>
        <h2 className='name'>Education Details</h2>

        <div className='container education_container'>
            <div className='education_school'>
                <h1>EDUCATION</h1>
                <div className='Education_content'>
                    <article className='Education_details'>
                        <div><h2>SSLC - 90.80% (Year-2016)</h2>
                        <small className='text-light'> Adharsh Vidhyalaya Educational Institutions</small></div>
                    </article>
                    <article className='Education_details'>
                        <div><h2>HSC - 65.42% (Year-2018)</h2>
                        <small className='text-light'> Adharsh Vidhyalaya Educational Institutions</small></div>
                    </article>
                    <article className='Education_details'>
                       <div> <h2>UG (Mechanical Engineering) - 8.09 CGPA (Year-2023)</h2>
                        <small className='text-light'> Sri Krishna College of Technology</small></div>
                    </article>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Education