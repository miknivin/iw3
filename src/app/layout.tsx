import "../styles/index.scss";

const isDev = process.env.NODE_ENV === "development";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="description" content="iw3" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        ``
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
