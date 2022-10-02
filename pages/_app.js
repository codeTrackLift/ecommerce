import React from 'react';
import { Toaster } from 'react-hot-toast';
import { StateContext } from '../context/StateContext';
import { Layout } from '../components';
import '../styles/banner.css'
import '../styles/cart.css'
import '../styles/footer.css'
import '../styles/hero.css'
import '../styles/global.css'
import '../styles/product.css'
import '../styles/success.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
