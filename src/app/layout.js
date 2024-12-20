import "./globals.css";
import { DM_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "SUKH SAGAR INDUSTRIES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/favicon.ic" type="image/x-icon" />
        <title>{metadata.title}</title>
      </head>
      <body className={dmSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}