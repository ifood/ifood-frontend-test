import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charset="UTF-8" />
          <meta name="theme-color" content="#5a4ded" />
          <meta
            name="description"
            content="spotifood - front-end test at ifood."
          />
          <meta name="author" content="Kevin Martin" />
          <style>{`
          * {
            margin: 0;
            padding: 0
          }
          body { font-family: roboto} `}</style>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
