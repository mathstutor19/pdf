import React from 'react'
// CSS
import './product.css'
// import img
import img from '../../images/product-img/img.png'
import img1 from '../../images/product-img/img1.png'
import img2 from '../../images/product-img/img2.png'
import img3 from '../../images/product-img/img3.png'
import img4 from '../../images/product-img/img4.png'
import img5 from '../../images/product-img/img5.png'
import img6 from '../../images/product-img/img6.png'
import img7 from '../../images/product-img/img7.png'
import img8 from '../../images/product-img/img8.png'
import img9 from '../../images/product-img/img9.png'
import img10 from '../../images/product-img/img10.png'
import img11 from '../../images/product-img/img11.png'
import img12 from '../../images/product-img/img12.png'
import img13 from '../../images/product-img/img13.png'
import img14 from '../../images/product-img/img14.png'
import img15 from '../../images/product-img/img15.png'
import img16 from '../../images/product-img/img16.png'
import img17 from '../../images/product-img/img17.png'
import img18 from '../../images/product-img/img18.png'
import img19 from '../../images/product-img/img19.png'
import img20 from '../../images/product-img/img20.png'
import img21 from '../../images/product-img/img21.png'
import img22 from '../../images/product-img/img22.png'

    const data = [
        {
            id: 1,
            src: img,
            nomi: 'Merge PDF',
            nomi1: 'Combine PDFs in the order you want with the easiest PDF merger available.',
            btn: ''
        },
        {
            id: 2,
            src: img1,
            nomi: 'Split PDF',
            nomi1: 'Separate one page or a whole set for easy conversion into independent PDF files.',
            btn: ''
        },
        {
            id: 3,
            src: img2,
            nomi: 'Compress PDF files',
            nomi1: 'Reduce file size while optimizing for maximal PDF quality.',
            btn: ''
        },
        {
            id: 4,
            src: img3,
            nomi: 'PDF to WORD',
            nomi1: 'Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted WORD document is almost 100% accurate.',
            btn: ''
        },
        {
            id: 5,
            src: img4,
            nomi: 'PDF to POWERPOINT',
            nomi1: 'Turn your PDF files into easy to edit PPT and PPTX slideshows.',
            btn: ''
        },
        {
            id: 6,
            src: img5,
            nomi: 'PDF to EXCEL',
            nomi1: 'Puul data straight from PDFs and Excel spreadsheets in a few short seconds.',
            btn: ''
        },
        {
            id: 7,
            src: img6,
            nomi: 'WORD to PDF',
            nomi1: 'Make DOC and DOCX files easy to read by converting them to PDF.',
            btn: ''
        },
        {
            id: 8,
            src: img7,
            nomi: 'POWERPOINT to PDF',
            nomi1: 'Make PDT and PDTX slideshows easy to view by converting them to PDF.',
            btn: ''
        },
        {
            id: 9,
            src: img8,
            nomi: 'Excel to PDF',
            nomi1: 'Make EXCEL spreadsheets easy to read by converting them to PDF.',
            btn: ''
        },
        {
            id: 10,
            src: img9,
            nomi: 'Edit PDF',
            nomi1: 'Add text, images, shapes or freehand annotations to a PDF document. Edit the size, font, and color of the added content.',
            btn: 'New!'
        },
        {
            id: 11,
            src: img10,
            nomi: 'PDF to JPG',
            nomi1: 'Convert each PDF page into a JPG or extract all images contained in a PDF.',
            btn: ''
        },
        {
            id: 12,
            src: img11,
            nomi: 'JPG to PDF',
            nomi1: 'Convert JPG images to PDF in seconds. Easily adujust orientation and margins.',
            btn: ''
        },
        {
            id: 13,
            src: img12,
            nomi: 'Sign PDF',
            nomi1: 'Sign  a document and request signatures. Draw your signature or sign PDF files with a certificate-based digital ID.',
            btn: 'New!'
        },
        {
            id: 14,
            src: img13,
            nomi: 'Watermark ',
            nomi1: 'Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position.',
            btn: ''
        },
        {
            id: 15,
            src: img14,
            nomi: 'Rotate PDF',
            nomi1: 'Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!',
            btn: ''
        },
        {
            id: 16,
            src: img15,
            nomi: 'HTML to PDF',
            nomi1: 'Convert webpages in HTML to PDF. Copy and paste the URL of the page you want and convert it to PDF with a click.',
            btn: ''
        },
        {
            id: 17,
            src: img16,
            nomi: 'Unlock PDF',
            nomi1: 'Remove PDF password security, giving you the freedom to use your PDFs as you want.',
            btn: ''
        },
        {
            id: 18,
            src: img17,
            nomi: 'Protect PDF',
            nomi1: 'Protect PDF files with a password. Encrypt PDF documets to prevent unauthorized access.',
            btn: ''
        },
        {
            id: 19,
            src: img18,
            nomi: 'Organize PDF',
            nomi1: 'Sort pages of your PDF file however you like. Delete PDF pages or add PDF pages to your document at your convenience.',
            btn: ''
        },
        {
            id: 20,
            src: img19,
            nomi: 'PDF to PDD/A',
            nomi1: 'Transform your PDF to PDF/A, the ISO-standardized version of PDF for long-term archiving. Your PDF will preserve formatting when accessed in the future.',
            btn: ''
        },
        {
            id: 21,
            src: img20,
            nomi: 'Repiar PDF',
            nomi1: 'Repiar a damaged PDF and recover data from corrupt PDF. Fix PDF files with our Repiar tool.',
            btn: ''
        },
        {
            id: 22,
            src: img21,
            nomi: 'Page numbers',
            nomi1: 'Add page numbers into PDFs with ease.Choose your positions, dimensions typography.',
            btn: ''
        },
        {
            id: 23,
            src: img22,
            nomi: 'Scan to PDF',
            nomi1: 'Capture document scans from your mobile device and send them instantly to your browser',
            btn: 'New!'
        }
    ]
const Product = () => {
  return (
    <div className='product'>
        <div className="container2">
            <div className="product_main_box">
                {
                    data.map(item => (
                        <div className="product_main_box_map" key={item.id}>
                            <div className="product_main_box_map_box">
                                <div className="product_main_box_map_img">
                                    <img src={item.src} alt="PDF" />
                                </div>
                                <div className="product_main_box_map_txt">
                                    <p className='product_main_box_map_txt_p'>{item.nomi}</p>
                                    <p className='product_main_box_map_txt_p1'>{item.nomi1}</p>
                                </div>
                                {item.btn&& <div className="product_main_box_map_btn">
                                    <p className='product_main_box_map_btn_p'>{item.btn}</p>
                                </div>}
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Product