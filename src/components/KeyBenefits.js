import styles from "./KeyBenefits.module.css";
const KeyBenefits = () => {
  return (
    <div className={styles.keyBenefits}>
      <div className={styles.rank}>
        <img className={styles.bodyIcon} alt="" src="/body3.svg" />
        <img className={styles.shapeIcon} alt="" src="/shape2.svg" />
        <div className={styles.item04}>
          <div className={styles.text}>
            <div className={styles.div}>#</div>
            <div className={styles.div1}>4</div>
            <div className={styles.shopifycom}>shopify.com</div>
            <div className={styles.mVisits}>386.6M Visits</div>
          </div>
          <img className={styles.logoIcon} alt="" src="/logo3.svg" />
        </div>
        <div className={styles.item02}>
          <div className={styles.text1}>
            <div className={styles.div2}>#</div>
            <div className={styles.div3}>2</div>
            <div className={styles.ebaycom}>ebay.com</div>
            <div className={styles.mVisits1}>700.2M Visits</div>
          </div>
          <div className={styles.logo}>
            <div className={styles.body} />
            <img className={styles.image26Icon} alt="" src="/image-26@2x.png" />
          </div>
        </div>
        <div className={styles.item01}>
          <div className={styles.body1} />
          <img className={styles.icon} alt="" src="/icon8.svg" />
          <div className={styles.logo1}>
            <div className={styles.body2} />
            <img
              className={styles.amazonIcon1}
              alt=""
              src="/amazon-icon-1@2x.png"
            />
          </div>
          <div className={styles.text2}>
            <div className={styles.div4}>#</div>
            <div className={styles.div5}>1</div>
            <div className={styles.shopifycom}>amazon.com</div>
            <div className={styles.bVisits}>2.4B Visits</div>
          </div>
        </div>
        <div className={styles.item03}>
          <div className={styles.text3}>
            <div className={styles.div6}>#</div>
            <div className={styles.div7}>3</div>
            <div className={styles.shopifycom}>walmart.com</div>
            <img
              className={styles.download1Icon}
              alt=""
              src="/download-1@2x.png"
            />
            <div className={styles.mVisits2}>386.6M Visits</div>
          </div>
          <div className={styles.body3} />
        </div>
      </div>
      <div className={styles.textButton}>
        <button className={styles.button} autoFocus disabled>
          <div className={styles.analyzeNow}>Explore More</div>
        </button>
        <div className={styles.line} />
        <h1 className={styles.getMoreSalesContainer}>
          <p className={styles.getMoreSales}>Get More Sales</p>
          <p className={styles.getMoreSales}>By Improving</p>
          <p className={styles.getMoreSales}>Results</p>
        </h1>
        <div className={styles.keyBenefits1}>Key Benefits</div>
      </div>
    </div>
  );
};

export default KeyBenefits;
