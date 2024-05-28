import '../styles/globals.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="star.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
