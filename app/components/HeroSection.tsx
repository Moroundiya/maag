import Image from "next/image";
import { Eye } from 'lucide-react';
import Medium from "../layouts/HeroMedium";
import HeroSmall from "../layouts/HeroSmall";

export default function HeroSection() {
    return (
        <div className="w-full xl:px-8 2xl:px-12 grid lg:grid-cols-2 relative top-36 pb-20">
            <div className="border-r pr-3 border-[#00000027]">
                <div className="w-full h-[400px] xl:h-[350px] 2xl:h-[400px] relative overflow-hidden rounded-md">
                    <Image src="/demo-image-1.webp" alt="" fill className="rounded-md object-cover hover:scale-105 transition-all duration-500" />
                </div>
                <h1 className="font-bold text-5xl pt-4 pb-2 hover:text-[#0000008d] transition-all duration-300">How Music Tours Create Unforgettable Moments</h1>
                <p className="text-[#525252] leading-tight">In the Age of Information, news media faces both unprecedented opportunities and significant challenges.</p>
                <div className="w-full border-b border-[#00000027] my-4"></div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3 text-sm">
                        <div className="bg-[#0000002b] px-2 py-0.5 rounded-sm">
                            Events
                        </div>
                        <p>Jan 7, 2025</p>
                        <p>by Joanna Wellick</p>
                    </div>
                    <div className="flex items-center justify-center space-x-0.5">
                        <Eye className="" size={18} />
                        <p>3</p>
                    </div>
                </div>
            </div>

            <div className="pl-3 grid grid-cols-2">
                <div className="space-y-8 border-r pr-3 border-[#00000027]">
                    <Medium title="Exploring the Evolution of Jazz: From Classic to Contemporary" date="Jan 7, 2025" category="Events" author="Joanna Wellick" views={3} image="/demo-image-3.webp" />
                    <Medium title="The Best Rock Albums Released This Year: Must-Listen Tracks and Standout Records" date="Jan 7, 2025" category="Events" author="Joanna Wellick" views={3} image="/demo-image-2.webp" />
                </div>
                <div className="space-y-4 pl-3">
                    <HeroSmall title="The Rise of Indie Music: How Independent Artists Are Changing the Industry" date="Jan 7, 2025" category="Events" image="/demo-image-5.webp" />
                    <HeroSmall title="Behind the Scenes: The Making of a Blockbuster Hit" date="Jan 7, 2025" category="Events" image="/demo-image-6.webp" />
                    <HeroSmall title="The Lure of Nostalgia: How Retro Music Comebacks Are Shaping Today’s Soundscape" date="Jan 7, 2025" category="Events" image="/demo-image-4.webp" />
                    <HeroSmall title="Top 10 Music Festivals You Can’t Miss This Year" date="Jan 7, 2025" category="Events" image="/demo-image-8.webp" />
                    <HeroSmall title="Exploring the Art of Visual Effects in Cinema" date="Jan 7, 2025" category="Events" image="/demo-image-7.webp" />
                </div>
            </div>
        </div>
    );
}