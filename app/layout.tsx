import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MedCarefree",
  description: "A healthcare patient management system...",
  icons: {
    icon: "/assets/icons/logo-full-32x32.svg", // Default icon
    otherSizes: [
      { src: "/assets/icons/logo-full-16x16.svg", sizes: "16x16" },
      { src: "/assets/icons/logo-full-32x32.svg", sizes: "32x32" },
      { src: "/assets/icons/logo-full.svg", sizes: "any" },
    ],
  } as unknown as Metadata["icons"], // Force typing if necessary
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}