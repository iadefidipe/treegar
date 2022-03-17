import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charset='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
         
          <meta
            name='description'
            content='Treegar is a fintech platform that enable you to buy and sell local and U.S stocks directly from your mobile phone in real-time. '
          />
          <meta
            name='keyword'
            content='trading, fintech platform, financial markets ,investing'
          />
          {/* <!-- THEME COLOR FOR CHROME MOBILE BROWSERS --> */}

          <meta name='theme-color' content='#4CC800' />
          <meta name='twitter:card' content='summary' key='twcard' />
          <meta name='twitter:creator' content='designo' key='twhandle' />
          <meta
            property='og:url'
            content='https://treegar.com/'
            key='ogurl'
          />
          <meta
            property='og:image'
            content='https://treegar.com/preview.jpg'
            key='ogimage'
          />
          <meta property='og:site_name' content='designo' key='ogsitename' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <link rel='apple-touch-icon' href='/favicon.png' />
          <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
