import React from "react"
import Footer from "../../components/footer/Footer";
import "./Education.css";

function Education() {
  return (
    <main>
      <header className=" header">
        <div className="education__container header__container">
          <div className="header__left">
            <p className="header__sub">ILOVEPDF EDUCATION</p>
            <h2 className="header__title">
              Boosting productivity in education
            </h2>
            <p className="header__text">
              iLovePDF Education version boosts academic productivity by
              addressing the unique needs of students, teachers and education
              professionals, driving document efficiency across the entire
              institution.
            </p>
            <p className="header__sup">
              {" "}
              <strong>Register now and enjoy a full year on us.</strong>
            </p>
            <a href="#" className="header__btn">
              Sing Up now
            </a>
          </div>
          <div className="header__right">
            <img
              src="https://www.ilovepdf.com/img/bg/education.png"
              alt="education"
            />
          </div>
        </div>
      </header>
      <section className="education__workflow container">
        <h2 className="workflow__title">
          Simplifying document workflow for students & faculty
        </h2>

        <h3 className="workflow__text">
          iLovePDF breaks down barriers to file management, making it effortless
          to modify and optimize documents
        </h3>
        <div className="card__wrapper">
          <div className="card">
            <img
              src="	https://www.ilovepdf.com/img/education/productivity.svg"
              alt="education"
            />
            <h3 className="card__title">Increase productivity</h3>
            <p className="card__text">
              As efficiency is crucial on the road to success, iLovePDF brings
              powerful tools for teachers and students alike.
            </p>
          </div>
          <div className="card">
            <img
              src="https://www.ilovepdf.com/img/education/security.svg"
              alt="education"
            />
            <h3 className="card__title">Increase productivity</h3>
            <p className="card__text">
              As efficiency is crucial on the road to success, iLovePDF brings
              powerful tools for teachers and students alike.
            </p>
          </div>
          <div className="card">
            <img
              src="https://www.ilovepdf.com/img/education/everywhere.svg"
              alt="education"
            />
            <h3 className="card__title">Increase productivity</h3>
            <p className="card__text">
              As efficiency is crucial on the road to success, iLovePDF brings
              powerful tools for teachers and students alike.
            </p>
          </div>
        </div>
      </section>
      <img
        className="workflow__img"
        src="https://www.ilovepdf.com/img/education/school.jpg"
        alt="educatonshcoll"
      />
      <div className="feature education__container">
        <h2 className="workflow__title">
          Powerful features to help you stay on top of your work
        </h2>

        <h3 className="workflow__text">
          Our tools enhance learning & speed up educational chores
        </h3>
        <div className="feature__card__wrapper">
          <div className="feature__card">
            <img
              src="https://www.ilovepdf.com/img/items/ok_sm_g2.svg"
              alt="rtick"
              className="feature__card__img"
            />
            <div>
              <h4 className="feature__card__title">Access everywhere</h4>
              <p className="feature__card__text">
                Edit and organize your documents on every device you own, on
                your smartphone, and on the web.
              </p>
            </div>
          </div>
          <div className="feature__card">
            <img
              src="https://www.ilovepdf.com/img/items/ok_sm_g2.svg"
              alt="rtick"
              className="feature__card__img"
            />
            <div>
              <h4 className="feature__card__title">Stay organized</h4>
              <p className="feature__card__text">
                Get rid of clutter in your smartphone. Organize your documents
                in the Library Manager.
              </p>
            </div>
          </div>
          <div className="feature__card">
            <img
              src="https://www.ilovepdf.com/img/items/ok_sm_g2.svg"
              alt="rtick"
              className="feature__card__img"
            />
            <div>
              <h4 className="feature__card__title">
                Turn data into information
              </h4>
              <p className="feature__card__text">
                Extract information from scanned documents with OCR (Optical
                Character Recognition).
              </p>
            </div>
          </div>
          <div className="feature__card">
            <img
              src="https://www.ilovepdf.com/img/items/ok_sm_g2.svg"
              alt="rtick"
              className="feature__card__img"
            />
            <div>
              <h4 className="feature__card__title">Mark what matters</h4>
              <p className="feature__card__text">
                Mark up PDFs with arrows, shapes, and comments to highlight key
                details with our Mobile App.
              </p>
            </div>
          </div>
          <div className="feature__card">
            <img
              src="https://www.ilovepdf.com/img/items/ok_sm_g2.svg"
              alt="rtick"
              className="feature__card__img"
            />
            <div>
              <h4 className="feature__card__title">Jump hurdles</h4>
              <p className="feature__card__text">
                Break down barriers to file management. Modify and optimize
                documents from one place.
              </p>
            </div>
          </div>
          <div className="feature__card">
            <img
              src="https://www.ilovepdf.com/img/items/ok_sm_g2.svg"
              alt="rtick"
              className="feature__card__img"
            />
            <div>
              <h4 className="feature__card__title">Achieve more</h4>
              <p className="feature__card__text">
                Integration with Google Drive and Dropbox means that you can
                work directly from the Cloud.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="students">
        <div className="education__container student ">
          <div className="students__left">
            <h3 className="students__left__title">For Students & Teachers</h3>
            <p className="students__left__text">
              Upgrade your academic performance. Join our Student Program and
              enjoy a year of Premium features for free.
            </p>
            <button className="students__left__button">Sign Up Now</button>
          </div>
          <div className="students__right">
            <h3 className="students__right__title">For Institutions</h3>
            <p className="students__right__text">
              Get a Full Education License and bring iLovePDF to your school.
            </p>
            <a href="#" className="students__right__button">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="next">
        <svg viewBox="0 0 48 43" version="1.1" className="next__img">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-696.000000, -3270.000000)" fill="#E5322D">
              <g transform="translate(404.000000, 3270.000000)">
                <path d="M322.540678,19.3072731 L322.540678,3.40535522 L338.11729,19.3072731 L322.540678,19.3072731 Z M322.74695,1.27357969 C320.054976,2.59988235 318.035548,4.83527527 316.560604,7.36902534 C314.189828,3.30021404 310.420528,0 304.712397,0 C299.00158,0 292,4.94803538 292,13.3063021 C292,21.768491 298.916802,25.7793984 302.342517,28.0446575 C306.004353,30.4635142 312.252192,34.8614631 316.560604,43 C320.87021,34.8614631 327.117452,30.4635142 330.780184,28.0446575 C333.353649,26.3416752 337.900571,23.6521943 340,18.8272807 L322.74695,1.27357969 Z"></path>
              </g>
            </g>
          </g>
        </svg>
        <h3 className="next__title">
          Because every PDF problem you might now have can be our next challenge
        </h3>
      </div>
      <Footer/>
    </main>
  );
}

export default Education;
