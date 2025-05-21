import type { Metadata } from "next";
import { Radio_Canada_Big } from "next/font/google";
import "./globals.css";


const radioCanadaBig = Radio_Canada_Big({
  variable: "--font-radio-canada-big",
  subsets: ["latin"],
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Tigerz",
  description: "Create your own experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${radioCanadaBig.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
