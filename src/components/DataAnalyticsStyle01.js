import HeaderMask from "./HeaderMask";
import HeaderOverlayImage from "./HeaderOverlayImage";
import CardItemOne from "./CardItemOne";
import CardItem from "./CardItem";
import About from "./About";
import RecentWork from "./RecentWork";
import ServiceBodyAction from "./ServiceBodyAction";
import ServiceCard from "./ServiceCard";
import ServiceCardOne from "./ServiceCardOne";
import KeyBenefits from "./KeyBenefits";
import SellSection from "./SellSection";
import Pricing01 from "./Pricing01";
import SelectedPricing from "./SelectedPricing";
import Pricing03 from "./Pricing03";
import FooterLayout from "./FooterLayout";
import EmailBox from "./EmailBox";
import SocialIcon from "./SocialIcon";
import styles from "./DataAnalyticsStyle01.module.css";
import { useState } from "react";
import { Route, Router } from "react-router-dom";
import { Redirect } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
const DataAnalyticsStyle01 = () => {
  const [input , setInput] = useState('')
  const [getDemo , setGetDemo] = useState(false)
  // const history = useHistory();
  const handleInput = (e) => {
   
    if(e.target){
      console.log("dd" , e.target.value)
      setInput(e.target.value)
    }
    // setInput(e.target.valur)
  }

  const handleGetDemo = () => {
    setGetDemo(!getDemo)
    console.log("getDemo is clicked")
  }

  const handleAbout = (val) => {
    switch (val) {
      case 'Home':
        window.location.href = '/'
        break;
      case 'About':
        window.location.href = '/about'
        break;
      case 'Blog':
        console.log('Hump day! Halfway through the week.');
        break;
      // case 'Thursday':
      //   console.log('Almost there, one more day to go.');
      //   break;
      // case 'Friday':
      //   console.log('TGIF! Weekend is just around the corner.');
      //   break;
      default:
        console.log('It\'s the weekend or an unknown day.');
    }
  }
  return (
    <div className={styles.dataAnalyticsStyle01}>
      <section className={styles.header} Header>
        <HeaderMask />
        <img className={styles.elementsIcon} alt="" src="/elements@2x.png" />
        <div className={styles.image}>
          <div className={styles.topImage}>
            <div className={styles.image03}>
              <b className={styles.teamsStrength}>Teams Strength</b>
              <div className={styles.graph}>
                <div className={styles.aParent}>
                  <div className={styles.a}>a</div>
                  <div className={styles.div}>1</div>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.bParent}>
                  <div className={styles.b}>b</div>
                  <div className={styles.div1}>5</div>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.cParent}>
                  <div className={styles.c}>c</div>
                  <div className={styles.div1}>3</div>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.dParent}>
                  <div className={styles.d}>d</div>
                  <div className={styles.div3}>10</div>
                  <div className={styles.rectangleDiv} />
                </div>
              </div>
            </div>
            <div className={styles.image02}>
              <div className={styles.maskGroup}>
                {/* <img
                  className={styles.image28Icon}
                  alt=""
                  src="/image-28@2x.png"
                /> */}
                <div className={styles.frameParent}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.ellipseParent}>
                      <div className={styles.ellipseDiv} />
                      <div className={styles.projects}>7 Projects</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.ellipseParent}>
                      <div className={styles.frameChild1} />
                      <div className={styles.projects}>5 Projects</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.image02Child}
                alt=""
                src="/group-1000000831.svg"
              />
              <img
                className={styles.image02Item}
                alt=""
                src="/group-1000000830.svg"
              />
              <b className={styles.dataAnalytics}>Data Analytics</b>
            </div>
            <div className={styles.image01}>
              <div className={styles.frameGroup}>
                <div className={styles.ellipseContainer}>
                  <div className={styles.frameChild2} />
                  <div className={styles.achieved}>Achieved</div>
                </div>
                <div className={styles.ellipseContainer}>
                  <div className={styles.frameChild3} />
                  <div className={styles.achieved}>Target</div>
                </div>
              </div>
              <b className={styles.projectDeliveries}>Project Deliveries</b>
              <div className={styles.parent}>
                <div className={styles.benjaminEvalent}>6</div>
                <div className={styles.benjaminEvalent}>4</div>
                <div className={styles.benjaminEvalent}>2</div>
                <div className={styles.benjaminEvalent}>0</div>
              </div>
              <img
                className={styles.horizontalLinesIcon}
                alt=""
                src="/horizontal-lines.svg"
              />
              <nav className={styles.oct2021Parent}>
                <div className={styles.benjaminEvalent}>Oct 2021</div>
                <div className={styles.benjaminEvalent}>Nov 2021</div>
                <div className={styles.benjaminEvalent}>Dec 2021</div>
                <div className={styles.benjaminEvalent}>Jan 2022</div>
                <div className={styles.benjaminEvalent}>Feb 2022</div>
              </nav>
              <img
                className={styles.image01Child}
                alt=""
                src="/vector-20.svg"
              />
              <img className={styles.image01Item} alt="" src="/vector-18.svg" />
              <div className={styles.dot} />
              <div className={styles.unionParent}>
                <img className={styles.unionIcon} alt="" src="/union.svg" />
                <div className={styles.frameParent1}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.ellipseParent}>
                      <div className={styles.ellipseDiv} />
                      <div className={styles.projects}>7 Projects</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.ellipseParent}>
                      <div className={styles.frameChild1} />
                      <div className={styles.projects}>5 Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.image04Icon} alt="" src="/image-04@2x.png" />
          </div>
          {/* <HeaderOverlayImage /> */}
        </div>
        <div className={styles.emailBox}>
          <img className={styles.smsIcon} alt="" src="/sms.svg" />
          <button className={styles.button} style = {{zIndex : 4}} disabled = {false} onClick = {handleGetDemo}>
            <div className={styles.analyzeNow}>Get A Demo</div>
          </button>
          <input className={styles.businessEmailAdress} style = {{cursor: 'text'}}  value = {input} disabled = {false} onChange = {(e)=>handleInput(e)} placeholder = 'Business email adress'>
            {/* Business email adress */}
          </input>
        </div>
        <div className={styles.titel}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <h1 className={styles.theLeadingCustomerContainer}>
            <p className={styles.theLeadingCustomer}>The Leading Customer</p>
            <p className={styles.theLeadingCustomer}>Data Platform</p>
          </h1>
          <div className={styles.weAreNot}>
            We are not going to save your data
          </div>
        </div>
        <div className={styles.navBer}>
          <div className={styles.line} />
          <div className={styles.logo}>
            <img className={styles.shapeIcon} alt="" src="/shape.svg" />
            <h1 className={styles.logo1}>Softec</h1>
          </div>
          <div className={styles.homePagesBlog} >
            <div style = {{ paddingRight: '10px' ,  paddingLeft: '10px' , zIndex : '5'}}  onClick = {()=>handleAbout('Home')}>Home</div>
            <div style = {{ paddingRight: '10px' ,  paddingLeft: '10px' ,  zIndex : '5'}} onClick = {()=>handleAbout('About')}>About</div>
            <div style = {{ paddingRight: '10px' ,  paddingLeft: '10px' , zIndex : '5'}}  onClick = {()=>handleAbout('Blog')}>Blog</div>
            <div style = {{ paddingRight: '10px' ,  paddingLeft: '10px' , zIndex : '5'}}  onClick = {()=>handleAbout('Projects')}>Projects</div>
            <div style = {{ paddingRight: '10px' ,  paddingLeft: '10px' , zIndex : '5'}}  onClick = {()=>handleAbout('Contact')}>Contact</div>
          </div>
          <img className={styles.searchIcon} alt="" src="/search-icon.svg" />
          <div className={styles.login}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.analyzeNow1}>Log In</div>
          </div>
          <button className={styles.button1} autoFocus disabled>
            <div className={styles.analyzeNow2}>Get Started</div>
          </button>
        </div>
        {/* <div className={styles.topBer}>
          <div className={styles.offerIsGoingContainer}>
            <span className={styles.offer}>
              <span className={styles.mo}>Offer</span>
            </span>
            <span>
              <span className={styles.offer}>{` `}</span>
              <span>is going on till Friday</span>
              <span className={styles.offer}>{`, `}</span>
            </span>
            <span className={styles.mo}>$2.99/mo.</span>
          </div>
          <div className={styles.getSupport806Container}>
            <span>Get Support:</span>
            <span className={styles.offer}> +806 (000) 888 99</span>
          </div>
          <img className={styles.buttonIcon} alt="" src="/button.svg" />
        </div> */}
      </section>
      <section className={styles.features}>
        <img className={styles.bodyIcon} alt="" src="/-body@2x.png" />
        <CardItemOne
          item03Left="386px"
          button="/button1.svg"
          icon="/icon1.svg"
          iconHeight="15.63%"
          iconBottom="68.75%"
          collaborationAcross="A Unified View of The"
          allAreas="Customer"
          showButtonIcon
        />
        <CardItem />
        <CardItemOne
          button="/button3.svg"
          icon="/icon3.svg"
          collaborationAcross="Collaboration Across"
          allAreas="All Areas"
          showButtonIcon
        />
        <div className={styles.titel1}>
          <h1 className={styles.ourExcitingFeatures}>Our Exciting Features</h1>
          <div className={styles.moreThan15000}>
            More than 15,000 companies trust and choose Itech
          </div>
        </div>
      </section>
      <About />
      <section className={styles.recentWork}>
        <div className={styles.background} />
        <div className={styles.line1}>
          <div className={styles.line02} />
        </div>
        <div className={styles.div8}>
          <div className={styles.child} />
          <div className={styles.lineParent}>
            <div className={styles.line2} />
            <img className={styles.buttonIcon1} alt="" src="/button4.svg" />
            <img className={styles.logoIcon} alt="" src="/logo.svg" />
            <h1 className={styles.muckupDesign}>Muckup Design</h1>
            <div className={styles.excepteurSintOccaecatContainer}>
              <p className={styles.theLeadingCustomer}>
                Excepteur sint occaecat cupidatat officia non
              </p>
              <p className={styles.theLeadingCustomer}>
                proident, sunt in culpa qui deserunt mollit anim
              </p>
              <p className={styles.theLeadingCustomer}>id est laborum.</p>
            </div>
            <div className={styles.clientNameGustavContainer}>
              <p className={styles.theLeadingCustomer}>Client Name</p>
              <p className={styles.gustavPurpleson}>Gustav Purpleson</p>
            </div>
            <div className={styles.budget160Container}>
              <p className={styles.theLeadingCustomer}>Budget</p>
              <p className={styles.gustavPurpleson}>$160 - $200</p>
            </div>
          </div>
        </div>
        <div className={styles.div9}>
          <RecentWork />
          <div className={styles.line3} />
          <img className={styles.buttonIcon2} alt="" src="/button5.svg" />
          <img className={styles.logoIcon1} alt="" src="/logo1.svg" />
          <div className={styles.clientNamePhillipContainer}>
            <p className={styles.theLeadingCustomer}>Client Name</p>
            <p className={styles.gustavPurpleson}>Phillip Anthropy</p>
          </div>
          <div className={styles.budget200250k}>
            <p className={styles.theLeadingCustomer}>Budget</p>
            <p className={styles.gustavPurpleson}>$200-250k</p>
          </div>
          <div className={styles.excepteurSintOccaecatContainer1}>
            <p className={styles.theLeadingCustomer}>
              Excepteur sint occaecat cupidatat officia non
            </p>
            <p className={styles.theLeadingCustomer}>
              proident, sunt in culpa qui deserunt mollit anim
            </p>
            <p className={styles.theLeadingCustomer}>id est laborum.</p>
          </div>
          <h1 className={styles.dDesign}>3d Design</h1>
        </div>
        <div className={styles.div10}>
          <div className={styles.item} />
          <div className={styles.inner} />
          <div className={styles.image19Parent}>
            <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
            <div className={styles.excepteurSintOccaecatContainer2}>
              <p className={styles.theLeadingCustomer}>
                Excepteur sint occaecat cupidatat officia non
              </p>
              <p className={styles.theLeadingCustomer}>
                proident, sunt in culpa qui deserunt mollit anim
              </p>
              <p className={styles.theLeadingCustomer}>id est laborum.</p>
            </div>
            <div className={styles.clientNameDouglasContainer}>
              <p className={styles.theLeadingCustomer}>Client Name</p>
              <p className={styles.gustavPurpleson}>Douglas Lyphe</p>
            </div>
            <div className={styles.budget250Container}>
              <p className={styles.theLeadingCustomer}>Budget</p>
              <p className={styles.gustavPurpleson}>$250 - $300</p>
            </div>
            <div className={styles.frameChild6} />
            <img className={styles.buttonIcon3} alt="" src="/button6.svg" />
            <h1 className={styles.appDesign}>App Design</h1>
          </div>
        </div>
        <h1 className={styles.checkSomeOfContainer}>
          <p className={styles.theLeadingCustomer}>Check Some</p>
          <p className={styles.theLeadingCustomer}>Of Our Recent Work.</p>
        </h1>
      </section>
      <section className={styles.services}>
        <div className={styles.callTaAction}>
          <ServiceBodyAction />
          <button className={styles.button2} autoFocus disabled>
            <div className={styles.analyzeNow3}>Work with Us</div>
          </button>
          <h1 className={styles.dataAnalysisToolsContainer}>
            <p className={styles.theLeadingCustomer}>Data Analysis</p>
            <p className={styles.theLeadingCustomer}>{`Tools & Methods`}</p>
          </h1>
          <div className={styles.loremIpsumIsContainer}>
            <p className={styles.theLeadingCustomer}>
              Lorem Ipsum is simply dummy text
            </p>
            <p className={styles.theLeadingCustomer}>of the printing</p>
          </div>
        </div>
        <ServiceCard
          item01Left="400px"
          item01BackgroundColor="unset"
          item01BoxShadow="unset"
          button="/button7.svg"
          icon="/icon4.svg"
          iconHeight="14.38%"
          iconBottom="70.31%"
          aIDataAnalysis="Business Intelligence"
          aIDataAnalysisColor="#01103d"
          item01Top="508px"
          iconWidth="9.99%"
          iconTop="15.31%"
          iconRight="78.12%"
        />
        <ServiceCardOne
          item03Top="508px"
          item03Left="0px"
          item03Padding="49px var(--padding-25xl) var(--padding-28xl)"
          speedometer="/icon5.svg"
          artificialIntelligence="Data Visualization"
          button="/button8.svg"
        />
        <ServiceCardOne
          speedometer="/speedometer.svg"
          artificialIntelligence="Artificial Intelligence"
          button="/button9.svg"
        />
        <ServiceCard
          item01Left="400px"
          item01BackgroundColor="#fff"
          item01BoxShadow="0px 20px 30px rgba(1, 6, 20, 0.1)"
          button="/button5.svg"
          icon="/edit2.svg"
          iconHeight="14.74%"
          iconBottom="69.64%"
          aIDataAnalysis="Machine Learning"
          aIDataAnalysisColor="#6865ff"
          item01Top="158px"
          iconWidth="12.43%"
          iconTop="15.63%"
          iconRight="75.68%"
        />
        <ServiceCard
          button="/button7.svg"
          icon="/icon6.svg"
          aIDataAnalysis="AI Data Analysis"
        />
        <div className={styles.titel2}>
          <h1 className={styles.exploreOurData}>Explore Our Data Services</h1>
          <div className={styles.moreThan150001}>
            More than 15,000 companies trust and choose Itech
          </div>
        </div>
      </section>
      {/* <div className={styles.testimoneal}>
        <img className={styles.logoIcon2} alt="" src="/logo2.svg" />
        <div className={styles.readCaseStudy}>
          <div className={styles.button3}>
            <div className={styles.analyzeNow4}>Read Case Study</div>
            <img className={styles.icon1} alt="" src="/icon7.svg" />
          </div>
          <div className={styles.increaseInOfflineContainer}>
            <p className={styles.theLeadingCustomer}>
              Increase in offline purchases
            </p>
            <p className={styles.theLeadingCustomer}>versus control group.</p>
          </div>
          <b className={styles.b1}>94%</b>
        </div>
        <div className={styles.testimoneal1}>
          <div className={styles.body} />
          <img className={styles.shapeIcon1} alt="" src="/shape1.svg" />
          <div className={styles.author}>
            <b className={styles.benjaminEvalent}>Benjamin Evalent</b>
            <div className={styles.wpDeveloper}>WP Developer</div>
          </div>
          <h1 className={styles.asOurBusiness}>
            “As our business grows, it has become increasingly important to
            understand how online spend influences offline behavior, which
            Facebook and Segment.”
          </h1>
        </div>
        <div className={styles.title}>
          <img className={styles.sterIcon} alt="" src="/ster.svg" />
          <h1 className={styles.wordFromOurContainer}>
            <span>{`Word From `}</span>
            <span className={styles.offer}>Our Client</span>
          </h1>
          <div className={styles.starsBasedOn}>
            5 Stars Based on 4,700+ Real Users Reviews
          </div>
        </div>
      </div> */}
      <KeyBenefits />
      <form className={styles.pricing}>
        <SellSection />
        <Pricing01 />
        <SelectedPricing />
        <Pricing03 />
        <div className={styles.svae35}>
          <img className={styles.bodyIcon1} alt="" src="/body5@2x.png" />
          <img className={styles.lineShapeIcon} alt="" src="/line-shape.svg" />
          <div className={styles.save35}>
            <p className={styles.theLeadingCustomer}>SAVE</p>
            <p className={styles.theLeadingCustomer}>35%</p>
          </div>
        </div>
        <div className={styles.switch}>
          <div className={styles.hover} />
          <b className={styles.monthly}>Monthly</b>
          <b className={styles.yearly}>Yearly</b>
        </div>
        <div className={styles.deliverEndToEndRetailBillParent}>
          <h1 className={styles.deliverEndToEndRetailContainer}>
            <p className={styles.theLeadingCustomer}>
              Deliver End-To-End Retail
            </p>
            <p className={styles.theLeadingCustomer}>{`Billing & Solutions`}</p>
          </h1>
          <div className={styles.chooseAPlan}>
            Choose a plan tailored to your needs
          </div>
        </div>
      </form>
      <footer className={styles.footer}>
        <FooterLayout />
        <div className={styles.emailBox1}>
          <div className={styles.getOurLatestsContainer}>
            <p className={styles.theLeadingCustomer}>Get Our Latest's News</p>
            <p className={styles.theLeadingCustomer}>{`& Updates`}</p>
          </div>
          <EmailBox />
        </div>
        <div className={styles.about}>
          <SocialIcon />
          <div className={styles.logo2}>
            <img className={styles.shapeIcon} alt="" src="/shape3.svg" />
            <h1 className={styles.logo1}>Softec</h1>
          </div>
          <div className={styles.ourHighlySkilledContainer}>
            <p className={styles.theLeadingCustomer}>
              Our highly skilled development teams
            </p>
            <p className={styles.theLeadingCustomer}>
              specialized in data analysis.
            </p>
          </div>
        </div>
        <div className={styles.whatWeDo}>
          <b className={styles.otherPages}>What We Do</b>
          <div className={styles.businessTechnologyOnlineContainer}>
            <p className={styles.theLeadingCustomer}>Business</p>
            <p className={styles.theLeadingCustomer}>Technology</p>
            <p className={styles.onlineMarketing}>Online Marketing</p>
            <p className={styles.theLeadingCustomer}>Advertising Strategy</p>
            <p className={styles.theLeadingCustomer}>Development</p>
          </div>
        </div>
        <div className={styles.innerPage}>
          <b className={styles.otherPages}>Other Pages</b>
          <div className={styles.aboutServicesHowContainer}>
            <p className={styles.theLeadingCustomer}>{`About `}</p>
            <p className={styles.theLeadingCustomer}>Services</p>
            <p className={styles.theLeadingCustomer}>How It Works</p>
            <p className={styles.theLeadingCustomer}>Pricing Plan</p>
            <p className={styles.theLeadingCustomer}>Blog</p>
            <p className={styles.theLeadingCustomer}>Contact</p>
          </div>
        </div>
        <div className={styles.contact1}>
          <b className={styles.contactUs}>Contact Us</b>
          <div className={styles.div11}>
            <img className={styles.groupIcon} alt="" src="/group-1.svg" />
            <div className={styles.benjaminEvalent}>
              <p className={styles.theLeadingCustomer}>
                1234 North Avenue Luke Lane,
              </p>
              <p className={styles.theLeadingCustomer}>{`South Bend, `}</p>
            </div>
          </div>
          <div className={styles.div12}>
            <img className={styles.child1} alt="" src="/group-1000000821.svg" />
            <div className={styles.div13}>+806 (000) 88 99</div>
          </div>
          <div className={styles.div14}>
            <img className={styles.child2} alt="" src="/group-2.svg" />
            <div className={styles.benjaminEvalent}>contact@info.com</div>
          </div>
        </div>
        <div className={styles.language}>
          <div className={styles.englishUs}>English (US)</div>
          <img
            className={styles.languageChild}
            alt=""
            src="/frame-1000000822.svg"
          />
        </div>
        <div className={styles.fullCopyrightContainer}>
          <span className={styles.mo}>
            <span>{`Full Copyright & Design By`}</span>
            <span className={styles.themePure}>{` `}</span>
          </span>
          <span className={styles.themePure}>
            <span className={styles.themePure1}>Theme pure</span>
          </span>
          <span className={styles.mo}>
            <span className={styles.span5}>{` `}</span>
            <span>– 2023</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default DataAnalyticsStyle01;
