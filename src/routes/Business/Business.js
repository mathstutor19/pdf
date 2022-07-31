import React, { Component } from "react";
import business from "../../images/business/business.png";
import one from "../../images/business/1.png";
import two from "../../images/business/2.png";
import three from "../../images/business/3.png";
import four from "../../images/business/4.png";
import five from "../../images/business/5.png";
import six from "../../images/business/6.png";
import cardrt from "../../images/business/cardrt.png";
import "./Business.css";
import Footer from "../../components/footer/Footer";
export default class Business extends Component {
  render() {
    return (
      <div className="business">
        <div className="sheetone">
          <div className="headinfo">
            <h1>Powerful PDF tools to optimize your business</h1>
            <p>
              iLovePDF helps teams digitize workflows and boost document
              productivity. Go 100% digital with all the PDF editing tools you
              need to get work done from any device.
            </p>
            <div className="btn">Try now</div>
          </div>
          <div className="headimg">
            <img src={business} alt="" />
          </div>
        </div>
        <div className="sheettwo">
          <div className="cardbus">
            <h3>Streamline document workflows</h3>
            <p>
              Edit PDFs in the office or on the go, accessing documents on any
              device to continue work no matter your location.
            </p>
          </div>
          <div className="cardbus">
            <h3>Streamline document workflows</h3>
            <p>
              Edit PDFs in the office or on the go, accessing documents on any
              device to continue work no matter your location.
            </p>
          </div>
          <div className="cardbus">
            <h3>Streamline document workflows</h3>
            <p>
              Edit PDFs in the office or on the go, accessing documents on any
              device to continue work no matter your location.
            </p>
          </div>
        </div>
        <div className="sheetthree">
          <h1>Edit, convert and sign PDF from any device</h1>
          <h5>
            iLovePDF provides users with a cross-platform solution to convert,
            edit and sign PDF from any device.
          </h5>
          <h6>
            Get more than 25 PDF tools to optimise your work with documents.
          </h6>
          <div className="app">
            <div className="elements">
              <img src="https://www.ilovepdf.com/img/desktop/ios.svg" alt="" />
              <p>iOS</p>
            </div>
            <div className="elements">
              <img
                src="https://www.ilovepdf.com/img/desktop/android.svg"
                alt=""
              />
              <p>Android</p>
            </div>
            <div className="elements">
              <img
                src="https://www.ilovepdf.com/img/desktop/apple.svg"
                alt=""
              />
              <p>MacOS</p>
            </div>
            <div className="elements">
              <img
                src="https://www.ilovepdf.com/img/desktop/windows.svg"
                alt=""
              />
              <p>Windows</p>
            </div>
            <div className="elements">
              <img src="https://www.ilovepdf.com/img/desktop/web.svg" alt="" />
              <p>Web</p>
            </div>
          </div>
        </div>
        <div className="sheetfour">
        <h1 className="aloneh1">How can iLovePDF help your business?</h1>
          <div>
            <h4>Batch processing</h4>
            <p>
              Process large and heavy PDF tasks in seconds with iLovePDF Desktop
              app. Work offline and edit files with maximum privacy locally on
              your computer.
            </p>
          </div>
          <div>
            <h4>Batch processing</h4>
            <p>
              Process large and heavy PDF tasks in seconds with iLovePDF Desktop
              app. Work offline and edit files with maximum privacy locally on
              your computer.
            </p>
          </div>
          <div>
            <h4>Batch processing</h4>
            <p>
              Process large and heavy PDF tasks in seconds with iLovePDF Desktop
              app. Work offline and edit files with maximum privacy locally on
              your computer.
            </p>
          </div>
          <div>
            <h4>Batch processing</h4>
            <p>
              Process large and heavy PDF tasks in seconds with iLovePDF Desktop
              app. Work offline and edit files with maximum privacy locally on
              your computer.
            </p>
          </div>
          <div>
            <h4>Batch processing</h4>
            <p>
              Process large and heavy PDF tasks in seconds with iLovePDF Desktop
              app. Work offline and edit files with maximum privacy locally on
              your computer.
            </p>
          </div>
          <div>
            <h4>Batch processing</h4>
            <p>
              Process large and heavy PDF tasks in seconds with iLovePDF Desktop
              app. Work offline and edit files with maximum privacy locally on
              your computer.
            </p>
          </div>
        </div>
        <div className="sheetfive">
          <h1>A full suite of PDF tools to optimize document management</h1>
          <div className="buss">
            <div className="imgbus">
              <img src={one} alt="one" />
            </div>
            <div className="imgbus">
              <img src={two} alt="two" />
            </div>
            <div className="imgbus">
              <img src={three} alt="three" />
            </div>
            <div className="imgbus">
              <img src={four} alt="four" />
            </div>
            <div className="imgbus">
              <img src={five} alt="five" />
            </div>
            <div className="imgbus">
              <img src={six} alt="six" />
            </div>
          </div>
          <p>
            * Tools which for the moment are only accessible on the Mobile App.
          </p>
        </div>
        <div className="sheetsix">
          <div className="sixinfo">
            <h1>
              The security of your data is our #1 <br />
              priority
            </h1>
            <p>
              All files uploaded to our service are encrypted using Hypertext
              Transfer Protocol Secure (HTTPS). iLovePDF does not access, use,
              analyze or store any processed data. iLovePDF is ISO certified
              27001 and GDPR-compliant. If you would like to know more about
              iLovePDF's data collection, you can read our Privacy Policy.
            </p>
            <img
              className="infoimg"
              src="https://www.ilovepdf.com/img/logos/pdf-association-logo_w.svg"
              alt=""
            />
            <img
              className="infoimg"
              src="https://www.ilovepdf.com/img/logos/iso-logo_w.svg"
              alt=""
            />
            <img
              className="infoimg"
              src="https://www.ilovepdf.com/img/logos/ssl-encrypted-logo_w.svg"
              alt=""
            />
          </div>
          <div className="siximg">
            <img
              src="https://www.ilovepdf.com/img/business/security.svg"
              alt=""
            />
          </div>
        </div>
        <div className="sheetseven">
          <h1 className="headseven">Transparent tiered pricing</h1>
          <div className="sevencards">
            <div className="sevencard">
            <div className="cardrt">
                    <img src={cardrt} alt="" />
                </div>
              <h2>Small Teams</h2>
              <strong>2-25 Users</strong>
              <h1>41$</h1>
              <p>per user per year</p>
              <span>Get Started</span>
            </div>
            <div className="sevencard">
            <div className="cardrt">
                    <img src={cardrt} alt="" />
                </div>
              <h2>Small Teams</h2>
              <strong>2-25 Users</strong>
              <h1>41$</h1>
              <p>per user per year</p>
              <span>Get Started</span>
            </div>
            <div className="sevencard">
            <div className="cardrt">
                    <img src={cardrt} alt="" />
                </div>
              <h2>Small Teams</h2>
              <strong>2-25 Users</strong>
              <h1>41$</h1>
              <p>per user per year</p>
              <span>Get Started</span>
            </div>
          </div>
        </div>
        <div className="sheetieght">
          <h1>Each plan includes the following</h1>
          <div className="cardsbus">
            <div className="cardbus">
              <img
                src="https://www.ilovepdf.com/img/business/secure-shield.svg"
                alt=""
              />
              <h3>Streamline document workflows</h3>
              <p>
                Edit PDFs in the office or on the go, accessing documents on any
                device to continue work no matter your location.
              </p>
            </div>
            <div className="cardbus">
              <img
                src="https://www.ilovepdf.com/img/business/website.svg"
                alt=""
              />
              <h3>Streamline document workflows</h3>
              <p>
                Edit PDFs in the office or on the go, accessing documents on any
                device to continue work no matter your location.
              </p>
            </div>
            <div className="cardbus">
              <img
                src="https://www.ilovepdf.com/img/business/website.svg"
                alt=""
              />
              <h3>Streamline document workflows</h3>
              <p>
                Edit PDFs in the office or on the go, accessing documents on any
                device to continue work no matter your location.
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}