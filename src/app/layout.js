import { Open_Sans } from "next/font/google";
import "./main.scss";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Parkntt",
  description: "ParkNTT helps drivers contact and notify each other about any problem with their vehicles without sharing contact information. It allows you to avoid stressful situations, save time, escape from parking tickets and reduce unnecessary expenses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
