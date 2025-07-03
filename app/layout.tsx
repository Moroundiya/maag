import type { Metadata } from "next";
import "./globals.css";
import { Familjen_Grotesk } from 'next/font/google'

export const metadata: Metadata = {
  title: "MAAG",
  description: "A blog like no other",
};

const familjen = Familjen_Grotesk({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={familjen.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
