import App from 'next/app';
import Link from 'next/link';

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <header className="bg-black-90 fixed top-0 w-100 ph3 pv1 pv1-ns ph4-m ph5-l">
          <nav className="f6 fw6 ttu tracked mw8 center">
            <a className="v-mid dib mid-gray link dim h3" href="/" title="Home">
              <img id="logo" src="/static/secret.png" onError={() => document.getElementById('logo').remove()} className="dib w3 v-mid mr3" />
            </a>
            <Link href="/">
              <a className="link dim white dib mr3 v-mid" title="Home">
                Home
              </a>
            </Link>
            <Link href="/flights">
              <a className="link dim white dib mr3 v-mid" title="Flights">
                Flights
              </a>
            </Link>
          </nav>
        </header>
        <div className="pt5 mw8 center">
          <Component {...pageProps} />
        </div>
      </div>
    );
  }
}
