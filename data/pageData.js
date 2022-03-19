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
  screenScroller: [Screen1, Screen2, Screen3, Screen4, Screen5],
  navText: [
    { text: "Home", link: "/" },
    { text: "FAQs", link: "/" },
    { text: "Blog", link: "/" },
  ],
  slides: [
    "Real-Time Trading",

    "Fractional Investing",

    "Full Extended Hours Trading",

    "Local Deposit Methods",

    "Stocks & ETFs",
    "Latest News",
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
      name: `Tobechukwu`,
      title: `Investment Banker at GTBank `,
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
        { text: "Privacy Policy", link: "/policy" },
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
        {
          icon: linkedin,
          alt: "treegar-linkedin-link",
          link: "https://www.linkedin.com/company/treegar/",
        },
        {
          icon: instagram,
          alt: "treegar-instagram-link",
          link: "https://www.instagram.com/tradetreegar/",
        },
        {
          icon: twitter,
          alt: "treegar-twitter-link",
          link: "https://twitter.com/TradeOnTreegar",
        },
      ],
    },
  },
  privacyPolicy: {
    headerText: `Privacy Policy`,
    policyText: [
      `This Privacy Policy (“Policy”) describes how Treegar Integrated Services Limited, Inc. (“Treegar Limited”, “we,” or “us”), our networks and other Services provided by us and our website, https://www.Treegar.com, and related websites (the “Service”) use and collect personal data.`,
      `
    This Policy describes the information we collect from you, how we use and disclose such information, and how we protect such information.`,
      `
    ​Treegar Integrated Services Limited respects your privacy rights and is committed to transparency in how we collect, use and share your personal information.`,
      `
    ​Treegar Integrated Services Limited is the controller of your personal information covered by this Privacy Policy for purposes of the NDPR and you can contact us using the contact details listed below.`,
      `
    ​Our partners are the controller of personal information linked to them and should be contacted regarding any such personal information.`,
      `
    ​References to “personal information” in this Privacy Policy are equivalent to “personal data” governed by the Nigeria Data Protection Regulation (“NDPR”).`,
      `
    ​If you have any questions or concerns about your personal information or this Privacy Policy, email us at privacy@treegar.com`,
    ],

    customerData: {
      headerText: `Customer Data`,
      text: [
        `
      Customers of Treegar Integrated Services Limited Service (“Customers”) use the Service in buying and selling Nigeria and US stocks.`,
        `Customer personal data may include, without limitation, information about the identity of customers (such as name, e-mail address, IP address, phone number, BVN, fingerprints, driver’s license info, NIN info, Nationality, DOB, gender, address, payment info etc.), as well as any other personal information as may be determined necessary. 
      `,
      ],
    },

    personData: {
      headerText: `
      Personal Information We Collect`,
      text: `
      We collect personal information about users of our Service and our Website in the following ways:`,
      sub: [
        {
          header: `
          a. Information you give us`,
          text: [
            `
          Personal information you may provide through the Service or otherwise communicate with us includes:`,
            `Identity information, such as your first name, last name and username or similar identifier;`,
            `
          Contact information, such as your postal address, email address and telephone number;`,
            `Profile information, such as your username and password and preferences;
          `,
            `Feedback and correspondence, such as when you respond to surveys, report a problem with the Service, receive customer support or otherwise correspond with us;`,
            `
          Payment information, such as your credit card or other payment card information required for billing purposes;`,
            `Transaction and usage information, such as how you use the Service and billing details;`,
            `Marketing information, such as your preferences for receiving marketing communications and details about how you engage with such communications.
          `,
          ],
        },
        {
          header: `
          b. Information automatically collected`,
          text: `Our systems may automatically record certain information about your use of the Service, such as your Internet Protocol (IP) address, the pages or features of the Service you viewed, the frequency with which you use the Service, the links you click on or use, and other statistics. We collect this information in server logs and by using cookies and similar tracking technologies to analyze trends, administer the website, gather demographic information about our user in aggregate and deliver advertising.`,
        },
      ],
    },

    personalInfo: {
      header: `
      Changes to your personal information`,
      text: `If your personal information changes during your relationship with us, you may update your information by updating your account profile or emailing us at privacy@treegar.com.`,
    },

    usePersonalInfo: {
      header: `
      How We Use Your Personal Information`,
      subText: `
      We use your personal information for the following purposes:`,
      sub: [
        {
          header: `
          a. To provide the Service`,
          text: `If you have an Treegar Integrated Services Limited account, we may use your personal information to operate, maintain, administer and improve the Service, to communicate with you regarding your account by sending you Service announcements, security alerts and administrative messages. We may also use your personal information to communicate with you regarding service-related questions and feedback and to better understand your needs and experience with the Service.`,
        },
        {
          header: `
          b. For security, compliance, fraud prevention and safety`,
          text: `We may use your personal information as we believe appropriate to (a) investigate or prevent violation of the law or our Terms of Service; (b) secure the Service; (c) protect our, your or others’ rights, privacy, safety or property; and (d) protect, investigate and deter against fraudulent, harmful, unauthorized, unethical or illegal activity.`,
        },
        {
          header: `
          c. For compliance with law`,
          text: `We may use your personal information as we believe appropriate to (a) comply with applicable laws, lawful requests and legal processes, such as to respond to subpoenas or requests from government authorities; (b) where permitted by law in connection with a legal investigation; and (c) to prosecute or defend legal claims.`,
        },
        {
          header: `
          d. To create anonymous data`,
          text: `We may create anonymous and aggregate data from our Clients’ personal information. We may use this anonymous data and share it with third parties for our business purposes or to enable monitoring of the service to ensure availability and performance measures of the Service are met.`,
        },
        {
          header: `
          e. To send you marketing communications`,
          text: `If you request information from us, use the Service or participate in our surveys or events, we may send you Treegar Integrated Services Limited marketing communications but will provide you with the ability to opt-out or unsubscribe from such communications. In some cases, we may ask for your consent to collect, use or share your personal information, such as when you let us post your testimonials or endorsements regarding the Service. If you gave us consent to post a testimonial to our site, but wish to update or delete it, please contact us at privacy@treegar.com.
          `,
        },
      ],
    },
    sharePersonalInfo: {
      header: `How We Share your Personal Information`,
      text: [
        `We do not share or sell the personal information you provide us with other organizations without your consent, except as described in this Privacy Policy. We may disclose personal information to third parties under the following circumstances:
      `,
        `a. Service Providers. We may employ third party companies and individuals to administer and provide the Service on our behalf (such as customer support, hosting, website analytic and email delivery). These third parties are permitted to use your personal information only to perform these tasks in a manner consistent with this Privacy Policy and are obligated not to disclose or use it for any other purpose.`,
        `b. Payment processors. We may share your payment information to process your payments.`,
        `c. Professional advisors. We may disclose your personal information to professional advisors, such as lawyers, bankers, auditors and insurers, where necessary in the course of the professional Service they render to us.`,
        `d. Compliance with Laws and Law Enforcement; Protection and Safety. We may disclose your personal information as we believe appropriate to government or law enforcement officials or private parties (a) for the security, compliance, fraud prevention and safety purposes described above; (b) as required by law, lawful requests or legal process, such as to respond to subpoenas or requests from government authorities; (c) where permitted by law in connection with any legal investigation; and (d) to prosecute or defend legal claims.`,
        `e. Business Transfers. We may sell, transfer or otherwise share some or all of our business or assets, including your personal information, in connection with a business deal (or potential business deal) such as a merger, consolidation, acquisition, reorganization or sale of assets, or in the event of bankruptcy, in which case we will make reasonable efforts to require the recipient to honor this Privacy Policy.`,
      ],
    },

    yourChoices: {
      header: `Your Choices`,
      sub: [
        {
          header: `a. Access, Update, Correct or Delete Your Information`,
          text: `All Treegar Integrated Services Limited account owners may review, update, correct or delete the personal information in their registration profile by logging into their account or by contacting privacy@Treegar.com. However, certain personal information must require the attention of Treegar Integrated Services Limited before they are deleted such as BVN as they will affect our ability to provide the service.`,
        },
        {
          header: `
          b. Access to Data Controlled by our Clients`,
          text: `Treegar Integrated Services Limited has no direct relationship with the individuals whose personal information may be contained within the Client Service Data. An individual who seeks to access, correct or delete personal information provided by our Clients should direct their request to the Client.`,
        },
        {
          header: `
          c. Marketing communications
          `,
          text: `You may opt out of marketing-related emails by following the opt-out prompt in the email. You will continue to receive other non-marketing emails such as Service notifications.`,
        },
      ],
    },
    trackingAdvert: {
      header: `Tracking and Targeted Advertising`,
      text: `We may allow service providers and other third parties to use cookies and other tracking technologies to track your browsing activity over time and across the Service and third-party websites. For example, we may partner with third party advertisers to display advertising on the Site or manage our advertising on other sites. These advertisers may also provide you targeted ads based upon your interests on third-party sites.
      `,
    },
    socialMedia: {
      header: `Social Media Widgets`,
      text: `Our Service may include social media features, such as the Facebook “like” button and widgets, such as the “share this” button. These features may collect your personal information and track your use of the Service. These social media features are either hosted by a third party or hosted directly in the Service. Your interactions with these features are governed by the privacy policy of the company providing such functionality.

      `,
    },
    paymentInfo: {
      header: `
      Payment Information`,
      text: `Any payment card information you use to make a purchase on the Service is collected and processed directly by our payment processor, Flutterwave Limited and we never receive or store your full payment card information. Flutterwave may use your Payment Information in accordance with its own privacy policy here: Privacy Policy - Flutterwave

      `,
    },
    security: {
      header: `Security`,
      text: `
      We use certain administrative and technical controls designed to improve the confidentiality, integrity and security of information we collect and maintain. No security measures are perfect or impenetrable and we cannot and do not guarantee that information about you will not be accessed, viewed, disclosed, altered, or destroyed by breach of any of our administrative or technical controls.

      `,
    },
    thirdParty: {
      header: `
      Third Party Sites and Service`,
      text: `The Service may contain links to other websites and services operated by third parties, such as social media platforms, advertising services and other websites and applications. These links are not an endorsement of, or representation that we are affiliated with, any third party. We do not control third party websites, applications or services, and are not responsible for their actions. Other websites and services follow different rules regarding their collection, use and disclosure of your personal information. We encourage you to read their privacy policies to learn more.
      `,
    },
    childrenPrivacy: {
      header: `
      Children’s Privacy`,
      text: `The Treegar Integrated Services Limited website is a general audience site. Treegar Integrated Services Limited does not knowingly acquire or receive personal information from, children under the age of 16. If we learn any user of the Service is under the age of 16, we will take appropriate steps to delete the individual’s personal information and restrict the individual from future access to the Service.

      `,
    },
    changePolicy: {
      header: `
      Changes to this Privacy Policy`,
      text: [
        `
      We reserve the right to modify this Policy at any time. We encourage you to periodically review this page for the latest information on our privacy practices. If we make changes to this Policy which materially change your rights or obligations, we will make reasonable efforts to notify you of the change. For example, we may send a message to your email address, if we have one on file, or generate a pop-up or similar notification when you access the Service for the first time after such material changes are made.`,
        `  
      Any modifications to this Policy will be effective upon our posting of the new terms. Your continued use of the Service after the revised Policy has become effective indicates you have read, understood and agreed to the current version of this Policy.
      `,
      ],
    },
    lawfulBases: {
      header: `
      Lawful Bases`,
      text: [
        `
      The lawful basis for our processing activities include processing personal information as necessary to comply with our contractual obligations to provide the Service, compliance with our legal obligations, protecting the safety of our employees, and other users, for our legitimate business interests, compliance with legal obligations, and pursuant to your consent. The particular legal basis for the processing of your personal information is based on the purpose for which such information was provided or collected.`,
        `
      a. Performance of Contract: We use your personal information as necessary for the performance of contracts, to provide the Service, or in order for us to take steps, at your request, prior to entering into a contract, such as requesting information regarding your company and its needs and requirements. For example, we are not able to provide our Service unless you provide us with certain necessary personal information, such as BVN and contact information to set up and communicate with you about your account, and payment information in order to process payments for the Service.`,
        `
      b. Legitimate Interest: We rely on our legitimate interest to process your personal information for marketing and advertising purposes or to otherwise inform you of our business operations, to improve our products and Service, for security, compliance, fraud prevention and safety, to comply with law or legal process and for business transfers.`,
        `  C. Consent: We may also process your personal information if we have received your consent. Please note that if we rely on consent, you may withdraw your consent at any time, but such withdrawal will not affect the lawfulness of the processing prior to the withdrawal.

      `,
      ],
    },
    accessRight: {
      header: `Data Subject Access Rights`,
      subText: `Data Subjects of Nigeria decent  have the following rights:`,
      sub: [
        {
          header: `a. Rights to Access, Correction and Erasure Requests:`,
          sub: `You have the right to:`,
          text: [
            ` 
          Contact us to confirm whether we are processing your personal information;`,
            `
          
          Receive information on how your personal information is processed;`,
            `        Obtain a copy of your personal information;`,
            ` Request that we update or correct your personal information; and`,
            `Request that we delete personal information in certain circumstances.`,
          ],
        },
        {
          header: `b. Right to Object to Processing:`,
          text: [
            ` 
          You have the right to request that Treegar Integrated Services Limited cease processing of your personal information:`,
            `for marketing activities, including profiling for statistical purposes where such processing is based on our legitimate business interests, unless we are able to demonstrate a compelling legitimate basis for such processing or we need to process your personal information for the establishment, exercise or defense of a legal claim.`,
          ],
        },
        {
          header: `c. Right to Restrict Processing:`,
          text: [
            ` 
          You have the right to request that Treegar Integrated Services Limited limit the processing of your personal information:`,
            `While we are evaluating or in the process of responding to a request by you to update or correct your personal information;`,
            `Where such processing is unlawful, and you do not want your personal information to be deleted;`,
            `Where we no longer require such data, but you want us to retain the data for the establishment, exercise or defense of a legal claim; and`,
            `Where you have submitted an objection to processing based on our legitimate business interests, pending our response to such request.`,
          ],
        },
        {
          header: `d. Data Portability Requests`,
          text: [
            `You have the right to request that we provide you or a third party that you designate with certain of your personal information in a commonly used, machine readable format. Please note, however, that data portability rights apply only to personal information that we have obtained directly from you and only where our processing is based on consent or the performance of a contract.`,
          ],
        },
        {
          header: `e. Submitting Requests:`,
          text: [
            `You can exercise these rights by logging into your account or by contacting privacy@treegar.com. Please note, however, that certain personal information may be exempt from such rights pursuant to applicable data protection laws. In addition, we will not respond to any request unless we are able to appropriately verify the requester’s identity. In addition, if we consider that a request is manifestly unfounded or excessive, we may either request a reasonable fee to deal with the request or refuse to deal with the request.`,
            ` If you have concerns about our data practices or the exercise of your rights, you may contact us at privacy@treegar.com or National Information Technology Development Agency our supervisory body.`,
          ],
        },
      ],
    },
    retention: {
      header: `Retention`,
      text: [
        `We will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.`,
        `To determine the appropriate retention period for personal information, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure of your personal information, the purposes for which we process your personal information and whether we can achieve those purposes through other means, and the applicable legal requirements.
      `,
      ],
    },
    crossBorder: {
      header: `Cross-Border Data Transfer`,
      text: `If we transfer your personal information out of Nigeria and are required to apply additional safeguards to your personal information under Nigeria Data Protection legislation, we will do so. Such safeguards may include applying model contracts for the transfer of personal data to third countries described here, or for transfers to third parties outside the country.`,
    },
    contactUs: {
      header: `Contact Us`,
      sub: `If you have any questions or concerns about our Privacy Policy, please contact us.`,
      text: [
        `Treegar Integrated Services Limited`,
        `1 Montgomery Road, Yaba Lagos`,
        `Attention: Data Protection Officer`,
        `Email: support@treegar.com`,
      ],
    },
  },
}

export default pageData
