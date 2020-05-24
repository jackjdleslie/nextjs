import Head from "next/dist/next-server/lib/head";
import Layout from '../components/layout'
import Link from "next/link";
import Date from '../components/date'
import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
export default function SocialMedia({ }){
    return (
        <div className="social-media-container">

            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            {/*<a href="http://www.facebook.com/arianehine" target="_blank" className="fa fa-facebook"></a>*/}
            <a href="http://www.twitter.com/arianehine" target="_blank" className="fa fa-twitter"></a>
            <a href="http://www.linkedin.com/in/arianehine" target="_blank" className="fa fa-linkedin"></a>
            {/*<a href="http://www.youtube.com/arianehine" target="_blank" className="fa fa-youtube"></a>*/}
            {/*<a href="http://www.insagram.com/ariane.hine" target="_blank" className="fa fa-instagram"></a>*/}
            <a href="http://www.github.com/arianehine" target="_blank" className="fa fa-github"></a>
            <a href="https://www.etsy.com/shop/abagofsunshine" target="_blank" className="fa fa-etsy"></a>
        </div>



    )

}
