import MarqueeComponent from "@/components/MarqueeComponent";

export default function Main(props) {
    return (
        <main className="flex flex-col items-center justify-center mt-[26px]">
            {/* Extra Bold Title */}
            <h1 className="text-9xl font-extrabold text-center my-8 tracking-wider">
                İZİNİ<br />KODA<br />BIRAK
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-400 text-center px-4 mb-8 max-w-[471px]">
                Yazılım, tasarım ve teknoloji ile ilgilenenleri bir araya getiren topluluk olma yolunda ilerliyoruz!
                Network ve tecrübelerinizi paylaşmaya var mısınız?
            </p>

            {/* Join Button */}
            <button className="bg-primary text-secondary px-6 py-2 rounded-lg hover:bg-secondary hover:text-primary  mb-8">
                Aramıza katıl!
            </button>

            {/* Hashtags */}
            <div className="flex flex-wrap justify-center space-x-4 text-primary font-extrabold	">
                <span className="text-lg hover:text-white">#super</span>
                <span className="text-lg hover:text-white">#modern</span>
                <span className="text-lg hover:text-white">#community</span>
                <span className="text-lg text-secondary hover:text-white">#platform</span>
            </div>

            <MarqueeComponent/>
        </main>
    )
}