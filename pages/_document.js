import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  constructor(props) {
    super(props);
  }
  // static getInitialProps(ctx) {
  //   const initialProps = Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }
  render() {
    return <html>
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, user-scalable=no" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>;
  }
}
