import Logo from "../components/shared/Logo"
import instagram from "../public/assets/icon-instagram.svg"
import twitter from "../public/assets/icon-twitter.svg"
import linkedin from "../public/assets/icon-linkedin.svg"
import tesla from "../public/assets/icon-tesla.svg"
import netflix from "../public/assets/icon-netflix.svg"
import nike from "../public/assets/icon-nike.svg"
import google from "../public/assets/icon-google.svg"
import amazon from "../public/assets/icon-amazon.svg"
import microsoft from "../public/assets/icon-microsoft.svg"
import meta from "../public/assets/icon-meta.svg"
import apple from "../public/assets/icon-apple.svg"
import Tesla from "../public/assets/Tesla.svg"
import Apple from "../public/assets/Apple.svg"
import Nike from "../public/assets/Nike.svg"
import Amazon from "../public/assets/Amazon.svg"
import Microsoft from "../public/assets/Microsoft.svg"
import Netflix from "../public/assets/Netflix.svg"
import Google from "../public/assets/Google.svg"
import Meta from "../public/assets/Meta.svg"
import Screen1 from "../public/assets/Screen-Scroller-1.png"
import Screen2 from "../public/assets/Screen-Scroller-2.png"
import Screen3 from "../public/assets/Screen-Scroller-3.png"
import Screen4 from "../public/assets/Screen-Scroller-4.png"
import Screen5 from "../public/assets/Screen-Scroller-5.png"

const pageData = {
  screenScroller: [ Screen1, Screen2, Screen3, Screen4, Screen5 ],
  navText: [
    { text: "Home", link: "/" },
    { text: "FAQs", link: "/" },
    { text: "Blog", link: "/" },
  ],

  aboutData: {
    headerText: `Who we are`,
    subHeader: `A Global Investment Platform for everyone`,
    text: `Treegar is a fintech platform that enable you to buy and sell local and U.S stocks directly from your mobile phone in real-time. 
    We want to further democratize access to both local and foreign financial markets. Our mission is to provide access to global financial markets in the most seamless and cost effective way possible to Africans.`,
    btnText: `Sign me up`,
  },
  investData: {
    headerText: `What if you invested in...`,
    year: [1, 2, 3, 4],
    brand: [
      {
        icon: [tesla, Tesla],
        percentages: [50.97, 1204.67, 1464.21, 1571.06],
      },
      {
        icon: [netflix, Netflix],
        percentages: [16.08, 89.44, 134.47, 216.87],
      },
      {
        icon: [nike, Nike],
        percentages: [17.62, 65.71, 125.29, 163.68],
      },
      {
        icon: [microsoft, Microsoft],
        percentages: [51.7, 114.53, 232.04, 292.76],
      },
      {
        icon: [apple, Apple],
        percentages: [32.44, 144.99, 348.07, 316.54],
      },
      {
        icon: [google, Google],
        percentages: [66.76, 116.88, 173.87, 174.47],
      },
      {
        icon: [meta, Meta],
        percentages: [23.66, 64.88, 150.17, 88.96],
      },
      {
        icon: [amazon, Amazon],
        percentages: [1.81, 81.02, 120.7, 182.01],
      },
    ],
  },
  testimonialData: [
    {
      name: `Adeyinka`,
      title: `Relationship Officer at Access Bank`,
      testimony: `Whenever I hear about the stock market, it always sounds uninteresting and complicated with a lot of paperwork - Treegar seems to simplify this. I’m happy to have been one of the early testers of the app.`,
    },
    {
      name: `Olasubomi`,
      title: `Student at Lagos Business School`,
      testimony: `I made my first investment on the treegar app, and it is incredible how seamless it is to invest in global companies from Nigeria. I think this is a tremendous opportunity, and many more people should be aware of it.`,
    },
    {
      name: `Bridget`,
      title: `Student at University of Lagos`,
      testimony: `When the treegar team approached me to test the app, my initial reaction was to show non-interest since I knew nothing about stock markets. I am happy I took the chance. I invested $5 in a company I love. I’ll watch it grow🤞`,
    },
    {
      name: `Bridget`,
      title: `Tobechukwu`,
      testimony: `I love the user interface of the treegar app and the ability to trade during extended hours. Kudos to the team for creating a beautiful app with amazing features.`,
    },
  ],
  featuresData: [
    {
      header: `Make solid investments 🚀`,
      text: `Invest in the world's leading companies and grow your wealth overtime. Start investing for your future today. `,
    },
    {
      header: `Invest safely globally  🔑`,
      text: `Our brokerage partners are regulated by SEC in Nigeria and the US. Your account is insured for up to USD 500,000.`,
    },
    {
      header: `Start with $1 💰`,
      text: `Can’t afford a share? Forget about it. You can now buy as little as 0.00001 shares with a minimum of $1.`,
    },
    {
      header: `We keep your data safe 🛡 `,
      text: `Your personal and investment data is secured using two-factor authentication (2FA) protection and encryption.`,
    },
  ],

  footerData: {
    company: {
      headerText: "Company",
      link: [
        { text: "Privacy Policy", link: "/" },
        { text: "FAQs", link: "/" },
        { text: "Blog", link: "/" },
      ],
    },
    contact: {
      headerText: "Contact",
      email: "support@treegar.com",
      phoneNo: "+2340000000000",
    },

    address: [
      {
        city: "Lagos",
        address: `9A, Oriwu Street, 
      Lekki Phase 1, Lagos`,
      },
      {
        city: "San Francisco",
        address: `643 Mission Street, 
      San Francisco, CA 94105`,
      },
    ],

    social: {
      headerText: "Social",
      icons: [
        { icon: linkedin, alt: "treegar-linkedin-link", link: "/" },
        { icon: instagram, alt: "treegar-instagram-link", link: "/" },
        { icon: twitter, alt: "treegar-twitter-link", link: "/" },
      ],
    },

    policy: [
      `Returns reflected are cumulative returns from December 31, 2021, December 31, 2020,	December 31, 2019,	December 31, 2018 and	December, 29, 2017 for 1 year, 2 years, 3 years & 4 years respectively.`,

      `Past performance is not an indicator of future outcomes.`,

      `Treegar does not provide investment advice and individual investors should make their own decisions or seek independent advice. The value of investments can go up as well as down and you may receive back less than your original investment. All investments involve risk, including the possible loss of capital. You may not get back what you have originally invested. The material provided herein is general in nature and does not take into account your objectives, financial situation or needs. Treegar is a technology platform, not a registered broker-dealer or investment adviser`,

      `Brokerage services for US-traded securities are provided by Alpaca Securities LLC. Alpaca is a regulated member of FINRA/SIPC, which protects securities customers of its members up to $500,000 (including $250,000 for claims for cash), per customer. Explanatory brochure can be found here: https://www.sipc.org/about-sipc/.`,

      `Nigerian account traded securities are provided by Apel Assets Limited, a SEC registered broker-dealer and member of the Nigerian Stock Exchange. Apel Assets does not make any personal recommendations to buy, sell or otherwise deal in investments. Investors make their own investment decisions. The services and securities provided by Apel Assets Limited may not be suitable for all customers and, if you have any doubts, you should seek advice from an independent financial adviser.`,

      `Trademarks and logos are the property of their respective owners and do not represent endorsements of any kind. Unless otherwise noted, Treegar and its affiliates are not partners, affiliates, or licensees of these companies.`,

      `Content, news, research, tools, market data and securities symbols are for educational and illustration purposes only and are not substitutes for professional advice. All information provided is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on this website, our Gotrade mobile application or our associated social media pages.`,
    ],
  },
}

export default pageData
