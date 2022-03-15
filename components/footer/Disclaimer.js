import { FooterContact, ContactText } from "./Footer.style"
import Link from "next/link"

function Disclaimer() {
  return (
    <FooterContact>
      <ContactText>
        {" "}
        Returns reflected are cumulative returns from December 31, 2021,
        December 31, 2020, December 31, 2019, December 31, 2018 and December,
        29, 2017 for 1 year, 2 years, 3 years & 4 years respectively.{" "}
      </ContactText>
      <ContactText>
        {" "}
        Past performance is not an indicator of future outcomes.{" "}
      </ContactText>
      <ContactText>
        {" "}
        Treegar does not provide investment advice and individual investors
        should make their own decisions or seek independent advice. The value of
        investments can go up as well as down and you may receive back less than
        your original investment. All investments involve risk, including the
        possible loss of capital. You may not get back what you have originally
        invested. The material provided herein is general in nature and does not
        take into account your objectives, financial situation or needs. Treegar
        is a technology platform, not a registered broker-dealer or investment
        adviser{" "}
      </ContactText>
      <ContactText>
        {" "}
        Brokerage services for US-traded securities are provided by Alpaca
        Securities LLC. Alpaca is a regulated member of FINRA/SIPC, which
        protects securities customers of its members up to $500,000 (including
        $250,000 for claims for cash), per customer. Explanatory brochure can be
        found here:{" "}
        <Link href={"https://www.sipc.org/about-sipc/"} passHref >
          <span> https://www.sipc.org/about-sipc/</span>
        </Link>
        .
      </ContactText>
      <ContactText>
        {" "}
        Nigerian account traded securities are provided by Apel Assets Limited,
        a SEC registered broker-dealer and member of the Nigerian Stock
        Exchange. Apel Assets does not make any personal recommendations to buy,
        sell or otherwise deal in investments. Investors make their own
        investment decisions. The services and securities provided by Apel
        Assets Limited may not be suitable for all customers and, if you have
        any doubts, you should seek advice from an independent financial
        adviser.{" "}
      </ContactText>
      <ContactText>
        {" "}
        Content, news, research, tools, market data and securities symbols are
        for educational and illustration purposes only and are not substitutes
        for professional advice. All information provided is provided in good
        faith, however we make no representation or warranty of any kind,
        express or implied, regarding the accuracy, adequacy, validity,
        reliability, availability or completeness of any information on this
        website, our Gotrade mobile application or our associated social media
        pages.
      </ContactText>
    </FooterContact>
  )
}

export default Disclaimer
