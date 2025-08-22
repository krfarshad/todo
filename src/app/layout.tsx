import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../assets/css/globals.css";
import { AppProvider } from "@/providers/AppProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task managment",
  description: "",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <div className="min-h-screen bg-gradient-to-br px-4 from-slate-50 to-slate-700 flex flex-col items-center py-10">
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
