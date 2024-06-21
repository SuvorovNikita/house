import '@/styles/globals.scss';
import '@/assets/fonts/Raleway/Raleway-Medium.woff2';

import localFont from 'next/font/local';

const fontRaleway = localFont({
  src: [
    {
      path: '@/assets/fonts/Raleway/Raleway-Medium.woff2',
      weight: '400',
    },
    {
      path: './../assets/fonts/raleway/Raleway-Bold.woff2',
      weight: '500',
    },
  ],

  variable: 'font-family-body',
  fallback: ['sans-serif'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Ink. House</title>
        <link rel="shortcut icon" href="star.png" />
      </head>
      <body className={fontRaleway.variable}>{children}</body>
    </html>
  );
}
