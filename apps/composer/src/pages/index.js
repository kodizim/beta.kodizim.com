import {Cabin} from 'next/font/google'
import Layout from "@/components/Layout";
import Main from "@/components/Main";

export default function Home() {
    return (
        <Layout>
            <div className="background-image"></div>
            <Main/>
        </Layout>
    )
}
