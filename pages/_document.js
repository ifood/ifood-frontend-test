import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#cc2c51" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel='manifest' href='/manifest.json' />
                    <meta name="msapplication-TileColor" content="#ffc40d" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta name='application-name' content='Spotifood' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='Spotifood' />
                    <meta name="msobile-web-app-capable" content="yes" />
                    <meta name="description" content="Plataforma criada para um teste de frontend para o Ifood" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <link href="https://fonts.googleapis.com/css?family=Barlow:400,700|Poppins:400,700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
