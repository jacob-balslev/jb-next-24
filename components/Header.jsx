import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';


export function Dashboard() {
  return (
    <>
      <Script src="assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive"></Script>
  <Script src="./js/main.js" />
    </>
  )
}

const Header = () => {
 
  return (
    
    <div id="header-container" className="mx-auto px-10">
            <Head>
        <title>Jacob Balslev</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
  <meta name="image" property="og:image" content="https:/www.jacobbalslev.dk/img/intro.png" />
<meta property="og:image:secure_url" content="https:/www.jacobbalslev.dk/img/intro.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:alt" content="Hi, I'm Jacob. I like to make websites, apps, user experiences, interfaces, illustrations, infographics, posters, books, magazines and many other things." />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<Dashboard />
      </Head>
      <div className="header-inner">
    
          <Link href="/#projects" title="Projects" aria-label="Projects">

            <span className="header-links hvr-underline-from-left">Projects</span>

          </Link>
          <Link href="/#cv" title="Resume" aria-label="Resume">

            <span className="header-links hvr-underline-from-left">Resume</span>

          </Link>

      </div>
    </div>
  );
};

export default Header;
