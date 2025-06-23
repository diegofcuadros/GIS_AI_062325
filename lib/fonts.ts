import { Inter, Lora } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"], // Include weights you might need
  variable: "--font-lora",
})
