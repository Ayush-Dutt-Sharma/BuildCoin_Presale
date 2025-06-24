import React from "react";

const About = () => {
  return (
    <section id="about" className="about pos-rel pb-140">
      <div className="container">
        <div className="row align-items-center mt-none-30">
          <div className="col-lg-6 mt-30">
            <div className="about__img pos-rel wow fadeInLeft">
              <img src="assets/img/about/about_img.png" alt="About ICO" />
              <div className="about__shape">
                <img src="assets/img/shape/about_shape.png" alt="ICO Shape" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-30">
            <div className="about__content wow fadeInRight" data-wow-delay="100ms">
              <div className="sec-title mb-35">
                <h5 className="sec-title__subtitle">WHAT IS ICO CRYPTO</h5>
                <h2 className="sec-title__title mb-25">
                  Understanding ICOs and their Role in the Crypto Ecosystem
                </h2>
                <p>
                  ICOs (Initial Coin Offerings) are fundraising mechanisms for
                  blockchain-based projects. Similar to an IPO (Initial Public
                  Offering) in the stock market, ICOs allow new projects to raise
                  capital by issuing their native cryptocurrency tokens. These
                  tokens can be used within the project or traded on cryptocurrency
                  exchanges.
                </p>
              </div>

              <ul className="about__list ul_li">
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="Arrow Icon" />
                  Decentralized Platform for Transparent Transactions
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="Arrow Icon" />
                  Rewards Mechanism to Incentivize Participation
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="Arrow Icon" />
                  Crowd Wisdom: Harnessing Collective Intelligence
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="Arrow Icon" />
                  Investor Protection through Clear Regulatory Compliance
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="Arrow Icon" />
                  Multiple Token Sale Phases for Strategic Growth
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="Arrow Icon" />
                  Exchange Listings for Liquidity and Market Access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="about__sec-shape">
        <img src="assets/img/shape/s_shape_2.png" alt="About Shape" />
      </div>
    </section>
  );
};

export default About;
