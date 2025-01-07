import type { Metadata } from "next";
import "./globals.css";

import { headers } from "next/headers";
import ContextProvider from '@/Context/ContextProvider'


export const metadata: Metadata = {
  title: "Musksimpson",
  description: "Presale Website of Musksimpson",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersPromise = headers();
  const headersObject = await headersPromise;
  const cookies = await headersObject.get('cookie');

  return (
    <html lang="en">
      <body>
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  );
}