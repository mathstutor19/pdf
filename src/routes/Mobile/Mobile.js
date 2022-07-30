import React from "react";
import Footer from "../../components/footer/Footer";
import "./Mobile.css";
function Mobile() {
  return (
    <div>
      <div className="mobile">
        <div className="mobile-container-one">
          <h1>iLovePDF Mobile</h1>
          <div className="store">
            <div>
              <img
                src="	https://www.ilovepdf.com/img/app/google-play.svg"
                alt="playmarket"
              />
              <img
                src="	https://www.ilovepdf.com/img/app/app-store.svg"
                alt="appstore"
              />
            </div>
          </div>
          <div className="image">
            <img
              src="https://www.ilovepdf.com/img/app/mobile-tablet.png"
              alt=""
            />
          </div>
          <p className="parag-one">
            Scan, edit and share documents from your smartphone and tablet
          </p>
          <p className="parag-two">
            Turn your mobile device or tablet into a portable PDF editor. Keep
            projects moving and stay productive by working with your favorite
            PDF tools anytime, anywhere.
          </p>
        </div>
        <div className="mobile-container-two">
          <p className="parag">PDF Tools for productive people</p>
          <div className="grid">
            <div>
              <img
                src="https://www.ilovepdf.com/img/app/pdf-editor.svg"
                alt=""
              />
              <p className="parags">PDF Editor</p>
              <p className="parag-s">
                Include colorful comments and annotations in your PDF to
                highlight important information.
              </p>
            </div>
            <div>
              <img src="	https://www.ilovepdf.com/img/app/e-sign.svg" alt="" />
              <p className="parags">E-signing and Scanner</p>
              <p className="parag-s">
                Sign any document from your smartphone and tablet, no printing
                required. E-sign and send PDFs right away.
              </p>
            </div>
            <div>
              <img
                src="https://www.ilovepdf.com/img/app/file-manager.svg"
                alt=""
              />
              <p className="parags">File manager</p>
              <p className="parag-s">
                Keep your files organized on your device. Store your documents
                easily and efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="mobile-container-three">
          <div className="right">
            <p>Turn your mobile device into a portable PDF Editor and Reader</p>
            <div className="store">
              <a href="#">
                <img
                  src="https://www.ilovepdf.com/img/app/google-play.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://www.ilovepdf.com/img/app/app-store.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="left">
            <img
              src="https://www.ilovepdf.com/img/app/lifestyle-tablet.png"
              alt=""
            />
          </div>
        </div>
        <div className="mobile-container-four">
          <p className="parag">Streamline your document workflow</p>
          <div className="grid">
            <div>
              <p className="check">
                <i class="bx bx-check"></i>Send large files
              </p>
              <p className="p">
                Having trouble pinging PDFs via email? Use the Compress PDF tool
                to reduce the size of your file for easy sharing, without
                compromising on the quality.
              </p>
            </div>
            <div>
              <p className="check">
                <i class="bx bx-check"></i>e-Sign documents
              </p>
              <p className="p">
                No printer? No problem. To sign a document, just use the Sign
                PDF tool. It lets you add your signature electronically, so you
                don't need to print anything.
              </p>
            </div>
            <div>
              <p className="check">
                <i class="bx bx-check"></i>Annotate and Markup PDF
              </p>
              <p className="p">
                Sometimes you need to give feedback on a document quickly. Tap
                Edit to start annotating directly on your PDF—you can highlight
                paragraphs and add comments or notes.
              </p>
            </div>
            <div>
              <p className="check">
                <i class="bx bx-check"></i>Digitize your paperwork
              </p>
              <p className="p">
                Contracts, reports, records—to digitize your documents, head to
                the app's JPG to PDF tool. It's a practical, easy way to create
                a digital archive of your personal papers.
              </p>
            </div>
          </div>
        </div>
        <div className="mobile-container-five">
        <p className="parag">Looking for another solution?</p>
        <div className="icon-company">
          <a href="#"><img src="https://www.ilovepdf.com/img/desktop/ios.svg" alt="iOS" /><p>iOS</p></a>
          <a href="#"><img src="https://www.ilovepdf.com/img/desktop/android.svg" alt="Android" /><p>Android</p></a>
          <a href="#"><img src="https://www.ilovepdf.com/img/desktop/apple.svg" alt="MacOs" /><p>MacOS</p></a>
          <a href="#"><img src="https://www.ilovepdf.com/img/desktop/windows.svg" alt="Windows" /><p>Windows</p></a>
          <a href="#"><img src="https://www.ilovepdf.com/img/desktop/web.svg" alt="Web" /><p>Web</p></a>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Mobile;
