import React, { Component } from "react";
import { BsFillAspectRatioFill } from "react-icons/bs";
import Footer from "../../components/footer/Footer";
import "./tools.css";
export default class Tools extends Component {
  render() {
    return (
      <div>
      <div className="toolpage" >
        <div className="headtool">
          <h1 className="weltool">Welcome to our user's guide</h1>
          <div className="welh5">
            Although we have tried to make it really simple, here is a short
            guidance to help you through the editing process.
          </div>
          <h2 className="titleinfo">ORGANIZE PDF</h2>
          <hr className="linetool" />
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >Merge PDF</h4>
              <p>
                To merge two or more PDFs, select the documents from your device
                or from your Google Drive or Dropbox account. You can arrange
                the files however you like before merging them.
              </p>
              <p>
                You can also combine several password-protected documents into
                one. Upload the selected files, process them, and then download
                your merged file. Check 'Merge PDF' limits for each account
                type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >Split PDF</h4>
              <p>
                To split a PDF into different files, select the document from
                your device or from your cloud storage accounts such as Google
                Drive or Dropbox. You can also divide password-protected
                documents.
              </p>
              <p>
                Upload the file to split. You can either split your file by
                ranges or extract all pages. You can also merge all ranges in
                one PDF file. Hit the Split PDF button and you'll be good to go.
                Check 'Split PDF' limits for each account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >Remove Pages</h4>
              <p>
                To remove pages from one or multiple PDFs, upload your file from
                your device or download it from your cloud-connected accounts as
                Google Drive or Dropbox. You can remove pages from password
                protected documents as well.
              </p>
              <p>
                You will see a thumbnail of every page of your file. When
                uploading multiple files, the thumbnails of each file will be
                framed in a different color. You can click on each thumbnail to
                remove that page. After clicking, a red cross will appear over
                the thumbnail, showing that the page will be removed. Hit on
                Remove Pages button to download your processed PDF. Check
                'Remove Pages' limits for each account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >Extract Pages</h4>
              <p>
                To extract pages from a PDF file, upload your file from your
                device or from your cloud storage accounts as Google Drive or
                Dropbox. You can remove pages from password protected documents
                too.
              </p>
              <p>
                You will see a thumbnail of every page of your file. When
                uploading more than one file, the thumbnails of each file will
                be framed in a different color. Click on the pages you want to
                extract. Choose if you want to merge all the extracted pages
                into a new PDF or download it in a .zip folder. Then, hit the
                Extract Pages button. Check 'Extract Pages' limits for each
                account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >Organize PDF</h4>
              <p>
                Watermark IMAGE Organize PDF To organize the pages from a PDF
                file, upload your file from your device or download it straight
                from the cloud through your Google Drive or Dropbox account. You
                can remove pages from password protected documents as well.
              </p>
              <p>
                You will see a thumbnail of every page of your file. When
                uploading more than one file, the thumbnails of each file will
                be framed in a different color. Then you can remove or drag and
                drop the thumbnails to rearrange PDF pages however you like. Hit
                the 'Organize PDF' button to download your new PDF. Check
                'Organize PDF' limits for each account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}

          <h2 className="titleinfo">OPTIMIZE PDF</h2>
          <hr className="linetool" />
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >Compress PDF</h4>
              <p>
                To compress PDF files, select the documents from your device or
                from your Google Drive or Dropbox account. Upload the file or
                files to optimize. Choose between extreme, high or regular
                compression level and then hit the Compress PDF button. The
                higher compression, the lower file size and quality.
              </p>
              <p>
                Click 'Compress PDF' button to download your reduced PDF or save
                it back to the cloud. Check 'Compress PDF' limits for each
                account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}

