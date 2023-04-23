import Marquee from 'react-fast-marquee';

export default function MarqueeComponent() {
    return (<div className="w-screen flex justify-center items-center">
        <Marquee speed={40} gradient={false} pauseOnHover={false}>
            <span className="outline-tex">Kodizim</span>
        </Marquee>
    </div>);
}

