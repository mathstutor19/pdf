import React, { useState } from "react";
import svgOne from "../../images/svg/iso-logo.svg";
import svgTwo from "../../images/svg/pdf-association-logo.svg";
import svgThree from "../../images/svg/secure-payment-logo.svg";
import svgFour from "../../images/svg/ssl-encrypted-logo.svg";
import {
  array,
  includedTools,
  allTools,
  limit,
  unlimited,
  limitOne,
  unlimitedOne,
} from "./array";
import "./Pricing.css";
import ArrayMao from "./ArrayMao";
function Pricing() {
  const [tools, setTools] = useState(false);
  const [limited, setLimit] = useState(false);
  const [litimOne, setLimitOne] = useState(false);
  const [arrays, setArray] = useState(array);
  const [radioBtn, setRadioBtn] = useState(false);
  const completedArray = (id) => {
    const newArray = [...arrays];
    const findArray = newArray.find((value) => {
      return value.id === id;
    });
    findArray.isCompleted = !findArray.isCompleted;
    setArray(newArray);
  };
  return (
      <div className="pricing">
        <p  className="parag-one">Choose the plan that's right for you</p>
        <div className="radioBtns">
          <div>
          <p>-42%</p>
          <input
            type="radio"
            name="radiobtn"
            id="month"
            onChange={() => setRadioBtn(true)}
          />
          <label className={radioBtn ? "radioBtnlabel" : "label"} htmlFor="month">Monthly Billing</label>
          <input
            type="radio"
            name="radiobtn"
            id="year"
            checked={radioBtn === false}
            onChange={() => setRadioBtn(false)}
          />
          <label className={radioBtn ? "label" : "radioBtnlabel"} htmlFor="year">Yearly Billing</label>
          </div>
        </div>
        <div className="container-one">
          <div className="table-one">
            <div className="triangle"></div>
            <h3>Free</h3>
            <h1>0$</h1>
            <button>Get started</button>
            <p className="parag">Free features include:</p>
            <div>
              <p>
                <i className="bx bx-check"></i>Access to iLovePDF tools
              </p>
              <p>
                <i className="bx bx-check"></i>Limited document processing
              </p>
              <p>
                <i className="bx bx-check"></i>Work on Web
              </p>
            </div>
          </div>
          <div className="table-two">
          <div className="triangle"></div>
            <h3>Premium</h3>
            <div className="radiooBtn">
              <span>{radioBtn ? "7$" : "4$"}</span>
              <span>/month</span>
              <pre style={{display: radioBtn ? "none" :"block"}}>
                 Billed annually <br />
                 Billed as one payment of <b> 48$</b>
              </pre>
            </div>
            <button>Go Premium</button>
            <p className="parag">Premium features include:</p>
            <div>
              <p>
                <i className="bx bx-check"></i>Full access to iLovePDF tools
              </p>
              <p>
                <i className="bx bx-check"></i>Unlimited document processing
              </p>
              <p>
                <i className="bx bx-check"></i>Work on Web, Mobile and
                <b>Desktop</b>
              </p>
              <p>
                <i className="bx bx-check"></i>Convert scanned PDF to Word with
                <b>OCR</b>, sign with <b>digital signatures</b> , convert to
                <b>PDF/A</b>
              </p>
              <p>
                <i className="bx bx-check"></i>No Ads
              </p>
              <p>
                <i className="bx bx-check"></i>Customer support
              </p>
            </div>
          </div>
          <div className="table-three">
          <div className="triangle"></div>
            <h3>Business</h3>
            <h5>Custom pricing</h5>
            <p>Pricing plan tailored for your business</p>
            <button>Contact sales</button>
            <p className="parag">Business features include all Premium features plus:</p>
            <div>
              <p>
                <i className="bx bx-check"></i>Flexible payment options
              </p>
              <p>
                <i className="bx bx-check"></i>Custom contract
              </p>
              <p>
                <i className="bx bx-check"></i>Dedicated customer success
              </p>
              <p>
                <i className="bx bx-check"></i>Dedicated hardware
              </p>
            </div>
          </div>
        </div>
        <div className="container-two">
          <h3>The security of your data is our priority</h3>
          <p>
            In addition to data encryption in transit and at rest, we operate in
            compliance with industry-accepted standards, regulations, and
            certifications. <a href="#">Learn more about security</a>
          </p>
          <div className="image">
            <img src={svgTwo} alt="" />
            <img src={svgOne} alt="" />
            <img src={svgThree} alt="" />
            <img src={svgFour} alt="" />
          </div>
        </div>
        <div className="container-three">
          <h1>Compare plan features</h1>
          <div className="table">
            <table>
              <tr>
                <th></th>
                <th>Free</th>
                <th>Premium</th>
                <th>Business</th>
              </tr>
              <tr>
                <td colum="3">Service</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Tools</td>
                <td>
                  <p
                    onClick={() => setTools(!tools)}
                    style={{ cursor: "pointer" }}
                  >
                    Included tools<i className="bx bx-chevron-down"></i>
                  </p>
                  <div style={{ display: tools ? "block" : "none" }}>
                    {includedTools.map((value) => {
                      return (
                    
                          <p>
                            <span>{value.sign}</span>
                            <span>{value.name}</span>
                          </p>
                    
                      );
                    })}
                  </div>
                </td>
                <td>
                  <p
                    onClick={() => setTools(!tools)}
                    style={{ cursor: "pointer" }}
                  >
                    All tools included <i className="bx bx-chevron-down"></i>
                  </p>
                  <div style={{ display: tools ? "block" : "none" }}>
                    {allTools.map((value) => {
                      return (
                    
                          <p>
                            <span>{value.sign}</span>
                            <span>{value.name}</span>
                          </p>
                    
                      );
                    })}
                  </div>
                </td>
                <td>
                  <p
                    onClick={() => setTools(!tools)}
                    style={{ cursor: "pointer" }}
                  >
                    All tools included <i className="bx bx-chevron-down"></i>
                  </p>
                  <div style={{ display: tools ? "block" : "none" }}>
                    {allTools.map((value) => {
                      return (
                        
                          <p>
                            <span>{value.sign}</span>
                            <span>{value.name}</span>
                          </p>
                        
                      );
                    })}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Batch processing</td>
                <td>
                  <p
                    onClick={() => setLimit(!limited)}
                    style={{ cursor: "pointer" }}
                  >
                    Limited<i className="bx bx-chevron-down"></i>
                  </p>
                  <div style={{ display: limited ? "block" : "none" }}>
                    {limit.map((value) => {
                      return (
                        <p>
                          <span>{value.name}</span>
                          <span>{value.num}</span>
                        </p>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <p
                    onClick={() => setLimit(!limited)}
                    style={{ cursor: "pointer" }}
                  >
                    Unlimited<i className="bx bx-chevron-down"></i>
                  </p>
                  <div style={{ display: limited ? "block" : "none" }}>
                    {unlimited.map((value) => {
                      return (
                        <p>
                          <span>{value.name}</span>
                          <span>{value.num}</span>
                        </p>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <p
                    onClick={() => setLimit(!limited)}
                    style={{ cursor: "pointer" }}
                  >
                    Unlimited<i className="bx bx-chevron-down"></i>
                  </p>
                  <div style={{ display: limited ? "block" : "none" }}>
                    {unlimited.map((value) => {
                      return (
                        <p>
                          <span>{value.name}</span>
                          <span>{value.num}</span>
                        </p>
                      );
                    })}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Filesize per task</td>
                <td>
                  <p
                    onClick={() => setLimitOne(!litimOne)}
                    style={{ cursor: "pointer" }}
                  >
                    Limited<i className="bx bx-chevron-down"></i>
                  </p>
                  <div style={{ display: litimOne ? "block" : "none" }}>
                    {limitOne.map((value) => {
                      return (
                        
                          <p>
                            <span>{value.name}</span>
                            <span>{value.num}</span>
                          </p>
                        
                      );
                    })}
                  </div>
                </td>
                <td>
                  <p
                    onClick={() => setLimitOne(!litimOne)}
                    style={{ cursor: "pointer" }}
                  >
                    Unlimited<i className="bx bx-chevron-down"></i>
                  </p>
                  <div style={{ display: litimOne ? "block" : "none" }}>
                    {unlimitedOne.map((value) => {
                      return (
                        
                          <p>
                            <span>{value.name}</span>
                            <span>{value.num}</span>
                          </p>
                        
                      );
                    })}
                  </div>
                </td>
                <td>
                  <p
                    onClick={() => setLimitOne(!litimOne)}
                    style={{ cursor: "pointer" }}
                  >
                    Unlimited<i className="bx bx-chevron-down"></i>
                  </p>
                  <div style={{ display: litimOne ? "block" : "none" }}>
                    {limitOne.map((value) => {
                      return (
                        
                          <p>
                            <span>{value.name}</span>
                            <span>{value.num}</span>
                          </p>
                        
                      );
                    })}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Teams</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>Up to 100 users</td>
                <td>More than 100 users</td>
              </tr>
              <tr>
                <td>Volume discount</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>Starting at 10 users</td>
                <td>Custom pricing</td>
              </tr>
              <tr>
                <td>Support</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>Contact Form</td>
                <td>Dedicated Account Manager</td>
              </tr>
              <tr>
                <td>Add-free service</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td colum="3">Devices</td>
              </tr>
              <tr>
                <td>Web</td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td>Desktop</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td colum="3">E-signature</td>
              </tr>
              <tr>
                <td>Simple Electronic Signatures </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td>Signatures Requests</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td>Digital Signatures</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>5 / month included Customizable volume</td>
                <td>Customizable volume</td>
              </tr>
              <tr>
                <td>Customized certificate</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td>Personalized branding</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td>Audit Trail</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td>Signed document custody</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td colum="3">Security</td>
              </tr>
              <tr>
                <td>Secure connection Https</td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td>ISO27001 certified</td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td>Dedicated hardware</td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>
                  <i className="bx bx-x"></i>
                </td>
                <td>
                  <i className="bx bx-check"></i>
                </td>
              </tr>
              <tr>
                <td></td>
                <td> <button>Get started</button></td>
                <td><button>Go Premium</button></td>
                <td><button>Contact</button></td>
              </tr>
            </table>
          </div>
        </div>
        <div className="container-four">
          <h1>Frequently Asked Questions</h1>
          <p className="parag">Our support team answers these questions almost daily</p>
          <div>
            {array.map((value) => {
              return (
                <ArrayMao
                  key={value.id}
                  array={value}
                  isCompleted={completedArray}
                />
              );
            })}
          </div>
        </div>
      </div>
    
  );
}

export default Pricing;
