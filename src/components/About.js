import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.about}>
      <img className={styles.bodyIcon} alt="" src="/body.svg" />
      <div className={styles.image}>
        <img className={styles.bodyIcon1} alt="" src="/body1.svg" />
        <img className={styles.image01Icon} alt="" src="/image-01@2x.png" />
        <img className={styles.image02Icon} alt="" src="/image-02@2x.png" />
        <div className={styles.image03}>
          <div className={styles.text}>
            <b className={styles.dailyAverage}>
              <p className={styles.daily}>Daily</p>
              <p className={styles.daily}>Average</p>
            </b>
            <img
              className={styles.textChild}
              alt=""
              src="/frame-1000000806@2x.png"
            />
          </div>
          <div className={styles.group}>
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
              <div className={styles.div2}>3</div>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.dParent}>
              <div className={styles.d}>d</div>
              <div className={styles.div3}>10</div>
              <div className={styles.rectangleDiv} />
            </div>
          </div>
        </div>
        <img className={styles.image04Icon} alt="" src="/image-041@2x.png" />
      </div>
      <form className={styles.textButton}>
        <button className={styles.button} autoFocus disabled>
          <div className={styles.analyzeNow}>About Us</div>
        </button>
        <div className={styles.chackMark}>
          <img className={styles.icon} alt="" src="/01.svg" />
          <img className={styles.icon1} alt="" src="/01.svg" />
          <img className={styles.icon2} alt="" src="/03.svg" />
          <div className={styles.variousAnalysisOptionsContainer}>
            <p className={styles.daily}>Various analysis options.</p>
            <p className={styles.daily}>
              Page Load (time, size, number of requests).
            </p>
            <p className={styles.daily}>Big data analysis.</p>
          </div>
        </div>
        <div className={styles.titel}>
          <input className={styles.body} type="text" />
          <h1 className={styles.weOfferRealContainer}>
            <p className={styles.daily}>We Offer Real Time</p>
            <p className={styles.daily}>Data Solutions</p>
          </h1>
          <div className={styles.over150kClient}>OVER 150K+ CLIENT</div>
          <h3 className={styles.excepteurSintOccaecatContainer}>
            <p className={styles.daily}>
              Excepteur sint occaecat cupidatat officia non proident
            </p>
            <p className={styles.daily}>sunt in culpa qui deserunt.!</p>
          </h3>
        </div>
      </form>
    </section>
  );
};

export default About;
