import App from 'next/app';

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <div></div>
        <Component />
      </div>
    );
  }
}
