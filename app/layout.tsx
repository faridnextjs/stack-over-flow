import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ThemeProvider from "@/context/themeProvider";
import { Toaster } from "sonner";
import { Suspense } from "react";
import SessionWrapper from "@/lib/actions/sessionWrapper";

export const metadata: Metadata = {
  title: "Dev Overflow Stable",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};
const googleSansFlex = localFont({
  src: "./fonts/GoogleSansFlex.ttf",
  variable: "--font-google-sans-flex",
  weight: "100 200 300 400 500 600 700 800 900",
});

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${googleSansFlex.variable}  antialiased`}>
        <Suspense>
          <SessionWrapper>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </SessionWrapper>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
