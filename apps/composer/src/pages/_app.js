import '@/styles/globals.css'
import Navbar from "@/components/Navbar";
import {Cabin} from 'next/font/google'

const cabin = Cabin({
    weights: [400, 700],
    preload: false,
})
export default function App({Component, pageProps}) {
    return (
        <main className={`${cabin.className}`}>
            <Navbar/>
            <Component {...pageProps} />
        </main>
    )
}
