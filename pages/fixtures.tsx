import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Fixtures: React.VFC = () => (
  <div>
    <Head>
      <title>Fixtures</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>Fixtures</div>
    <Link href={`fixtures/${'id'}`}>
      <div>
        <div>Manchester United</div>
        <div>Chelsea</div>
      </div>
    </Link>
  </div>
);

export default Fixtures;
