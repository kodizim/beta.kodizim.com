import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import dynamic from 'next/dynamic'

const RemoteMario = dynamic(
    () => import("kodizimEvents/mario"),
    { ssr: false }
)

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        This is a Composer page
        <RemoteMario />
    </main>
  )
}
