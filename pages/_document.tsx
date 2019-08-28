import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/static/tachyons.min.css" />
        </Head>
        <body className="sans-serif">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
