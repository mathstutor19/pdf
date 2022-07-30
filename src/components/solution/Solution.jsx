import React from 'react'
// import Css
import './solution.css'
// import Icons

// import images
import img1 from '../../images/solution-img/img1.png'

// fake data 
const data = [
    {
        id: 1,
        title: 'i love PDF',
        desc: 'App to work with your favourite PDF tools on your Mac or Windows PC. Get a lightweight PDF app that helps you process heavy PDF tasks offline in seconds.'
    },
    {
        id: 2,
        title: 'i love PDF Mobile',
        desc: 'App to work with your favourite PDF tools on your Mac or Windows PC. Get a lightweight PDF app that helps you process heavy PDF tasks ffline in seconds.'
    },
    {
        id: 3,
        title: 'i love IMG',
        desc: 'App to work with your favourite PDF tools on your Mac or Windows PC. Get a lightweight PDF app that helps you process heavy PDF tasks offline in seconds.'
    }
]

const Solution = () => {
  return (
    <div className='solution'>
        <div className="container solution-box">
            <div className="left-solution">
                <img src={img1} alt="" />
            </div>
            <div className="right-solution">
                <div className="title-solution">
                    <h2>Looking for another solution?</h2>
                </div>
                
                    <div className="down-title-sol dol1">
                        <h3 className='main-title'>i love PDF</h3>
                        <p className='main-desc'>Dowland <a href="#">ILovePDF Desctop</a>App to work with your favourite PDF <br /> tools on your Mac or Windows PC. Get a lightweight PDF app that <br /> helps you process heavy PDF tasks offline in seconds.</p>
                    </div>
                    <div className="down-title-sol">
                        <h3 className='main-title'>i love PDF Mobile</h3>
                        <p className='main-desc'>Dowland <a href="#">ILovePDF Mobile</a>App to work with your favourite PDF <br /> tools on your Mac or Windows PC. Get a lightweight PDF app that <br /> helps you process heavy PDF tasks offline in seconds.</p>
                    </div>
                    <div className="down-title-sol">
                        <h3 className='main-title'>i love IMG</h3>
                        <p className='main-desc'><a href="#">ILovePDF IMG</a>App to work with your favourite PDF <br /> tools on your Mac or Windows PC. Get a lightweight PDF app that <br /> helps you process heavy PDF tasks offline in seconds.</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Solution
