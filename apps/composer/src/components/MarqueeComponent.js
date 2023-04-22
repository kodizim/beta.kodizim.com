import React from 'react';

const MarqueeComponent = () => {
    return (
        <div className="flex relative overflow-hidden mt-8 w-full"> {/* Updated width */}
            <div className="animate-marquee outline-text whitespace-nowrap text-9xl text-primary">
                KODİZİM
            </div>
            <div className="animate-marquee outline-text whitespace-nowrap text-9xl text-primary ml-4">
                KODİZİM
            </div>
        </div>
    );
};

export default MarqueeComponent;