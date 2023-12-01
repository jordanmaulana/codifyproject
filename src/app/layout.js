import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codivent",
  description:
    "Look no further! Our tickets are the simplest way for you to experience a live event.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
