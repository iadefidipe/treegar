import bgTree from "../public/assets/bg-pattern-tree.svg"
import bgBeast from "../public/assets/image-beast.png"
import bgBrand from "../public/assets/image-brands.png"

import bgBeastTwo from "../public/assets/image-beast-two.png"

const theme = {
  colors: {
    black: "#151515",
    bg: "#000",
    accent: "#4CC800",
    pryWhite: "#FFFFFF",
    secGrey: "#828282",
    secLightGrey: "#BDBDBD",
    secAccent: "#CBFFCA",
    shade: "#A7F9AF",
    tab: " rgba(199, 255, 165, 0.05)",
  },
  font: {
    redHat: `'Red Hat Text', sans-serif`,
  },
  weight: {
    regular: "400",
    mid: "500",
    semiBold: "600",
    bold: "700",
  },
  queries: {
    mobile: `${375 / 16}rem`,
    mobileL: `${425 / 16}rem`,
    mobileXL: `${545 / 16}rem`,
    tabletMid: `${660 / 16}rem`,
    tablet: `${768 / 16}rem`,
    deskMini: `${976 / 16}rem`,
    deskMid: `${1129 / 16}rem`,
    deskMed: `${1300 / 16}rem`,
  },
  bg: {
    bgTree,
    bgBeast,
    bgBrand,
    bgBeastTwo
  },
  bRadius: "15px",
  maxWidth: "1111px",
  genPad: "0 20px",
  center: "0 auto",
}

export default theme
