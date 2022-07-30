import React, { Component } from "react";
import { MdSecurity } from "react-icons/md";
import { IoMdCopy } from "react-icons/io";
import { SiAdobecreativecloud } from "react-icons/si";
import { BsCheckLg, BsCloudFill } from "react-icons/bs";
import { MdOutlineComputer, MdMessage, MdWarning } from "react-icons/md";
import "./faq.css";
import Footer from "../../components/footer/Footer";
export default class Faq extends Component {
  render() {
    return (
      <div>
      <div className="faqpage">
        <div className="headfaq">
          <h1 className="ourfaq">
            Our support team answers the following questions nearly every day
          </h1>
          <h3 className="weh3">We thought they could be useful for you too</h3>
          <div className="infofaq">
            <div className="forinfo">
              <div className="iconstyle">
                <IoMdCopy className="iconmd" />
              </div>
              <div className="infotext">
                <h4>Do you keep a copy of my processed files?</h4>
                <p>
                  <b>Absolutely not.</b> Your files are only yours. While your files
                  are in our servers, they are strictly secured and no one can
                  access them. We just keep them for a maximum of 2 hours so you
                  can download them. Right after, they are completely removed
                  forever from our servers. You can also delete the document by
                  yourself at the end of each conversion. We won’t check, copy
                  or analyze your files in any way.
                </p>
              </div>
            </div>
            <div className="forinfo">
              <div className="iconstyle">
                <MdSecurity className="iconmd" />
              </div>
              <div className="infotext">
                <h4>Are company files safe with your service?</h4>
                <p>
                <b>Yes.</b> All uploads use https/SSL and include our end-to-end encryption for further privacy. These additional steps increase security and satisfy most corporate data privacy policies. Put simply, your data is processed as safely as possible. We comply with EU Data Protection Regulation, which is one of the strictest safety standards in the world (GDPR).
                </p>
              </div>
            </div>
          </div>

         <br/> <hr />
          <div className="infofaq">
            <div className="forinfo">
              <div className="iconstyle">
                <BsCheckLg className="iconmd" />
              </div>
              <div className="infotext">
                <h4>What are your system requirements?</h4>
                <p>
                We have very <b>basic system requirements.</b> To run smoothly our tools, we recommend you to work with the following browsers: Chrome, Firefox, Explorer +10 and Safari. If at any point would you experience issues within the download screen, we recommend you to set your browser to Incognito mode.
                </p>
              </div>
            </div>
            <div className="forinfo">
              <div className="iconstyle">
                <MdOutlineComputer className="iconmd" />
              </div>
              <div className="infotext">
                <h4>Why did I not receive the confirmation of my email address?</h4>
                <p>
                The confirmation email should be delivered to your email account immediately. Although, <b>sometimes it may take some time.</b> If after 30 minutes nothing makes it into your inbox, check your Spam/Trash Folder or shoot us an email.
                </p>
              </div>
            </div>
          </div>
         <br/> <hr />
          <div className="infofaq">
            <div className="forinfo">
              <div className="iconstyle">
                <MdMessage className="iconmd" />
              </div>
              <div className="infotext">
                <h4>How can I upload my files?</h4>
                <p>
                The easiest way is to drag and drop your files straight to our canvas. You can also click on ‘Select files’ button or import your files from the main cloud storage systems such as Google Drive or Dropbox.
                </p>
              </div>
            </div>
            <div className="forinfo">
              <div className="iconstyle">
                <MdWarning className="iconmd" />
              </div>
              <div className="infotext">
                <h4>Can I convert my scanned PDFs to an editable document?</h4>
                <p>
                To <b>convert a scanned PDF</b> to an editable or another editable format, it is required <b>OCR</b> (Optical Character Recognition), a system that converts non-selectable and scanned text to office documents. Since our last release, it is possible to make Scanned PDF to Office conversions.
                </p>
              </div>
            </div>
          </div>
         <br/> <hr />
          <div className="infofaq">
            <div className="forinfo">
              <div className="iconstyle">
                <BsCloudFill className="iconmd" />
              </div>
              <div className="infotext">
                <h4>Why does my conversion take so long?</h4>
                <p>
                Unfortunately, this is not entirely in our hands. Processing speed depends on many factors, so the time that will take you to get your files converted will depend as well on your own Internet connection speed, the size of the selected files and, mostly, on how busy our servers are.
                </p>
              </div>
            </div>
            <div className="forinfo">
              <div className="iconstyle">
                <SiAdobecreativecloud className="iconmd" />
              </div>
              <div className="infotext">
                <h4>Can I work from the cloud?</h4>
                <p>
                <b>Yes!</b> The files that you want to process don’t even need to be on the device you are working from. If you have a Google Drive or Dropbox Account, you can import files straight to our page, process them and save them back to the cloud. In fact, this is the perfect method when using <b>iLovePDF App</b> from your mobile device or tablet as it helps you reduce mobile data usage.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
      </div>
    );
  }
}
