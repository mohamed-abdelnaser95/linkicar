import React from 'react'
import Navbarcom from './Navbar'
import Head from 'next/head'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>LinkiCar</title>
                <meta name="description" content="Linki clone website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbarcom />
            {children}
            <Footer />
        </div>
    )
}

export default Layout