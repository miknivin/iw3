import "../styles/index.scss";
import { Metadata } from 'next';

const isDev = process.env.NODE_ENV === "development";

export const metadata: Metadata = {
  title: {
    default: "iW3 - Logistics, Infrastructure & Procurement Solutions",
    template: "%s | iW3"
  },
  description: "iW3 provides comprehensive logistics, infrastructure, and procurement solutions globally. Expert services in project logistics, strategic procurement, and infrastructure development.",
  keywords: "logistics, infrastructure, procurement, supply chain, project logistics, strategic consulting, iW3",
  authors: [{ name: "iW3" }],
  creator: "iW3",
  publisher: "iW3",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
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
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
