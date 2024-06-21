import '@/styles/globals.scss';
import medium from '@/assets/fonts/Raleway/Raleway-Medium.woff2';
import bold from '@/assets/fonts/Raleway/Raleway-Bold.woff2';

import localFont from 'next/font/local';

const fontRaleway = localFont({
  src: [
    {
      path: { medium },
      weight: '400',
    },
    {
      path: { bold },
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
