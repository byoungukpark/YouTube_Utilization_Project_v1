import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Header from './Header'
import Footer from './Footer'

const MainStage = (props) => {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate='%s | Study with YouTube'
        defaultTitle='Study with YouTube'
        defer={false}
      >
        {props.title && <title>{props.title}</title>}
        <meta name='description' content='props.description'></meta>
      </Helmet>

      <div>
        <Header />
        <main id='main' role='main'>
          {props.children}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default MainStage
