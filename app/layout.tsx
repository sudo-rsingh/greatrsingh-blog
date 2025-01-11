import Link from "next/link";
import "../styles/globals.css";
import SubscribeButton from "../components/Subscribe";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Rakshit's Blog",
  description: "Machine Learning indepth articles.",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
