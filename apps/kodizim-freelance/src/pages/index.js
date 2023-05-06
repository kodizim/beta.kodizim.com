import Image from 'next/image'
import { Inter } from 'next/font/google'
import FreelancePage from "@/components/Freelance";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <FreelancePage />
  )
}
