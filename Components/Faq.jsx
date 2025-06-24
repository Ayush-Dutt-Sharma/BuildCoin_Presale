import React from "react";

const Faq = () => {
  return (
    <section id="faq" className="faq pos-rel pt-140 pb-105">
      <div className="container">
        <div className="sec-title text-center mb-35">
          <h5 className="sec-title__subtitle">FAQ</h5>
          <h2 className="sec-title__title">Frequently asked questions</h2>
        </div>

        <div className="faq__wrap">
          <ul className="accordion_box clearfix">
            <li className="accordion block active-block">
              <div className="acc-btn">
                <span>QA: 01</span> What is an ICO and how does it work?
              </div>
              <div className="acc_body current">
                <div className="content">
                  <p>
                    An Initial Coin Offering (ICO) is a method for fundraising
                    in the cryptocurrency space. It involves issuing a new
                    cryptocurrency token to investors in exchange for their
                    investment, usually in the form of another cryptocurrency like
                    Bitcoin or Ethereum. ICOs are commonly used by blockchain-based
                    projects to raise capital for development.
                  </p>
                  <ul>
                    <li>ICO participants receive tokens in exchange for funds.</li>
                    <li>Tokens can represent equity or future access to a product.</li>
                    <li>Regulatory scrutiny varies by jurisdiction.</li>
                  </ul>

                  <p>
                    ICOs allow projects to raise funds quickly but also come with
                    risks, including scams or project failure. Therefore, it's
                    essential to conduct thorough research before participating.
                  </p>
                </div>
              </div>
            </li>
            <li className="accordion block">
              <div className="acc-btn">
                <span>QA: 02</span> How are tokens allocated in an ICO?
              </div>
              <div className="acc_body">
                <div className="content">
                  <p>
                    In an ICO, tokens are usually allocated in a predetermined
                    manner as outlined by the project team. Token allocation is
                    essential to understand for investors to assess the fairness and
                    legitimacy of the project.
                  </p>
                  <ul>
                    <li>A portion of the tokens is sold to the public.</li>
                    <li>Some tokens are allocated to the project's team and advisors.</li>
                    <li>There may be funds reserved for future development or partnerships.</li>
                  </ul>

                  <p>
                    Token allocation should be transparent, and projects often release
                    detailed breakdowns to show how funds will be used. This ensures
                    accountability and trust with potential investors.
                  </p>
                </div>
              </div>
            </li>
            <li className="accordion block">
              <div className="acc-btn">
                <span>QA: 03</span> What are the risks associated with ICO investments?
              </div>
              <div className="acc_body">
                <div className="content">
                  <p>
                    ICO investments carry various risks, including the possibility of
                    losing the entire investment. Unlike traditional securities, ICO
                    tokens may not be backed by tangible assets or regulated by
                    authorities.
                  </p>
                  <ul>
                    <li>Market volatility can impact token value significantly.</li>
                    <li>Scams or fraudulent projects may mislead investors.</li>
                    <li>Lack of regulation makes ICOs risky for unsophisticated investors.</li>
                  </ul>

                  <p>
                    It's essential to understand these risks before committing funds to
                    an ICO and to only invest what you're willing to lose. Conducting
                    due diligence and research on the team, whitepaper, and market
                    conditions is critical.
                  </p>
                </div>
              </div>
            </li>
            <li className="accordion block">
              <div className="acc-btn">
                <span>QA: 04</span> How do I participate in an ICO?
              </div>
              <div className="acc_body">
                <div className="content">
                  <p>
                    To participate in an ICO, you'll generally need to follow the
                    instructions provided by the project team, which typically involve
                    sending cryptocurrency (e.g., Bitcoin or Ethereum) to the project's
                    wallet in exchange for their token.
                  </p>
                  <ul>
                    <li>Create a digital wallet to store your ICO tokens.</li>
                    <li>Ensure the ICO is legitimate by researching the team and project.</li>
                    <li>Follow the ICO's official process and transfer funds.</li>
                  </ul>

                  <p>
                    After completing the transaction, you'll typically receive tokens
                    in your wallet, which may later be traded on exchanges or used in
                    the project's platform.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="faq__sec-shape">
        <div className="shape shape-1">
          <img src="assets/img/shape/s_shape1.png" alt="" />
        </div>
        <div className="shape shape-2">
          <img src="assets/img/shape/s_shape2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
