import '../styles/globals.scss';

import localFont from 'next/font/local';

const fontRaleway = localFont({
  src: [
    {
      path: './../assets/fonts/raleway/Raleway-Medium.woff2',
      weight: '400',
    },
    {
      path: './../assets/fonts/raleway/Raleway-Bold.woff2',
      weight: '500',
    },
  ],

  variable: '--aio-core-font-family-body',
  fallback: ['sans-serif'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ink. House</title>
        <link rel="shortcut icon" href="star.png" />
      </head>
      <body className={fontRaleway.variable}>{children}</body>
    </html>
  );
}
