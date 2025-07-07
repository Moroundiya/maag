import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="w-full px-12 grid grid-cols-2 pt-10 mb-20">
            <div className="relative">
                <div className="w-full h-[400px] relative overflow-hidden rounded-md">
                    <Image src="/demo-image-1.webp" alt="" fill className="rounded-md object-cover hover:scale-105 transition-all duration-500" />
                </div>
                <h1 className="font-bold text-5xl pt-4 pb-2 hover:text-[#0000008d] transition-all duration-300">How Music Tours Create Unforgettable Moments</h1>
                <p className="text-[#525252] leading-tight">In the Age of Information, news media faces both unprecedented opportunities and significant challenges.</p>
                <div className="w-full border-b border-[#00000039] my-4.5"></div>
            </div>
        </div>
    );
}