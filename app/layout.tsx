import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App Practice",
  description: "By Fardeen Karim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pt-8 pl-8">
        <Link href="/" className='bg-neutral-950 text-white p-5 rounded-md text-xl mr-5'>Home</Link>
        <Link href="/about" className='bg-neutral-950 text-white p-5 rounded-md text-xl mr-5'>About</Link>
        <Link href="/service" className='bg-neutral-950 text-white p-5 rounded-md text-xl mr-5'>Service</Link>
        <Link href="/portfolio" className='bg-neutral-950 text-white p-5 rounded-md text-xl mr-5'>Portfolio</Link>
        <Link href="/blog" className='bg-neutral-950 text-white p-5 rounded-md text-xl mr-5'>Blog</Link>
          <Link href="/contact" className='bg-neutral-950 text-white p-5 rounded-md text-xl mr-5'>Contact</Link>
          </div>
        {children}
      </body>
    </html>
  );
}