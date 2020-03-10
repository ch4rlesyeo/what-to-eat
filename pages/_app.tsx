import NextApp from 'next/app';
import React from 'react';

import 'antd/dist/antd.css';

export default class extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
