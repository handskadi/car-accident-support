import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Script from "next/script";


const nunitoSans = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Accident Claims Line",
  description: "Independent, hassle-free claims assistance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads base tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-963954127"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Base Google Ads config
            gtag('config', 'AW-963954127');

            // Phone conversion tracking
            gtag('config', 'AW-963954127/5TihCMz2pY0aEM-L08sD', {
              'phone_conversion_number': '1800 841 323'
            });
          `}
        </Script>
      </head>
      <body className={`${nunitoSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
