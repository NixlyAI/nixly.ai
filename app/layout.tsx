import { ReactNode } from 'react';
import Head from 'next/head';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Nixly.ai</title>
        <meta name="description" content="AI-powered tools to create professional video content quickly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}