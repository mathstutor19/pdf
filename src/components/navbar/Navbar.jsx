import React from 'react'
// Css
import './navbar.css'
// react-router-dom
import { Link } from 'react-router-dom'
// Icon
import {AiOutlineMenu, AiOutlineDesktop, AiOutlineMobile, AiFillTool, AiOutlineMail, AiOutlineCheck} from 'react-icons/ai'
import {GoDesktopDownload} from 'react-icons/go'
import {IoMdArrowDropdown, IoIosSettings, IoIosCode, IoMdBusiness} from 'react-icons/io'
import {IoHelpCircleSharp} from 'react-icons/io5'
import {BsFillSuitHeartFill, BsGlobe2, BsFillChatSquareTextFill} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import {HiLightBulb} from 'react-icons/hi'
import {MdOutlinePriceChange, MdOutlineKeyboardArrowRight, MdVerifiedUser} from 'react-icons/md'
import {TbSquaresDiagonal} from 'react-icons/tb'
import {FaFolderPlus, FaQuora} from 'react-icons/fa'
import {FcAnswers} from 'react-icons/fc'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container1">
            <div className="navbar_main">
                <div className="navbar_main_icon">
                    <IoIosSettings/>
                </div>
                <div className="navbar_main_left">                   
                    <Link to='/' className="navbar_main_img">
                        <img src="https://www.ilovepdf.com/img/ilovepdf.svg" alt="" />
                    </Link>
                    <div className="navbar_main_links">
                        <Link to='/merge' className='navbar_main_link main_link'>MERGE PDF</Link>
                        <Link to='/split' className='navbar_main_link main_link'>SPLIT PDF</Link>
                        <Link to='/compress' className='navbar_main_link main_link'>COMPRESS PDF</Link>
                        <div className="navbar_main_links_hover">
                            <Link to='/' className='navbar_main_link main_link'>CONVERT PDF <IoMdArrowDropdown className='icon'/></Link>
                            <div className="navbar_main_links_hover_div">
                                <div className="navbar_main_links_hover_div_left">
                                    <p className='navbar_main_links_hover_div_left_p'>CONVERT TO PDF</p>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/> JPG to PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/> Word to PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/> Powerpoint to PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/> Exel to PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/> HTML to PDF</Link>
                                </div>
                                <div className="navbar_main_links_hover_div_right">
                                    <p className='navbar_main_links_hover_div_left_p'>CONVERT FROM PDF</p>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>PDF to JPG</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>PDF to Word</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>PDF to Powerpoint</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>PDF to Exel</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>PDF to PDF/A</Link>
                                </div>
                            </div>
                        </div>
                        <div className="navbar_main_links_hover1">
                            <Link to='/' className='navbar_main_link'>ALL PDF TOOLS <IoMdArrowDropdown className='icon'/></Link>
                            <div className="navbar_main_links_hover1_div">
                                <div className="navbar_main_links_hover1_div_div1">
                                    <p className='navbar_main_links_hover_div_left_p'>ORGANIZE PDF</p>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Merg PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Split PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Remove PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Exract PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Organize PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Scan to PDF</Link>
                                </div>
                                <div className="navbar_main_links_hover1_div_div1">
                                    <p className='navbar_main_links_hover_div_left_p'>OPTIMIZE PDF</p>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Compress PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>REpair PDF</Link>
                                </div>
                                <div className="navbar_main_links_hover1_div_div1">
                                    <p className='navbar_main_links_hover_div_left_p'>CONVERT TO PDF</p>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/> JPG to PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/> Word to PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/> Powerpoint to PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/> Exel to PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/> HTML to PDF</Link>
                                </div>
                                <div className="navbar_main_links_hover1_div_div1">
                                    <p className='navbar_main_links_hover_div_left_p'>CONVERT FROM PDF</p>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>PDF to JPG</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>PDF to Word</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>PDF to Powerpoint</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>PDF to Exel</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>PDF to PDF/A</Link>
                                </div>
                                <div className="navbar_main_links_hover1_div_div1">
                                    <p className='navbar_main_links_hover_div_left_p'>EDIT PDF</p>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Rotate PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Add page numbers</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Add watermerk</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Edit PDF</Link>
                                </div>
                                <div className="navbar_main_links_hover1_div_div1">
                                    <p className='navbar_main_links_hover_div_left_p'>PDF SECURITY</p>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Unclock PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Protect PDF</Link>
                                    <Link to='/' className='navbar_main_links_hover_div_left_link'><FcAnswers/>Sign PDF</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar_main_right">
                    <div className="navbar_main_right_div">
                        <Link to='/desktop' className='navbar_main_right_link'><GoDesktopDownload/></Link>
                        <Link to='/' className='navbar_main_right_link1'>Log in</Link>
                        <Link to='/' className='navbar_main_right_link2'>Sign up</Link>
                    </div>
                    <div className='navbar_main_right_div_div1'>
                        <p className='navbar_main_right_div_div1_p'></p>
                    </div>
                    <div className='navbar_main_right_hover'>
                        <p className='navbar_main_right_link3'><AiOutlineMenu/></p>
                        <div className='navbar_main_right_hover_div'>
                            <Link to='/' className='navbar_main_right_hover_div_link'><BsFillSuitHeartFill className='heart'/> Home</Link>
                            <div className='navbar_main_right_hover_div_hover'>
                                <Link to='/' className='navbar_main_right_hover_div_link'><TbSquaresDiagonal className='icon'/> Product <MdOutlineKeyboardArrowRight className='hover_arrow'/></Link>
                                <div className='navbar_main_right_hover_div_hover_div'>
                                    <Link to='/desktop' className='navbar_main_right_hover_div_link'><AiOutlineDesktop className='icon'/> Desktop</Link>
                                    <Link to='/mobile' className='navbar_main_right_hover_div_link'><AiOutlineMobile className='icon'/> Mobile</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_link'><GrProjects className='icon'/> Features</Link>
                                    <a target="_blank" href='https://developer.ilovepdf.com/' className='navbar_main_right_hover_div_link'><IoIosCode className='icon'/> API Rest</a>
                                    <a target="_blank" href='https://wordpress.org/plugins/ilovepdf/' className='navbar_main_right_hover_div_link'><FaFolderPlus className='icon'/> Wordpress Plugin</a>
                                </div>
                            </div>
                            <div className="navbar_main_right_hover_div_hover">
                                <Link to='/' className='navbar_main_right_hover_div_link'><HiLightBulb className='icon'/> Solutions <MdOutlineKeyboardArrowRight className='hover_arrow'/></Link>
                                <div className='navbar_main_right_hover_div_hover_div'>
                                    <Link to='/' className='navbar_main_right_hover_div_link'><IoMdBusiness className='icon'/> Busines</Link>
                                    <Link to='/education' className='navbar_main_right_hover_div_link'><MdVerifiedUser className='icon'/> Education</Link>
                                    <a target="_blank" href='https://developer.ilovepdf.com/' className='navbar_main_right_hover_div_link'><AiOutlineMobile className='icon'/> Developers</a>
                                </div>
                            </div>
                            <Link to='/' className='navbar_main_right_hover_div_link'><MdOutlinePriceChange className='icon'/> Pricing</Link>
                            <div className="navbar_main_right_hover_div_hover1">
                                <Link to='/' className='navbar_main_right_hover_div_link'><BsGlobe2 className='icon'/> Language <MdOutlineKeyboardArrowRight className='hover_arrow'/></Link>
                                <div className="navbar_main_right_hover_div_hover1_div">
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'><AiOutlineCheck/> English</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>English</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Español</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Français</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Deutsch</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Italiano</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Português</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>日本語</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Pусский</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>한국어</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>中文 (简体)</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>中文 (繁體)</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>العربية</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Български</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Català</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Dutch</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Ελληνικά</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>हिन्दी</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Bahasa Indonesia</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Bahasa Melayu</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Polski</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Svenska</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>ภาษาไทย</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Türkçe</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Українська</Link>
                                    <Link to='/' className='navbar_main_right_hover_div_hover1_div_link'>Tiếng Việt</Link>
                                </div>
                            </div>
                            <div className="navbar_main_right_hover_div_hover">
                                <Link to='/' className='navbar_main_right_hover_div_link'><IoHelpCircleSharp className='icon'/> Help <MdOutlineKeyboardArrowRight className='hover_arrow'/></Link>
                                <div className='navbar_main_right_hover_div_hover_div'>
                                    <Link to='/faq' className='navbar_main_right_hover_div_link'><FaQuora className='icon'/> FAQ</Link>
                                    <Link to='/tool' className='navbar_main_right_hover_div_link'><AiFillTool className='icon'/> Tools</Link>
                                    <Link to='/legal' className='navbar_main_right_hover_div_link'><BsFillChatSquareTextFill className='icon'/> Legal & Pravicy</Link>
                                    <Link to='/story' className='navbar_main_right_hover_div_link'><BsFillSuitHeartFill className='icon'/> Our story</Link>
                                    <Link to='/contact' className='navbar_main_right_hover_div_link'><AiOutlineMail className='icon'/> Contact</Link>
                                </div>
                            </div>
                            <a href='https://www.iloveimg.com/' className='navbar_main_right_hover_div_link'><BsFillSuitHeartFill className='blue_heart'/> iLoveMG</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Navbar;