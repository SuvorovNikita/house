import '@/styles/globals.scss';
import { Raleway } from 'next/font/google';

const fontRaleway = Raleway({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-raleway',
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
