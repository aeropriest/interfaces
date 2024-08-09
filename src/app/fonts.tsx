import { Dancing_Script, Josefin_Sans, Nunito } from "next/font/google";
export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--dancing-script-font",
});
export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--josefin-sans-font",
});
export const nunito = Nunito({ subsets: ["latin"], variable: "--nunito-font" });
