import React, {useState} from "react";
import "./Compress.css";
function Compress() {
    const [count, setCount] = useState(true);
    // const [drag, setDrag] = useState(false);
    const [index, setIndex] = useState(-1);
    const onSelectFile = (event) => {
        const selectedFile = event.target.value;
        console.log(selectedFile);
        setCount(false);
    };
    const dragStartHandler = () => {
        // console.log("over here");
        // setIndex(10);
    };
    const dragLeaveHandler = (e) => {
        e.preventDefault();
        // setDrag(true);
    };
    // const dragDrop = (e) => {
    //     e.preventDefault();
    //     setCount(false);
    // };

    return (
        <section>
          

            {count && (
                <div>
                    <h2 className="merge__title">Compress PDF files</h2>
                    <p className="merge__text">
                    Reduce file size while optimizing for maximal PDF quality.
                    </p>
                    <div className="label__wrapper">
                        <label className="merge__label">
                            Select PDF File
                            <input
                                type="file"
                                name="images"
                                onChange={onSelectFile}
                                multiple
                                accept="application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            />
                        </label>
                        <div className="icon__wrapper">
                            <a
                                href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=permission%20id_token&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&openid.realm&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.ilovepdf.com%3Fid%3Dauth626730&client_id=391438661644-2uum636mg2ckariol0if8h3364a1h6dc.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.ilovepdf.com&gsiwebsdk=2&flowName=GeneralOAuthFlow "
                                className="icon__curcle"
                                title="Select PDF from Google Drive">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 1443.061 1249.993">
                                    <path
                                        fill="#fff"
                                        d="M240.525 1249.993l240.492-416.664h962.044l-240.514 416.664z"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M962.055 833.329h481.006L962.055 0H481.017z"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M0 833.329l240.525 416.664 481.006-833.328L481.017 0z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.dropbox.com/dropins/login?app_key=xntw8za866940lz&cont=https%3A%2F%2Fwww.dropbox.com%2Fchooser%3Fapp_key%3Dxntw8za866940lz%26extensions%3D.pdf%26folderselect%3Dfalse%26from_login%3DTrue%26iframe%3Dfalse%26link_type%3Ddirect%26multiselect%3Dtrue%26origin%3Dhttps%253A%252F%252Fwww.ilovepdf.com%26trigger%3Djs%26version%3D2&default_view=sign-in&origin=https%3A%2F%2Fwww.ilovepdf.com"
                                className="icon__curcle"
                                title="Select PDF from Dropbox">
                                <svg
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 42.4 39.5"
                                    width="25"
                                    height="23">
                                    <path
                                        className="st0"
                                        fill="#fff"
                                        d="M10.6 1.7L0 8.5l10.6 6.7 10.6-6.7zm21.2 0L21.2 8.5l10.6 6.7 10.6-6.7zM0 22l10.6 6.8L21.2 22l-10.6-6.8zm31.8-6.8L21.2 22l10.6 6.8L42.4 22zM10.6 31l10.6 6.8L31.8 31l-10.6-6.7z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <p className="merge__suptext">or drop PDFs here</p>
                    <footer className="merge__footer">
                        <p className="footer__text">
                            © iLovePDF 2022 ® - Your PDF Editor
                        </p>
                    </footer>
                </div>
            )}

            {/* <div
                className="drag"
                style={{zIndex: index}}
                onMouseOver={() => dragStartHandler()}
                onDragLeave={(e) => dragLeaveHandler(e)}>
                <p>Drop it like it's hot</p>
            </div> */}

            {!count && (
                <section className="selected">
                    <div className="selected__left">
                        <div></div>
                        <p>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    fill="#fff"
                                    className="bi bi-plus-lg"
                                    viewBox="0 0 16 16">
                                    <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg>
                            </span>
                        </p>
                    </div>
                    <div className="selected__right">
                        <h3>Compression level</h3>
                       <div className="selectext__text__wrapper">
                        <p className="seleted__text__first">Extreme Compression </p>
                        <p className="seleted__text__second">Less quality, high compression </p>
                       </div>
                    </div>
                    <button
                        className="selected__right__button"
                        disabled="disabled">
                        <span>Merge PDF</span>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-right-circle"
                                viewBox="0 0 16 16">
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                                />
                            </svg>
                        </span>
                    </button>
                </section>
            )}
        </section>
    );
}

export default Compress;