          <h2 className="titleinfo">EDIT PDF</h2>
          <hr className="linetool" />
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >Edit PDF</h4>
              <p>
                To edit your PDF, upload your file from your device or from your
                Google Drive or Dropbox account.
              </p>
              <p>
                Once inside the PDF viewer, use the top toolbar to navigate
                through your document. Click on the wheel icon to decide your
                page setup. You can view a single page or multiple pages at
                once. To move in and around individual pages, select the hand
                icon.Use the magnifying glasses to zoom in and out on specific
                sections of the document.{" "}
              </p>
              <p>
                To add elements or text to a page, scroll down to the page which
                you want to edit. Choose from the Text, Image or Shape icons
                available in the Edit PDF toolbar at the top of the viewer. Use
                your mouse to resize or move any element as you wish on the same
                page where it was created.
              </p>
              <p>
                To add elements to a different page, navigate to the page and
                then select a new item from the toolbar. Change the colour,
                transparency, border color, rotation, format or line thickness
                of your images, shapes or texts using their property bars. Click
                the ‘Edit PDF’ button to process your file.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >Add page numbers</h4>
              <p>
                To number PDF pages, upload your files from your device or from
                your Google Drive or Dropbox account. Choose if you want to
                number all pages or just facing pages. Choose the page range to
                number. You can also edit the position of your number, and its
                format (typo, size color, opacity…) in the toolbar.
              </p>
              <p>
                Then hit 'Add Page Numbers' button and download or save back to
                the cloud your numbered PDF. Check 'Page Numbers' limits for
                each account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >Add watermark</h4>
              <p>
                To watermark PDF files, upload your PDF from your device or from
                your Google Drive or Dropbox account. You can combine text and
                image in your watermark, which will be stamped in the same
                position in all the pages of your file. You can custom format,
                orientation and opacity.
              </p>
              <p>
                Then hit 'Add watermark' button and download or save back to the
                cloud your watermarked PDF. Check 'Watermark' limits for each
                account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >Repair PDF</h4>
              <p>
                To repair a PDF, upload your damaged or corrupt PDF file from
                your device or from your Google Drive or Dropbox account. Our
                tool will try to analyze, repair or recover content from your
                corrupt file.
              </p>
              <p>
                Then hit 'Repair' button and download or save back to the cloud
                your repaired PDF. Check 'Repair PDF' limits for each account
                type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}

          <h2 className="titleinfo">CONVERT TO PDF</h2>
          <hr className="linetool" />
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >JPG to PDF</h4>
              <p>
                To convert one or multiple files JPG to PDF, upload your images
                form your device or straight from your Google Drive or Dropbox
                accounts.
              </p>
              <p>
                Choose if you want your output PDF into portrait or landscape
                mode and if you want it with margin or without. You can also
                merge all images in a single PDF file. Then, download your PDF
                or save it back to the cloud. Check 'JPG to PDF' limits for each
                account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >WORD to PDF</h4>
              <p>
                To convert one or more documents from WORD to PDF, select the
                documents from your device or from your cloud storage accounts
                such as Google Drive or Dropbox account.
              </p>
              <p>
                Click on Convert to PDF to transform your .docx into a
                non-editable document. Then, download your PDF or save it back
                to the cloud. Check 'Word to PDF' limits for each account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >POWERPOINT to PDF</h4>
              <p>
                To convert one or multiple files from Power Point to PDF, upload
                the documents from your device or straight from the Cloud
                through Google Drive or Dropbox.
              </p>
              <p>
                Click on Convert to PDF to transform your .pptx into a
                non-editable document. All the pictures and text from your .pptx
                presentation will be converted to a PDF file. Then, download
                your PDF or save it back to the cloud. Check 'Power Point to
                PDF' limits for each account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >EXCEL to PDF</h4>
              <p>
                To convert one or multiple files from Excel to PDF, upload the
                documents from your device or straight from your Google Drive or
                Dropbox account.
              </p>
              <p>
                Click on 'Convert to PDF' to transform your .xlsx into a
                non-editable document. All the tables and graphics from your
                Excel will be converted to a PDF document. Then, download your
                PDF or save it back to the cloud. Check 'Excel to PDF' limits
                for each account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >HTML to PDF</h4>
              <p>
                To convert a webpage to PDF, upload your images from your device
                or straight from your Google Drive or Dropbox accounts.
              </p>
              <p>
                Paste the URL you want to convert in the text box. A preview of
                the document will be shown. You can customize the orientation
                and the margin of the resulting document from the sidebar menu.
                <br />
                Click the 'Convert to PDF' button. Download your exported
                webpage or save it back to the Cloud. Check 'HTML to PDF' limits
                for each account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}

          <h2 className="titleinfo">CONVERT FROM PDF</h2>
          <hr className="linetool" />
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >PDF to JPG</h4>
              <p>
                To convert a PDF to a JPG image, select the file from your
                device or from your Google Drive or Dropbox account.
              </p>
              <p>
                You can transform your PDF into a JPG or extract all the
                pictures in a .zip file. Then, hit the 'Convert to JPG' button
                to transform your PDF to JPG. Check the 'PDF to JPG' limits for
                each account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >PDF to WORD</h4>
              <p>
                To convert one or more documents from PDF to Word, select the
                documents from your device or from your cloud storage accounts
                such as Google Drive or Dropbox account.
              </p>
              <p>
                Click on 'Convert to Word' to transform your PDF into an
                editable document. Then, download your .docx file or save it
                back to the cloud. Check 'PDF to Word' limits for each account
                type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >PDF to POWERPOINT</h4>
              <p>
                To convert PDF files to Power Point, upload the documents from
                your device or straight from the cloud through Google Drive or
                Dropbox.
              </p>
              <p>
                Click on 'Convert to Power Point' to transform your PDF into an
                editable document. All the pictures, text and graphics from your
                PDF will be converted to a PDF file. When converting a document
                of multiple pages, each page will be transformed into a .pptx
                slide. Then, download your .pptx file or save it back to the
                cloud. Check 'PDF to Power Point' limits for each account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}
          <div className="infotool">
            <div>
              <BsFillAspectRatioFill className="icontool" />
            </div>
            <div className="infoo">
              <h4 className="titletool" >PDF to EXCEL</h4>
              <p>
                To convert one or multiple files from PDF to Excel, upload the
                documents from your device or straight from your Google Drive or
                Dropbox account.
              </p>
              <p>
                Click on 'Convert to Excel' to transform your PDF into an
                editable document. All the tables and graphics from your PDF
                will be converted to a .xslx document. Then, download your Excel
                file or save it back to the cloud. Check 'PDF to Excel' limits
                for each account type.
              </p>
            </div>
            <br />
            <br />
          </div>
          {/*  */}

          <h2 className="titleinfo">TECH CONCEPTS</h2>
          <hr className="linetool" />
          <h4 className="titletool" >Password-protected files</h4>
          <p>
            If you process a password-protected file, we will ask you to help us
            open it. Once it has been opened and processed, we commit to not
            storing this password on our servers.
          </p>
          {/*  */}
          <h4 className="titletool" >Rotating files</h4>
          <p>
            You can rotate your files by hovering the mouse over a file and
            clicking the () icon. But if you want to rotate more than 10 files
            at once, you can do so automatically in the pop-up window that will
            appear. Before you can do it, you will have to render all the pages
            to rotate them in the same direction.
          </p>
          {/*  */}
          <h4 className="titletool" >JPG to PDF rotation</h4>
          <p>
            Rotating an image in a PDF document only affects the image.
            Afterwards, you will be able to choose the page orientation
            (vertical or horizontal) with the newly rotated image.
          </p>
          {/*  */}
          <h4 className="titletool" >Organizing files</h4>
          <p>
            Files can be organized in different ways. Drag and drop them however
            like; you can also arrange them alphabetically by clicking the ()
            icon; and you also have the option of arranging them in inverse
            alphabetical order clicking the () icon.
          </p>
          {/*  */}
          <h4 className="titletool" >Compressing files</h4>
          <p>
            After processing your files, you will see the original file size and
            by what percentage they've been reduced. In the case of PDF files
            that are already optimized, we won't be able to compress them any
            further.
          </p>
          {/*  */}
          <h4 className="titletool" >Uploading and processing</h4>
          <p>
            The uploading and processing time for files will depend on your
            Internet connection and on the size of the files you have selected.
            If the browser closes while your files are being processed, you can
            verify their processing status in the 'My Account' menu, in the
            'Last files processed' section.
          </p>
          {/*  */}
          <h4 className="titletool" >Downloading</h4>
          <p>
            The output files will be deleted from our servers after a period of
            time, depending on your user type. You can also save it straight
            back to the cloud, on your Google Drive or Dropbox accounts. You can
            cancel the validity of the download link whenever you want.
          </p>
          {/*  */}
          <h4 className="titletool" >Working from the cloud</h4>
          <p>
            You don't need to have the files you want to process stored on your
            device. If you have a Google Drive or Dropbox Account, you can
            download them straight to our page. Once your files have been
            processed, you can save them back to the cloud. To process
            cloud-stored files, you'll need to enter the password of your cloud
            account the first time you use this feature. Your passwords won't be
            stored in our system. This is feature is especially useful when
            working from a mobile device or tablet.
          </p>
          {/*  */}
          <h4 className="titletool" >Select files to upload</h4>
          <p>
            To select files from your computer, you can do it by hitting on the
            'Select images' button. If you want to select more than one file at
            the same time, hold the 'Ctrl' key while clicking on the files. If
            the files are in consecutive order, click on the first and the last,
            while holding on the 'Shift' key You can also drag and drop them
            straight to our canvas.
          </p>
          {/*  */}
          <h4 className="titletool" >Minimum requirements</h4>
          <p>
            We recommend using our tools from the following browsers: Chrome,
            Firefox, Explorer +10 and Safari. When working from Explorer version
            8 and 9, the rendering option for document pages will be disabled.
            iLovePDF needs to work with Javascript enabled.
          </p>
          {/*  */}
          <h4 className="titletool" >Technical issues</h4>
          <p>
            This new version of iLovePDF has been designed to be much easier to
            work with, and we have tried to tackle any technical issue. However,
            if you ever face any problem, do not hesitate to reach out. If the
            file does not contain confidential material, attach it to your
            e-mail so we can solve the problem faster. We will do our everything
            on our hands to come up with a solution.
          </p>
          {/*  */}
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
}
