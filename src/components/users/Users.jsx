import React from 'react'
// import IMages
import img1 from '../../images/users-img/img1.svg'
import img2 from '../../images/users-img/img2.svg'
import img3 from '../../images/users-img/img3.svg'
// import Css
import './users.css'

const Users = () => {
  return (
    <div className='users'>
      <div className="container users-box">
        <div className="main-users">
          <h1>The PDF software trusted by millions of users</h1>
          <p>iLovePDF is your number 1 web app for editing PDF with ease. Enjoy all the <br /> tools you need to work efficiently with your digital documents while keeping <br />your data safe and secure.</p>
          <div className="fds">
            <div className="dfg">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
