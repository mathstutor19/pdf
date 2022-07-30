import React, { useRef, useState } from "react";
import Footer from "../../components/footer/Footer";
import "./Desktop.css";
function Desktop() {
  const [btnClick, setBtnClick] = useState(false);
  const [radioBtn, setRadioBtn] = useState({
    trueFalse: "",
  });
  const spanss = useRef(null);
  const handleChange = (event) => {
    return setRadioBtn((prev) => {
      return { ...prev, ...event };
    });
  };
  return (
    <div>
      <div className="container-one">
        <h1>iLovePDF Desktop</h1>
        <div className="btn">
          <button className="btn-one">
            <span>
              <i class="bx bxl-windows"></i> Download Windows
            </span>
          </button>
          <button onClick={() => setBtnClick(!btnClick)} className="btn-two">
            <i class="bx bx-caret-down"></i>
          </button>
          <ul
            style={{ display: btnClick ? "block" : "none" }}
            className="btn-toggle"
          >
            <li>
              <i class="bx bxl-apple"></i>MacOs
            </li>
            <li>
              <i class="bx bxl-windows"></i> Windows(64 bits)
            </li>
            <li>
              <i class="bx bxl-windows"></i>Windows(32bits)
            </li>
          </ul>
        </div>
        <p className="parag">
          By clicking the Download button, you agree to our
          <a href="#">Terms & Privacy Policy.</a>
        </p>
        <div className="image">
          <img
            src="https://www.ilovepdf.com/img/desktop/lang/en-Desktop.png"
            alt=""
          />
        </div>
        <h3 className="h3">Tools for all your PDF needs</h3>
        <p className="parag-one">
          Download the iLovePDF <b> Desktop</b> App to work with your favorite
          PDF tools from your Windows PC or Mac. Get a lightweight PDF App that
          helps you process heavy PDF tasks <b> offline</b> in seconds.
        </p>
      </div>
      <div className="container-two">
        <h3 className="h3">Your fast, secure, and affordable PDF solution</h3>
        <div className="grid">
          <div className="save-time">
            <img
              src="https://www.ilovepdf.com/img/desktop/save-time.svg"
              alt="404"
            />
            <h5>Save time</h5>
            <p>
              Skip printing and scanning and drive remote team efficiency with
              all the digital tools you need for working fast with documents.А
            </p>
          </div>
          <div className="reduce">
            <img
              src="https://www.ilovepdf.com/img/desktop/reduce-costs.svg"
              alt="404"
            />
            <h5>Reduce business costs</h5>
            <p>
              With straightforward licensing and affordable pricing, it's
              finally possible to enjoy PDF productivity tools and eSigning for
              more efficient digital workflows.
            </p>
          </div>
          <div className="ensure">
            <img
              src="	https://www.ilovepdf.com/img/desktop/privacy.svg"
              alt=""
            />
            <h5>Ensure maximum privacy</h5>
            <p>
              Enjoy the same features as the online service, while processing
              your files on your computer for maximum privacy and compliance
              with business processes.
            </p>
          </div>
        </div>
      </div>
      <div className="container-three">
        <div className="parag">
          <p>
            Process files with maximum security and privacy locally on your
            computer
          </p>
          <button>Download</button>
        </div>
        <div>
          <img
            src="	https://www.ilovepdf.com/img/desktop/lifestyle-desktop.png"
            alt=""
          />
        </div>
      </div>
      <div className="container-four">
        <h3 className="h3">Streamline your document workflows</h3>
        <div className="grid">
          <div>
            <h3>
              <i class="bx bx-check"></i>File format conversions
            </h3>
            <p>
              Convert files to and from PDF with a simple click. You can process
              Microsoft Office files like Word, Excel and PowerPoint as well as
              JPG or PNG images.
            </p>
          </div>
          <div>
            <h3>
              <i class="bx bx-check"></i>Free PDF Reader
            </h3>
            <p>
              Need to read PDF documents without the need of an Internet
              connection? Get a robust PDF viewer that can help you read large
              PDF documents without crashing.
            </p>
          </div>
          <div>
            <h3>
              <i class="bx bx-check"></i>Process documents in bulk
            </h3>
            <p>
              Quickly edit multiple documents at the same time. iLovePDF Desktop
              allows you to work with PDF files in a better and efficient way.
            </p>
          </div>
          <div>
            <h3>
              <i class="bx bx-check"></i>Right-click conversions
            </h3>
            <p>
              The fastest way to convert and compress files. Right click on your
              PDF, choose your preferred tool and process your file without
              opening the application.
            </p>
          </div>
          <div>
            <h3>
              <i class="bx bx-check"></i>Validate PDF/A for long term archiving
            </h3>
            <p>
              Convert business documents to PDF/A, the ISO-standardized version
              of PDF specialized for preserving digital documents.
            </p>
          </div>
          <div>
            <h3>
              <i class="bx bx-check"></i>Document protection
            </h3>
            <p>
              Keep your business documents safe. Encrypt and protect PDF files
              with a password to safeguard sensitive information.
            </p>
          </div>
        </div>
      </div>
      <div className="container-five">
        <h3>iLovePDF Desktop Pricing</h3>
        <p className="main">
          Stay with our Free PDF Reader or subscribe to iLovePDF Desktop
        </p>
        <div className="grid">
          <div className="grid-one">
            <p className="parag">
              Desktop <b> Reader</b>
            </p>
            <hr />
            <p className="parag-one">
              Enjoy our smooth and reliable PDF Reader
            </p>
            <h2 className="h3">Free</h2>
            <button>Stay free</button>
            <div className="div">
              <p className="check">
                <i class="bx bx-check"></i>PDF READER
              </p>
              <p className="x">
                <i class="bx bx-x"></i> All tools include
              </p>
              <p className="x">
                <i class="bx bx-x"></i> Unlimited document processing
              </p>
              <p className="x">
                <i class="bx bx-x"></i>Work on Web, Mobile and Desktop
              </p>
            </div>
          </div>
          <div className="grid-two">
            <p className="parag">
              Desktop <b> Tools and Reader</b>
            </p>
            <hr />
            <dir className="btn">
              <p>-42%</p>
              <div className="button">
                <div className="btn-one">
                  <input
                    type="radio"
                    name="radio"
                    value="7"
                    checked={radioBtn.trueFalse === "7"}
                    onChange={(e) =>
                      handleChange({ trueFalse: e.target.value })
                    }
                    id="btn-one"
                  />
                  <label htmlFor="btn-one">Monthly Billing</label>
                </div>
                <div className="btn-two">
                  <input
                    type="radio"
                    name="radio"
                    value="48"
                    checked={radioBtn.trueFalse === "48"}
                    onChange={(e) =>
                      handleChange({ trueFalse: e.target.value })
                    }
                    id="btn-two"
                  />
                  <label htmlFor="btn-two">Yearly Billing</label>
                </div>
              </div>
            </dir>
            <div className="h2">
              <span className="radionBtn">{radioBtn.trueFalse === "7" ? "7$" : "48$"}</span>
              <span>/year</span>
            </div>
            <button className="btn-btn">Get Premium</button>
            <div className="parags">
              <p>
                <i class="bx bx-check"></i>PDF READER
              </p>
              <p>
                <i class="bx bx-check"></i>All tools included
              </p>
              <p>
                <i class="bx bx-check"></i>Unlimited document processing
              </p>
              <p>
                <i class="bx bx-check"></i>Work on Web, Mobile and Desktop
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-six">
        <p className="parag">Looking for another solution?</p>
        <div className="icon-company">
          <a href="#">
            <img src="https://www.ilovepdf.com/img/desktop/ios.svg" alt="iOS" />
            <p>iOS</p>
          </a>
          <a href="#">
            <img
              src="https://www.ilovepdf.com/img/desktop/android.svg"
              alt="Android"
            />
            <p>Android</p>
          </a>
          <a href="#">
            <img
              src="https://www.ilovepdf.com/img/desktop/apple.svg"
              alt="MacOs"
            />
            <p>MacOS</p>
          </a>
          <a href="#">
            <img
              src="https://www.ilovepdf.com/img/desktop/windows.svg"
              alt="Windows"
            />
            <p>Windows</p>
          </a>
          <a href="#">
            <img src="https://www.ilovepdf.com/img/desktop/web.svg" alt="Web" />
            <p>Web</p>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Desktop;
